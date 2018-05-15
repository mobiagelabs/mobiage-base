import 'angular-hotkeys/build/hotkeys.min';
import 'overlayscrollbars/js/OverlayScrollbars';
import 'overlayscrollbars/css/OverlayScrollbars.css';

import 'angular-sanitize';

import '../side-menu';
import '../topbar';
import '../top-notifications';
// import '../footer';
import '../pageloader';
import template from './templates/base.template.html';
import controller from './controllers/base.controller';
import './styles/base.style.scss';

import container from './components/container';
import contentContainer from './components/content-container';

import themeProvider from './providers/theme.provider';

const component = {
	bindings: {
		config: '='
	},
	controller,
	controllerAs: 'vm',
	template,
	transclude: true
};

angular.module('mbg.base', [
	'mb.sidemenu',
	'mb.topbar',
	'mb.notifications',
	// 'mb.footer',
	'mb.pageloader',
	'cfp.hotkeys'
])
	.component('mbgBase', component)
	.component('mbContainer', container)
	.component('mbContent', contentContainer)
	.provider('mbTheme', themeProvider);
