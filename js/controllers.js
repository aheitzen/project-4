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
        $scope.playInfo = {};
        $scope.pausePlay = false;
});

app.controller('d3Ctrl', function($scope) {

})

app.controller('SearchCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.searchTerm = '';
    $scope.hikes = [];

    // $scope.$watch('searchTerm', function(newValue, oldValue) {
    //     $scope.search();
    // });


    $scope.search = function() {
      var req = {
        url: "https://trailapi-trailapi.p.mashape.com/",
        method: 'GET',
         headers: {
            'X-Mashape-Authorization': ''
        },
        params: {
          'q[city_cont]': $scope.searchTerm
          
        }
      }

      $http(req).then(function success(res) {
        $scope.hikes = res.data.places;
        console.log($scope.hikes);
      }, function error(res) {
        console.log(res);
      });
    };
}])






 
 

  