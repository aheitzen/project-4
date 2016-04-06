var app = angular.module("HikeServices", ["ngResource"]);

angular.module('HikeServices', ['ngResource'])
.factory('Hike', ['$resource', function($resource) {
  return $resource('/api/hikes/:id');
}])

.factory('Auth', ['$window', function($window) {
	return {
		saveToken: function(token) {
			$window.localStorage['mysecret'] = token;
		},
		getToken: function() {
			return $window.localStorage['mysecret'];
		},
		removeToken: function() {
			$window.localStorage.removeItem('mysecret');
		},
		isLoggedIn: function() {
			var token = this.getToken();
			return token ? true : false; 
		}

	};
}])

.factory('AuthInterceptor', ['Auth', function(Auth) {
	return {
		request: function(config) {
			var token = Auth.getToken();
			if (token) {
				config.headers.Authorization = 'Bearer ' + token;

			}
			return config;
		}
	}
}])
