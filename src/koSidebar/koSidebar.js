
module.exports.registerElement = function (ko, menuCategories) {

    customElements.define('sidebar-ko',
        class extends HTMLElement {
            constructor() {
                super();
                const template = document
                    .getElementById('tpl-sidebar-ko')
                    .content;

                var tmplNode = template.cloneNode(true);

                const shadowRoot = this.attachShadow({mode: 'open'})
                    .appendChild(tmplNode);

                var root = this.shadowRoot.querySelector('.ko-root');
                ko.applyBindings({categories: menuCategories}, root);
            }
        }
    );
}

