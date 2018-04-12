import controller from './controllers/user.controller';
import template from './templates/user.template.html';
import service from './services/user.service';
import './styles/user.style.scss';

import btn from './components/btn';
import link from './components/link';

const component = {
	bindings: {
		config: '='
	},
	controller,
	template
};

export default component;

angular.module('mbgBaseTopbarUser', [])
	.component('mbgBaseUserLink', link)
	.component('mbgBaseUserBtn', btn)
	.service('mbgBaseUserService', service)
	.component('mbgBaseTopbarUser', component);
