import template from './templates/footer.template.html';
import controller from './controllers/footer.controller';
import service from './services/footer.service';
import './styles/footer.style.scss';
import footerPortal from './components/footer';

const component = {
	bindings: {
		onInit: '&?'
	},
	controller,
	controllerAs: 'vm',
	template
};

angular.module('mb.footer', [])
	.service('MbgFooterService', service)
	.component('mbFooterPortal', footerPortal)
	.component('mbFooter', component);
