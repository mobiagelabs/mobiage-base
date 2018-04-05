import 'angular-hotkeys/build/hotkeys.min';

import 'simplebar/dist/simplebar.css';
import 'simplebar/dist/simplebar';

import 'angular-sanitize';

import './css/style.desktop.css';
import './css/style.mobile.css';

import template from './views/sideMenu.html';
import controller from './controllers/sideMenu';
import service from './services/sideMenu';

/* Componentes */
import quickMenu from './components/quickMenu';
import btn from './components/btn';
import category from './components/category';
import subCategory from './components/subCategory';
import item from './components/item';
import html from './components/html';

const component = {
	bindings: {
		config: '='
	},
	template,
	controller
};

angular.module('mbgBaseSideMenu', ['cfp.hotkeys', 'ngSanitize'])
	.component('mbgBaseSideMenuQuickMenu', quickMenu)
	.component('mbgBaseSideMenuItem', item)
	.component('mbgBaseSideMenuCategory', category)
	.component('mbgBaseSideMenuSubCategory', subCategory)
	.component('mbgBaseSideMenuBtn', btn)
	.component('mbgBaseSideMenuHtml', html)
	.component('mbgBaseSideMenu', component)
	.service('sideMenuService', service);
