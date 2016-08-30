angular.module('portfolioApp.directives', [])

	.directive("scroll", function ($window) {
		return {
			restrict: 'E',
			templateUrl: 'templates/header-scroll.html',
			controller: function($scope, $window){
				// $scope.page='Home'
				if (document.readyState === "complete") {
					if ($window.scrollY !== 0 ){
				 		angular.element(document.querySelector('.web-header')).css('boxShadow', '0 6px 10px #b6b6b6')
				 	}	
				}
				angular.element($window)
				 .bind('scroll', function(e){
				 	console.log($window.scrollY)
				 	if ( $window.scrollY === 0 ){
				 		angular.element(document.querySelector('.header-body')).css('height', '35vh')
				 	} else if ( $window.scrollY > 159 ){
				 		angular.element(document.querySelector('.web-header')).css('boxShadow', '0 6px 10px #b6b6b6')
				 	} else if ( $window.scrollY >= 10 ){
				 		angular.element(document.querySelector('.web-header')).css('boxShadow', 'none')
				 	}


				 	angular.element(document.querySelector('.header-body')).css('height', 35-$window.scrollY)
				 })
			}
		}
	})