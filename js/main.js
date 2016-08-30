var app = angular.module('portfolioApp', [
				'ngRoute'
			]);
	
	app.config(function($routerProvider){
		$routerProvider
			.when('/home',{
				templateUrl: 'views/home.html'
			}).otherwise({
				redirectTO: '/'
			})
	})