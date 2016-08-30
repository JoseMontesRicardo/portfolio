var app = angular.module('portfolioApp', [
		'ngRoute',
		'portfolioApp.controllers',
		'portfolioApp.directives'	
	]);
	
	app.config(function($routeProvider){
		$routeProvider
			.when('/home',{
				templateUrl: 'views/home.html',
				controller: 'homeController'
			})
			.when('/tools',{
				templateUrl: 'views/tools.html'
			})
			.otherwise({
				redirectTo: '/home'
			})
	})