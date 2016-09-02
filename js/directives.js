angular.module('portfolioApp.directives', [])

	.directive("scroll", function ($window) {
		return {
			restrict: 'E',
			templateUrl: 'templates/header-scroll.html',
			controller: function($scope, $window , $element){
				var headerBar = $element[0].childNodes[0]
				
				$scope.start = function(pageTitle){
					$scope.pageTitle = pageTitle
				}

				if (document.readyState === "complete") {
					if ($window.scrollY > 159){
				 		headerBar.css('boxShadow', '0 6px 10px #b6b6b6')
				 	}
				}
			}
		}
	})