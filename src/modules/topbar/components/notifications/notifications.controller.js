const controller = ($scope, $timeout, baseNotificationService) => {
  const vm = $scope

  vm.notifications = baseNotificationService.notifications

  baseNotificationService.onNotificationChange((notifications) => {
    $timeout(() => {
      vm.notifications = notifications
    })
  })

  const onClickOutside = () => {
    $timeout(() => {
      vm.notificationOpen = false
      $timeout(() => document.removeEventListener('click', onClickOutside))
    })
  }

  vm.toogle = () => {
    vm.notificationOpen = !vm.notificationOpen
    if (vm.notificationOpen) {
      $timeout(() => document.addEventListener('click', onClickOutside))
    } else {
      $timeout(() => document.removeEventListener('click', onClickOutside))
    }
  }

};

export default controller;
