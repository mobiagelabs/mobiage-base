const service = function () {
	this.notifications = []
	this.observers = []

	this.onNotificationChange = (callback) => {
		this.observers.push(callback)
	}

	this.setNotifications = (_notifications) => {
		this.notifications = _notifications
		this.observers.forEach((observer) => {
			observer(this.notifications)
		})
	}

}

export default service;
