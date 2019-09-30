module.exports.registerElement = function ($, menuCategories) {
    customElements.define('sidebar-jq',
        class extends HTMLElement {
            constructor() {
                super();
                const template = document
                    .getElementById('tpl-sidebar-jq')
                    .content;

                var tmplNode = template.cloneNode(true);

                const shadowRoot = this.attachShadow({mode: 'open'})
                    .appendChild(tmplNode);

                var $root = $(this.shadowRoot.querySelector('.jq-root'));

                menuCategories.forEach(function (category) {
                    var $Submenu = $('<div><span></span><ul></ul></div>');
                    $Submenu.find('span').text(category.name);

                    category.entries.forEach(function (entry) {
                        var $entryElement = $('<li><a></a></li>');
                        $entryElement.find('a').attr('href', entry.link || '#');
                        $entryElement.find('a').text(entry.name);
                        $Submenu.find('ul').append($entryElement);
                    });
                    $root.append($Submenu);
                });
            }
        }
    );
}
