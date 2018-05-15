import template from './templates/pageloader.template.html';
import controller from './controllers/pageloader.controller';
import service from './services/pageloader.service';

import './styles/pageloader.style.scss';

const component = {
	template,
	controller,
	controllerAs: 'vm'
};

const module = angular.module('mb.pageloader', []);
module.service('MbgPageLoader', service);
module.component('mbPageloader', component);
