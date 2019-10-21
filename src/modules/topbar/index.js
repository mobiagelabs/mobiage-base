import controller from './controllers/topbar.controller';
import template from './templates/topbar.template.html';
import './styles/topbar.style.scss';

import notifications from './components/notifications';
import cashier from './components/cashier';
import environment from './components/environment';
import environmentService from './components/environment/service/environment.service';
import service from './components/cashier/service/cashier.service';
import './components/search';
import './components/user';
import baseNotificationService from './services/base-notification-service'

const component = {
	bindings: {
		config: '='
	},
	template,
	controller,
	controllerAs: 'vm'
};

angular.module('mb.topbar', ['mb.topbar.search', 'mb.topbar.user'])
	.component('mbTopbar', component)
	.component('mbCashier', cashier)
	.component('mbEnvironment', environment)
	.component('mbTopbarNotifications', notifications)
	.service('environmentService', environmentService)
	.service('CashierService', service)
	.service('baseNotificationService', baseNotificationService)
