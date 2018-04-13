import controller from './controllers/user.controller';
import template from './templates/user.template.html';
import service from './services/user.service';
import './styles/user.style.scss';

import btn from './components/btn';
import link from './components/link';
import loading from './components/loading';

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
	.component('mbgBaseUserLoading', loading)
	.service('mbgBaseUserService', service)
	.component('mbgBaseTopbarUser', component);
