import template from './templates/side-menu.template.html';
import controller from './controllers/sideMenu';
import service from './services/sideMenu';
import './styles/side-menu.style.scss';

/* Componentes */
import quickMenu from './components/quick-menu';
import link from './components/link';
import btn from './components/btn';
import category from './components/category';
import subCategory from './components/sub-category';
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
	.component('mbgBaseSideMenuLink', link)
	.component('mbgBaseSideMenuBtn', btn)
	.component('mbgBaseSideMenuHtml', html)
	.component('mbgBaseSideMenu', component)
	.service('sideMenuService', service);
