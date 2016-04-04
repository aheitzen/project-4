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
		.state(
			"d3",
			{
				url:"/d3",
				templateUrl: "views/d3.html",
				controller: "d3Ctrl"
			}
		)
		.state(
			"search",
			{
				url:"/search",
				templateUrl: "views/search.html",
				controller: "SearchCtrl"
			}
		)
		.state(
			"showpage",
			{
				url:"/showpage",
				templateUrl: "views/showpage.html",
				controller: "ShowPageCtrl"
			}
		)
	}
]);
