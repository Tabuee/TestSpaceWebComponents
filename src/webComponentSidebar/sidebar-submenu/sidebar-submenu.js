module.exports.registerElement = function ($) {

    class X extends HTMLElement {
        constructor() {
            super();
            const template = document
                .getElementById('tpl-sidebar-submenu')
                .content;

            var tmplNode = template.cloneNode(true);

            const shadowRoot = this.attachShadow({mode: 'open'})
                .appendChild(tmplNode);
        }

        render(entries) {
            // ## With Polyfill
            const $entrySlot = $(this.shadowRoot.querySelector('#entry'));
            entries.forEach(function (entry) {
                $entrySlot.append('<menu-row href="' + entry.link + '"><span slot="link-title">' + entry.name + '</span></menu-row>');
            });

            // ## vanillaJS
            // const entrySlot = this.shadowRoot.getElementById('entry');
            // entries.forEach(function (entry) {
            //     if (entrySlot instanceof HTMLElement) {
            //         entrySlot.innerHTML += '<menu-row href="' + entry.link + '"><span slot="link-title">' + entry.name + '</span></menu-row>';
            //     }
            // });
        }
    }

    customElements.define('sidebar-submenu', X);
}
