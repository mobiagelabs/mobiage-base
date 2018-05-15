import template from './templates/footer.template.html';
import controller from './controllers/footer.controller';
import './styles/footer.style.scss';

const component = {
	bindings: {

	},
	controller,
	controllerAs: 'vm',
	template
};

const module = angular.module('mb.footer', []);
module.component('mbFooter', component);
