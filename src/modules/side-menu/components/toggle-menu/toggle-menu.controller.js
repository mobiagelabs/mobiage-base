const controller = function ($scope, $timeout) {
	$timeout(() => {
		$scope.active = 1
		console.log($scope.active)
	})

	$scope.toggleNav = (number) => {
		$scope.active = number
		const element = document.getElementsByClassName('fa-sync-alt')
		const result = Number(element[0].style.transform.match(/[0-9]*/g).join(''))
		const deg = result > 0 ? result - 360 : result + 360
		element[0].style.transform = `rotate(${deg}deg)`
	}
};

export default controller;
