angular.module('portfolioApp.directives', [])

	.directive("scroll", function ($window) {
		return {
			restrict: 'E',
			templateUrl: 'templates/header-scroll.html',
			controller: function($scope, $window){
				angular.element($window)
				 .bind('scroll', function(e){
				 	angular.element(document.querySelector('.header-body')).css('backgroundColor', 'red')
				 })
			}
		}
	})