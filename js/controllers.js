angular.module('portfolioApp.controllers', [])

	.controller('indexController', function($scope, $window,$timeout){

		angular.element($('.web-header__content__nav__options__list__items'))
			.bind('click', function(){
				angular.element($('.web-header__content__nav__options__list__items>a')).removeClass('activate-no-hover')
				angular.element($(this).children()).addClass('activate-no-hover')
			})

		angular.element($window)
			.bind('scroll', function(e){
				angular.element($('.header-body__title')).removeClass('_show')
				$scope.scroll = $window.pageYOffset

				if ( $scope.scroll > $scope.lastScroll ){//si hace scroll hacia abajo
					if ( $window.scrollY > 210 )
						angular.element(document.querySelector('.web-header')).css('boxShadow', '0 6px 10px #b6b6b6')
					if ( $window.scrollY >= 30 )
						angular.element($('.header-body__title')).addClass('_hide')
						$timeout(function() {
							angular.element($('.header-body__title')).removeClass('_hide')
							angular.element($('.header-body__title')).hide()
						}, 100)
				} else {//si hace scroll hacia arriba
					if ( $window.scrollY === 0 ){
						angular.element(document.querySelector('.header-body')).css('height', '40vh')
							angular.element($('.header-body__title')).show()
						angular.element($('.header-body__title')).addClass('_show')
						$timeout(function() {
							angular.element($('.header-body__title')).removeClass('_show')
						}, 100)
					}
					if ( $window.scrollY <= 210 )
						angular.element(document.querySelector('.web-header')).css('boxShadow', 'none')
				}
				$scope.lastScroll = $scope.scroll
		})
	})

	.controller('homeController', function($scope, $window){
	})