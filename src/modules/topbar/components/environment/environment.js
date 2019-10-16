const controller = ($scope, environmentService, $timeout) => {

  environmentService.registerCBEnvironment((isDemo, onClick) => {
    $timeout(() => {
      $scope.isDemo = isDemo
      $scope.onClick = onClick
    })
  })

  $scope.handleClick = () => {
    if ($scope.onClick) { $scope.onClick() }
  }

};

export default controller;
