var hakApp = angular.module('hakApp', []);

hakApp.controller('mainController', function($scope) {
	$scope.index = 0;
	$scope.gallery = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg']

	$scope.decrementIndex = function(array) {
	    if ($scope.index <= 0) {
	        $scope.index = array.length -1
	    } else {
	        $scope.index -= 1
	    }
	}

	$scope.incrementIndex = function(array) {
	    if ($scope.index >= array.length -1) {
	        $scope.index = 0
	    } else {
	        $scope.index += 1
	    }
	}

})