var app = angular.module('HikeApp', ['HikeCtrls', 'ui.router', 'ngVidBg']);

app.config([
	"$stateProvider",
	"$urlRouterProvider",
	"$locationProvider",
	function($stateProvider, $urlRouterProvider, $locationProvider) {
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
		.state(
			"signup",
			{
				url:"/signup",
				templateUrl: "views/signup.html",
				controller: "SignupCtrl"
			}
		)
		.state (
			"login",
			{
				url:"/login",
				templateUrl: "views/login.html",
				controller: "LoginCtrl"
			}
		)
		.state (
			"profile",
			{
				url:"/profile",
				templateUrl: "views/profile.html",
				controller: "ProfileCtrl"
			}
		)
	$locationProvider.html5Mode(true); //elimated the hash in the url
	}
]);
