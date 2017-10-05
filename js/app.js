var iraApp = angular.module('iraApp', []);

iraApp.controller('mainController', function($scope) {

	var init = function () {
		// $scope.setImageStripWidth()
		$scope.randomImageJumbleCss()
	}

	$scope.setImageStripWidth = function () {
		$('.image-strip').css({'width': (100/$('.image-strip').length)+'%'})
	}

	$scope.randomImageJumbleCss = function () {
		var image_count = $('.rotated-image').length
		var max_left = 0
		$('.rotated-image').each(function (i, v) {
			var posneg = Math.random() > 0.5 ? '+' : '-' 
			var top = Math.floor((Math.random()*60)+1) + '%'
			var z_index = Math.floor((Math.random()*image_count)+1)
			var angle = 'rotate(' + posneg + Math.floor((Math.random()*8)+1) +'deg)'
			var left = Math.floor((Math.random()*80)+20) + '%'
			$(v).css({'top': top, 'z-index': z_index, 'transform': angle, 'left': left})
		})
		$scope.applyZindex()
	}

	$scope.applyZindex = function () {
		var ordered_by_left = []

		$('.rotated-image').each(function (i, v) {
			ordered_by_left.push($(v))
			ordered_by_left.sort(function(a, b){return parseInt(a.css('left'), 10)-parseInt(b.css('left'), 10)})
		})

		for (var i = ordered_by_left.length - 1; i >= 0; i--) {
			ordered_by_left[i].css({'z-index': i})
		}

	}

	init()
})

$(window).on("load", function() {
	$('.loading').hide()
})