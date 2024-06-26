import 'flowbite'
import './alpine-data-init.js'

// // scrollAction
// window.scrollToSection = function(buttonId, sectionId) {
//     var button = document.getElementById(buttonId);
//     var section = document.getElementById(sectionId);

//     if (!button || !section) {
//         return;
//     }

//     section.scrollIntoView({ behavior: 'smooth' });
// }

// scrollToSection('know-more-journey-button', 'know-more-journey');

//ver mais
window.toggleReadMore = function(classContent, classButton) {
    let moreText = document.querySelector(classContent);
    let btnText = document.querySelector(classButton);

    if (moreText.classList.contains('hidden')) {
        moreText.classList.remove('hidden');
        btnText.textContent = 'Ler Menos';
        return;
    }

    moreText.classList.add('hidden');
    btnText.textContent = 'Ler Mais';
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
    });
});

// import '../../../node_modules/flowbite/dist/flowbite.min.css'
import '../css/style.css'
