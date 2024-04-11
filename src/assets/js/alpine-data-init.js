import Alpine from 'alpinejs'

window.Alpine = Alpine;

document.addEventListener('alpine:init', () => {
    console.log('alpine:init');
    Alpine.data('alpineAppBody', () => {
        return {
            topMenuItems: [
                {
                    type: 'anchor', // 'button'|'link'|'anchor'
                    label: 'DZAD',
                    class: {},
                    attributes: {
                        'data-goto-anchor': 'know-more-home',
                        'x-on:click': 'anchorGoTo',
                    },
                },
                {
                    type: 'anchor',
                    label: 'Aprendizagem',
                    attributes: {
                        'data-goto-anchor': 'know-more-learning',
                        'x-on:click': 'anchorGoTo',
                    },
                },
                {
                    type: 'anchor',
                    label: 'Garantia',
                    attributes: {
                        'data-goto-anchor': 'know-more-guarantee',
                        'x-on:click': 'anchorGoTo',
                    },
                },
                {
                    type: 'anchor',
                    label: 'Feedback',
                    attributes: {
                        'data-goto-anchor': 'know-more-feedback',
                        'x-on:click': 'anchorGoTo',
                    },
                },
                {
                    type: 'anchor',
                    label: 'Investimento',
                    attributes: {
                        'data-goto-anchor': 'know-more-buy',
                        'x-on:click': 'anchorGoTo',
                    },
                },
                {
                    type: 'anchor',
                    label: 'FAQ',
                    attributes: {
                        'data-goto-anchor': 'know-more-doubts',
                        'x-on:click': 'anchorGoTo',
                    },
                },
                // {
                //     type: 'anchor',
                //     label: 'Garanta já seu curso',
                //     attributes: {
                //         'data-goto-anchor': 'know-more-buy',
                //         'x-on:click': 'anchorGoTo',
                //     },
                // },
            ],
            anchorGoTo: (event) => {
                let goto = event.target.dataset.gotoAnchor;
                let element = goto ? document.querySelector(`#${goto}`) : null;
                console.log('onClick', event.target.dataset, goto, element);

                if (!element || !element.scrollIntoView) {
                    return;
                }

                element.scrollIntoView({ behavior: 'smooth' });
            },

            // scrollAction
            scrollToSection: (buttonId, sectionId) => {
                let button = document.querySelector(`#${buttonId}`);
                let section = document.querySelector(`#${sectionId}`);

                if (!button || !section) {
                    return;
                }

                section.scrollIntoView({ behavior: 'smooth' });
            },

            // toggleReadMore
            toggleReadMore: (classContent, classButton) => {
                let moreText = document.querySelector(classContent);
                let btnText = document.querySelector(classButton);

                if (moreText.classList.contains('hidden')) {
                    moreText.classList.remove('hidden');
                    btnText.textContent = 'Ler Menos';
                    return;
                }

                moreText.classList.add('hidden');
                btnText.textContent = 'Ler Mais';
            },
        };
    })
})

Alpine.start();
