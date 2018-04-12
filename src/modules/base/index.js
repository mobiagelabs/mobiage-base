import 'angular-hotkeys/build/hotkeys.min';
import 'simplebar/dist/simplebar.css';
import 'simplebar/dist/simplebar';

import 'angular-sanitize';

import '../side-menu';
import '../topbar';
import template from './templates/base.template.html';
import './styles/style.base.scss';

import container from './components/container';
import contentContainer from './components/content-container';

const component = {
	template,
	transclude: true
};

angular.module('mbgBase', ['mbgBaseSideMenu', 'mbgBaseTopbar'])
	.component('mbgBase', component)
	.component('mbgBaseContainer', container)
	.component('mbgBaseContentContainer', contentContainer);
