import controller from './controllers/user.controller';
import template from './templates/user.template.html';
import service from './services/user.service';
import './styles/user.style.scss';

import btn from './components/btn';
import link from './components/link';
import loading from './components/loading';

const component = {
	bindings: {
		config: '=',
		disabledUserFocus: '=?'
	},
	controller,
	controllerAs: 'vm',
	template
};

export default component;

angular.module('mb.topbar.user', [])
	.component('mbTULink', link)
	.component('mbTUBtn', btn)
	.component('mbTULoading', loading)
	.service('mbUserService', service)
	.component('mbTUser', component);
