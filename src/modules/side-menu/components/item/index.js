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
			if (vm.config.label == 'Fiscal') {
				console.log(vm)
			}
		}

		vm.showSubCategory = () => {
			if (vm.config && vm.config.children) {
				return vm.config.children.filter((children) => {
					return !children.key || (vm.keys || []).indexOf(children.key) !== -1
				}).length > 0
			}
			return true
		}

		vm.isKey = () => {
			return !vm.config.key || (vm.keys || []).indexOf(vm.config.key) !== -1
		}

	}]
};

export default item;
