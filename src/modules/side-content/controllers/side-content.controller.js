const controller = function ($scope, $timeout, MbgSideContent, $compile) {
	const vm = this;
	vm.active = false;
	vm.bgHide = true;
	vm.hoverButton = false;
	vm.contentBuffer = [];
	vm.activeContent = undefined;

	let animationInProgress = false;

	vm.open = (content) => {
		if (animationInProgress === false) {
			vm.activeContent = content;
			document.getElementById('mb-sc-content').innerHTML = vm.activeContent.template;
			const scope = $scope.$new();
			$compile(document.getElementById('mb-sc-content'))(scope);
			vm.activeContent.onOpen(content);
			animationInProgress = true;
			vm.bgHide = false;
			const active = () => {
				$timeout(() => {
					if (content.template !== '') {
						vm.active = true;
					}
				});
			};
			document.addEventListener('click', vm.close);
			requestAnimationFrame(active);
			$timeout(() => {
				animationInProgress = false;
			}, 500);
		}
	};

	vm.close = () => {
		if (animationInProgress === false) {
			if (vm.activeContent !== undefined && vm.activeContent.onClose !== undefined) {
				vm.activeContent.onClose();
			}
			animationInProgress = true;
			$timeout(() => {
				vm.active = false;
				document.removeEventListener('click', vm.close);
			});
			$timeout(() => {
				vm.bgHide = true;
			}, 250);
			$timeout(() => {
				animationInProgress = false;
			}, 500);
		}
	};

	vm.toggle = (content) => {
		if (vm.active === false) {
			vm.open(content);
		} else {
			vm.close(content);
		}
	};

	vm.stopPropagation = (evt) => {
		evt.stopPropagation();
	};

	vm.mouseEnterBtn = () => {
		$timeout(() => {
			vm.hoverButton = true;
		});
	};

	vm.mouseLeaveBtn = () => {
		$timeout(() => {
			vm.hoverButton = false;
		});
	};

	vm.updateComponent = () => {
		vm.contentBuffer = MbgSideContent.contentBuffer;
	};

	vm.$onInit = () => {
		MbgSideContent.registerComponent(vm.updateComponent, vm.close);
	};

	vm.$onDestroy = () => {

	};
};

export default controller;
