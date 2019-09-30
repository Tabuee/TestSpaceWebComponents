module.exports.registerElement = function ($) {
    customElements.define('menu-row',
        class extends HTMLElement {
            constructor() {
                super();
                const template = document
                    .getElementById('tpl-menu-row')
                    .content;

                var tmplNode = template.cloneNode(true);

                const shadowRoot = this.attachShadow({mode: 'open'})
                    .appendChild(tmplNode);


                // jquery
                let aElement = $(this.shadowRoot.querySelector('a'));
                let href = $(this).attr('href');
                aElement.attr('href', href || '#');

                // vanillaJS
                // this.shadowRoot.querySelector('a').setAttribute('href', this.getAttribute('href') || '#');
            }
        }
    );
}
