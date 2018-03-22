import '../side-menu';
import '../topbar';
import template from './views/base.html';
import './css/style.desktop.css';

import container from './components/container';
import contentContainer from './components/contentContainer';

const component = {
	template,
	transclude: true
};

angular.module('mbgBase', ['mbgBaseSideMenu', 'mbgBaseTopbar'])
	.component('mbgBase', component)
	.component('mbgBaseContainer', container)
	.component('mbgBaseContentContainer', contentContainer);
