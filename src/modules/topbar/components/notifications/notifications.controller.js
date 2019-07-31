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

  vm.handleClickNotification = (evt, notification, action) => {
    if (notification.actions && notification.actions.length > 0) {
      evt.preventDefault()
      evt.stopPropagation()
      if (action) {
        onClickOutside()
        notification.onClick(notification, action)
      }
    } else {
      if (notification.onClick) {
        notification.onClick(notification, action)
      }
    }
  }

};

export default controller;
