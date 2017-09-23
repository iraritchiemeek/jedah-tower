var iraApp = angular.module('iraApp', []);

iraApp.controller('mainController', function($scope) {

	var init = function () {
		$scope.setImageStripWidth()
	}

	$scope.setImageStripWidth = function () {
		$('.image-strip').css({'width': (100/$('.image-strip').length)+'%'})
	}

	init()
})

$(window).on("load", function() {
	$('.loading').hide()
})