import template from './item.template.html';

const item = {
	bindings: {
		config: '<',
		keys: '=?',
		firstChild: '<',
		lastChild: '<'
	},
	template,
	controllerAs: 'vm',
	controller: ['$scope', function ($scope) {
		const vm = this

		vm.$onInit = () => {
		}

		vm.showSubCategory = () => {
			return true
			// if (vm.config && vm.config.children) {
			// 	return vm.config.children.filter((children) => !children.key || (vm.keys || []).indexOf(children.key) !== -1).length > 0
			// }
			// return true
		}

	}]
};

export default item;
