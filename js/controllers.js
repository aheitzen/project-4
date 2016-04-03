var app = angular.module('CharityCtrls', ['CharityServices']);

app.controller('HomeCtrl', function($scope) {
	$scope.resources = [
            // 'http://techslides.com/demos/sample-videos/small.webm',
            'videos/Forest_15_3b_Videvo.mp4'
            // '*.ogv',
            // '*.mp4',
            // '*.swf'
        ];
        $scope.poster = 'videos/trees.png';
        $scope.fullScreen = true;
        $scope.muted = true;
        $scope.zIndex = '10';
        $scope.playInfo = {};
        $scope.pausePlay = false;
    });