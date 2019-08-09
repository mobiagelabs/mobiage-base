import template from './item.template.html';
import { type } from 'os';

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
			if (vm.config && vm.config.children) {
				if (typeof children.key === 'function') {
					return vm.config.children.filter((children) => !children.key || (vm.keys || []).indexOf(children.key) !== -1).length > 0
				}
				return vm.config.children.filter((children) => !children.key || (vm.keys || []).indexOf(children.key) !== -1).length > 0
			}
			return true
		}

		vm.isKey = () => {
			return !vm.config.key || (vm.keys || []).indexOf(vm.config.key) !== -1
		}

	}]
};

export default item;
