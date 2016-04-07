var app = angular.module('HikeCtrls', ['HikeServices']);

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
    // var gauge1 = loadLiquidFillGauge("fillgauge1", 55);
    var config1 = liquidFillGaugeDefaultSettings();
    // config1.circleColor = "#FF7777";
    // config1.textColor = "#FF4444";
    // config1.waveTextColor = "#FFAAAA";
    // config1.waveColor = "#FFDDDD";
    // config1.circleThickness = 0.2;
    // config1.textVertPosition = 0.2;
    // config1.waveAnimateTime = 1000;
    var gauge2= loadLiquidFillGauge("fillgauge2", 12.13, config1);
    var config2 = liquidFillGaugeDefaultSettings();
    config2.circleColor = "#FFFFFF";
    config2.textColor = "#000000";
    config2.waveTextColor = "#000000";
    config2.waveColor = "#000000";
    config2.circleThickness = 0.1;
    config2.circleFillGap = 0.2;
    config2.textVertPosition = 0.8;
    config2.waveAnimateTime = 2000;
    config2.waveHeight = 0.3;
    config2.waveCount = 1;
    // var gauge3 = loadLiquidFillGauge("fillgauge3", 60.1, config2);
    var config3 = liquidFillGaugeDefaultSettings();
    // config3.textVertPosition = 0.8;
    // config3.waveAnimateTime = 5000;
    // config3.waveHeight = 0.15;
    // config3.waveAnimate = false;
    // config3.waveOffset = 0.25;
    // config3.valueCountUp = false;
    // config3.displayPercent = false;
    var gauge4 = loadLiquidFillGauge("fillgauge4", 33.32, config3);
    var config4 = liquidFillGaugeDefaultSettings();
    config2.circleColor = "#FFFFFF";
    config2.textColor = "#000000";
    config2.waveTextColor = "#000000";
    config2.waveColor = "#000000";
    config2.circleThickness = 0.1;
    config2.circleFillGap = 0.2;
    config2.textVertPosition = 0.8;
    config2.waveAnimateTime = 2000;
    config2.waveHeight = 0.3;
    config2.waveCount = 1;
    var gauge5 = loadLiquidFillGauge("fillgauge5", 66, config4);
    // var config5 = liquidFillGaugeDefaultSettings();
    config2.circleColor = "#FFFFFF";
    config2.textColor = "#000000";
    config2.waveTextColor = "#000000";
    config2.waveColor = "#000000";
    config2.circleThickness = 0.1;
    config2.circleFillGap = 0.2;
    config2.textVertPosition = 0.8;
    config2.waveAnimateTime = 2000;
    config2.waveHeight = 0.3;
    config2.waveCount = 1;
    // var gauge6 = loadLiquidFillGauge("fillgauge6", 120, config5);

    function NewValue(){
        if(Math.random() > .5){
            return Math.round(Math.random()*100);
        } else {
            return (Math.random()*100).toFixed(1);
        }
    }

    function NewValue(){
        if(Math.random() > .5){
            return Math.round(Math.random()*100);
        } else {
            return (Math.random()*100).toFixed(1);
        }
    }
})

app.controller('SearchCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.searchTerm = '';
    $scope.hikes = [];
    $scope.openModal = false;

    $scope.addHike = function(index) {
        console.log($scope.hikes[index]);
        var req = {
            method: 'POST',
            url: "/api/hikes",
            data: $scope.hikes[index] 
        }
        $http(req).then(function success(res) {
            console.log("woohoo it worked");
        })
    }


    $scope.search = function() {
      var req = {
        url: "/api/search/" + $scope.searchTerm,
        
      }

      $http(req).then(function success(res) {
        // console.log(JSON.parse(res.data));
        $scope.hikes = res.data.places;
        console.log($scope.hikes);
        $scope.openModal = true;
      }, function error(res) {
        console.log(res);
      });
    };
}]);

app.controller('SignupCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.user = {
        name: '',
        email: '',
        password: ''
    };
    $scope.signup = function() {
        console.log($scope.user);
        $http.post('/api/users', $scope.user).then(function success (res) {
            console.log(res);
        }, function error (res) {
            console.log(res);
        })
    };

    
}]);

app.controller('LoginCtrl', ['$scope', '$http', '$location', 'Auth', function($scope, $http, $location, Auth) {
  $scope.user = {
    email: '',
    password: ''
  };
  $scope.login = function() {
    $http.post('/api/auth', $scope.user).then(function success (res) {
      Auth.saveToken(res.data.token);
      $location.path('/');

    }, function error(res) {
    console.log(res);

    })
  }
}]);

app.controller('LogoutCtrl', ['$scope', 'Auth', '$location', function($scope, Auth, $location) {
  $scope.Auth = Auth;
  $scope.logout = function() {
    Auth.removeToken();
    $location.path('/');
    
  }
}])






 
 

  