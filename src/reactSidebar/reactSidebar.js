const startReact = require('./build/index').start;

module.exports.registerElement = function () {
    customElements.define('sidebar-react',
        class extends HTMLElement {
            constructor() {
                super();
                const template = document
                    .getElementById('tpl-sidebar-react')
                    .content;

                var tmplNode = template.cloneNode(true);

                const shadowRoot = this.attachShadow({mode: 'open'})
                    .appendChild(tmplNode);

                var root = this.shadowRoot.querySelector('.react-root');
                startReact(root);
            }
        }
    );
}
