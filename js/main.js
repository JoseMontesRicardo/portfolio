var app = angular.module('portfolioApp', ['ngRoute']);
	
	app.config(function($routeProvider){
		$routeProvider
			.when('/home',{
				templateUrl: 'views/home.html'
			}).otherwise({
				redirectTo: '/'
			})
	})