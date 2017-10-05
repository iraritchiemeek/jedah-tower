var iraApp = angular.module('iraApp', []);

iraApp.controller('mainController', ["$scope", function($scope) {

	var init = function () {
		$scope.randomImageJumbleCss()
	}

	$scope.setImageStripWidth = function () {
		$('.image-strip').css({'width': (100/$('.image-strip').length)+'%'})
	}

	$scope.randomImageJumbleCss = function () {
		var image_count = $('.rotated-image').length
		var color_array = ['#27A4DD', '#FDFE02', '#0BFF01', '#011EFE', '#FE00F6']
		$('.rotated-image').each(function (i, v) {
			var posneg = Math.random() > 0.5 ? '+' : '-' 
			var top = Math.floor((Math.random()*40)+5) + '%'
			var angle = 'rotate(' + posneg + Math.floor((Math.random()*10)+1) +'deg)'
			var left = Math.floor((Math.random()*80) + 20) + '%'
			$(v).css({'top': top, 'transform': angle, 'left': left, 'z-index': 0})
			// i == image_count - 1 ? $scope.applyZindex() : ''
		})
		$scope.applyZindex()
	}

	$scope.applyZindex = function () {
		var ordered_by_left = []

		$('.rotated-image').each(function (i, v) {
			ordered_by_left.push($(v))
		})

		ordered_by_left.sort(function(a, b){return parseInt(a.css('left'), 10)-parseInt(b.css('left'), 10)})

		for (var i = ordered_by_left.length - 1; i >= 0; i--) {
			ordered_by_left[i].css({'z-index': i})
		}

	}

	init()
}])

$(window).on("load", function() {
	$('.loading').hide()
})