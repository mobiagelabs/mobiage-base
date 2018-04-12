const controller = function ($element, $scope, hotkeys) {
	const click = () => {
		$element[0].children[0].click();
	};
	this.$onInit = () => {
		const { hotkey } = this;
		if (hotkey && hotkey.length > 0) {
			hotkeys.bindTo($scope).add({ combo: hotkey, callback: click });
		}
	};
};

export default controller;
