module.exports.registerElement = function ($, menuCategories) {
    customElements.define('web-component-sidebar',
        class extends HTMLElement {
            constructor() {
                super();
                const template = document
                    .getElementById('tpl-sidebar')
                    .content;

                var tmplNode = template.cloneNode(true);

                const shadowRoot = this.attachShadow({mode: 'open'})
                    .appendChild(tmplNode);

                // ## jquery
                var $nav = $(this.shadowRoot.querySelector('nav'));

                menuCategories.forEach(function (menuCategory) {
                    var $subMenu = $('<sidebar-submenu></sidebar-submenu>');
                    $subMenu.append('<span slot="category-name">' + menuCategory.name + '</span>');
                    $subMenu[0].render(menuCategory.entries);
                    $nav.append($subMenu);
                });

                // ## vanillaJS
                // var navElement = this.shadowRoot.querySelector('nav');
                // menuCategories.forEach(function (menuCategory) {
                //     let subMenu = document.createElement('sidebar-submenu', {is: 'sidebar-submenu'});
                //     subMenu.innerHTML = '<span slot="category-name">' + menuCategory.name + '</span>';
                //     // pass properties in explicit call
                //     subMenu.render(menuCategory.entries);
                //     navElement.appendChild(subMenu);
                // });
            }
        }
    );
}
