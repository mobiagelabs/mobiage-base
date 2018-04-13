import template from './content-container.template.html';
import './content-container.style.scss';


const component = {
	template,
	transclude: true,
	controller($timeout) {
		this.$onInit = () => {
			const element = document.getElementById('mb-cc');
			$timeout(() => {
				window.OverlayScrollbars(element, {
					className: 'os-theme-thin-dark'
				});
			}, 50);
		};
	}
};

export default component;
