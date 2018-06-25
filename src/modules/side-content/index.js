import template from './templates/side-content.template.html';
import controller from './controllers/side-content.controller';
import service from './services/side-content.service';
import './styles/side-content.style.scss';

import btn from './components/btn';

const component = {
	template,
	controller,
	controllerAs: 'vm'
};

angular.module('mb.sidecontent', ['ngSanitize'])
	.component('mbScBtn', btn)
	.component('mbSideContent', component)
	.service('MbgSideContent', service);
