import 'angular-hotkeys/build/hotkeys.min';
import 'overlayscrollbars/js/OverlayScrollbars';
import 'overlayscrollbars/css/OverlayScrollbars.css';

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
