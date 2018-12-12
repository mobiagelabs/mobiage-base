import 'angular-sanitize/angular-sanitize.min';
import 'overlayscrollbars/js/jquery.overlayScrollbars.min';
import 'overlayscrollbars/css/OverlayScrollbars.min.css';
import 'angular-hotkeys/build/hotkeys.min';

import '../side-menu';
import '../topbar';
import '../top-notifications';
import '../footer';
import '../pageloader';
import '../side-content';
import template from './templates/base.template.html';
import controller from './controllers/base.controller';
import './styles/base.style.scss';
import './styles/base.flex.scss';

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
	'mb.footer',
	'mb.pageloader',
	'mb.sidecontent',
	'cfp.hotkeys'
])
.component('mbgBase', component)
.component('mbContainer', container)
.component('mbContent', contentContainer)
.provider('mbTheme', themeProvider);
