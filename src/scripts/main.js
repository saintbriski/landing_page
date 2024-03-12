document.addEventListener("DOMContentLoaded", function() {
    const selector = document.querySelector('.season-selector');
    const optionsList = selector.querySelector('.options-list');
    const episodesLists = document.querySelectorAll('.episodes__list');

    selector.addEventListener('click', function() {
    const expanded = selector.getAttribute('aria-expanded') === 'true' || false;
    selector.setAttribute('aria-expanded', !expanded);
    optionsList.setAttribute('aria-hidden', expanded);
    optionsList.style.display = expanded ? 'none' : 'block';
    });

    optionsList.addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        const season = event.target.dataset.season;
        selector.querySelector('.selected-option').textContent = event.target.textContent;
        updateEpisodes(season);
    }
    });

    document.addEventListener('click', function(event) {
    if (!selector.contains(event.target)) {
        optionsList.style.display = 'none';
        selector.setAttribute('aria-expanded', 'false');
        optionsList.setAttribute('aria-hidden', 'true');
    }
    });

    function updateEpisodes(season) {    
        episodesLists.forEach(function(list) {
        const seasonAttribute = list.getAttribute('data-season');
        if (seasonAttribute === season) {
            list.style.display = 'grid';
            list.classList.add('active-season');
        } else {
            list.style.display = 'none';
            list.classList.remove('active-season');
        }
        });
    }
});
