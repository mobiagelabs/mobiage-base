import template from './item.template.html';

const item = {
	bindings: {
		config: '<',
		firstChild: '<',
		lastChild: '<'
	},
	controller: function () {
		this.$onInit = () => {
			// console.log(this)
		}
	},
	template
};

export default item;
