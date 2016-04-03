var app = angular.module('CharityCtrls', ['CharityServices']);

app.controller('HomeCtrl', function($scope) {
	$scope.resources = [
            // 'http://techslides.com/demos/sample-videos/small.webm',
            'videos/Forest_15_3b_Videvo.mp4'
            // '*.ogv',
            // '*.mp4',
            // '*.swf'
        ];
        // $scope.poster = 'http://placehold.it/2000&text=you%20may%20want%20to%20have%20a%20poster';
        $scope.fullScreen = true;
        $scope.muted = true;
        $scope.zIndex = '22';
        $scope.playInfo = {};
        $scope.pausePlay = false;
    });