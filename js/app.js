var app = angular.module('CharityApp', ['CharityCtrls', 'ui.router', 'ngVidBg']);


app.config([
	"$stateProvider",
	"$urlRouterProvider",
	function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise("/");
		$stateProvider.state("home", {
			url: "/",
			templateUrl: "views/home.html",
			controller: "HomeCtrl"

		})
	}
]);
