var iraApp = angular.module('iraApp', []);

iraApp.controller('mainController', ["$scope", function($scope) {

	var init = function () {
		// $scope.randomImageJumbleCss()
		$(".mobile_test").css("display") == "none" ? $scope.setImageStripHeight() : $scope.setImageStripWidth()
	}

	$scope.scrollTo = function (id) {
		id == 'top' ? element = '.image-jumble-container' : element = '#set-' + id	
		$(element)[0].scrollIntoView({block: 'center', behavior: 'instant'})
	}

	$scope.setImageStripWidth = function () {
		$('.image-strip').css({'height': '100%'})
		$('.image-strip').css({'width': (100/$('.image-strip').length)+'%'})
	}

	$scope.setImageStripHeight = function () {
		$('.image-strip').css({'width': '100%'})
		$('.image-strip').css({'height': (100/$('.image-strip').length)+'%'})
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

$(document).ready(function () {
	
	$(window).resize(function () {
		responsive()
	})

	var responsive = function() {
		$(".mobile_test").css("display") == "none" ? setImageStripHeight() : setImageStripWidth()
	}

	var setImageStripWidth = function () {
		$('.image-strip').css({'height': '100%'})
		$('.image-strip').css({'width': (100/$('.image-strip').length)+'%'})
	}

	var setImageStripHeight = function () {
		$('.image-strip').css({'width': '100%'})
		$('.image-strip').css({'height': (100/$('.image-strip').length)+'%'})
	}

})


$(window).on("load", function() {
	$('.loading').hide()
})