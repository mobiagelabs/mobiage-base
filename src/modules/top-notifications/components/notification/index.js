import template from './notification.template.html';
import controller from './notification.controller';

import './notification.style.scss';

const component = {
	bindings: {
		notif: '<',
		closeNotification: '&',
		notificationStack: '='
	},
	template,
	controller,
	controllerAs: 'vm'
};

export default component;
