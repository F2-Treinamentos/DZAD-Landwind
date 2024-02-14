// scrollAction
function scrollToSection(buttonId, sectionId) {
    var button = document.getElementById(buttonId);
    var section = document.getElementById(sectionId);

    if (!button || !section) {
        return;
    }

    section.scrollIntoView({ behavior: 'smooth' });
}

// // scrollToSection('know-more-journey-button', 'know-more-journey');
// // scrollToSection('know-more-resume-button', 'know-more-resume');

//ver mais
function toggleReadMore(classContent, classButton) {
    var moreText = document.querySelector(classContent);
    var btnText = document.querySelector(classButton);

    if (moreText.classList.contains('hidden')) {
        moreText.classList.remove('hidden');
        btnText.textContent = 'Ler Menos';
    } else {
        moreText.classList.add('hidden');
        btnText.textContent = 'Ler Mais';
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelectorAll('[data-goto-anchor]').forEach(caller => {
        caller.addEventListener('click', function (event) {
            let goto = event.target.dataset.gotoAnchor;
            let element = goto ? document.querySelector(goto) : null;

            if (!element || !element.scrollIntoView) {
                return;
            }

            element.scrollIntoView({ behavior: 'smooth' });
        });
    })
});
