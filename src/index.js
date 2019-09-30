// require('@webcomponents/template');
// require('@webcomponents/custom-elements');
// require('@webcomponents/shadydom');
require('@webcomponents/webcomponentsjs');
const menuCategories = require('../data/menuCategories.json');

const ko = require('knockout');
const $ = require('jquery');

const koSidebar = require('./koSidebar/koSidebar');
const reactSidebar = require('./reactSidebar/reactSidebar');
const jquerySidebar = require('./jquerySidebar/jquerySidebar');

const menuRow = require('./webComponentSidebar/menu-row/menu-row');
const sidebarSubmenu = require('./webComponentSidebar/sidebar-submenu/sidebar-submenu');
const sidebar = require('./webComponentSidebar/sidebar/sidebar');

$(document).ready(function () {
    koSidebar.registerElement(ko, menuCategories);
    reactSidebar.registerElement();
    jquerySidebar.registerElement($, menuCategories);

    menuRow.registerElement($);
    sidebarSubmenu.registerElement($);
    sidebar.registerElement($, menuCategories);
});
