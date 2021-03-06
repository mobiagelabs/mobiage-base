import template from './templates/top-notifications.template.html';
import controller from './controllers/top-notifications.controller';
import service from './services/top-notifications.services';

import './styles/top-notifications.style.scss';

import notification from './components/notification';

const component = {
	template,
	controller,
	controllerAs: 'vm'
};

angular.module('mb.notifications', [])
	.service('MbgNotification', service)
	.component('mbNotification', notification)
	.component('mbNotifications', component);
