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
	controller,
	controllerAs: 'vm'
};

angular.module('mb.sidemenu', ['ngSanitize'])
	.component('mbSmQuickmenu', quickMenu)
	.component('mbSmItem', item)
	.component('mbSmCategory', category)
	.component('mbSmSubcategory', subCategory)
	.component('mbSmLink', link)
	.component('mbSmBtn', btn)
	.component('mbSmHtml', html)
	.component('mbSidemenu', component)
	.service('mbSidemenuService', service);
