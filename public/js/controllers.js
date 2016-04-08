var app = angular.module('HikeCtrls', ['HikeServices']);

app.controller('HomeCtrl', function($scope) {
	$scope.resources = [
            'videos/Forest_15_3b_Videvo.mp4'
        ];
        $scope.poster = 'videos/trees.png';
        $scope.fullScreen = true;
        $scope.muted = true;
        $scope.playInfo = {};
        $scope.pausePlay = false;
});

app.controller('d3Ctrl', function($scope) {
    
    var config2 = liquidFillGaugeDefaultSettings();
    config2.circleColor = "#FFFFFF";
    config2.textColor = "#000000";
    config2.waveTextColor = "#000000";
    config2.waveColor = "#FFFFFF";
    config2.circleThickness = 0.05;
    config2.circleFillGap = 0.05;

    loadLiquidFillGauge("fillgauge2", 12.13, config2);
    loadLiquidFillGauge("fillgauge4", 33.32, config2);
    loadLiquidFillGauge("fillgauge5", 66, config2);

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

app.controller('SearchCtrl', ['$scope', '$http', '$location', function($scope, $http, $location ) {
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
            $location.path('/profile');
        })
    }


    $scope.search = function() {
      var req = {
        url: "/api/search/" + $scope.searchTerm,
        
      }

      $http(req).then(function success(res) {
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

app.controller('ProfileCtrl', ['$scope', '$http', 'Auth', '$location', function($scope, $http, Auth, $location) {
 
 $http.get('/api/hikes/').then(function success(res) {
        $scope.hikes = res.data;
        console.log($scope.hikes);
      }, function error(res) {
        console.log(res);
      });
    $scope.deleteHike = function(hike) {
        var id = hike._id;
        $http.delete('/api/hikes/' + id).then(function success(res) {
            // $location.path('/profile')
            window.location.href = "/profile"
        }, function error(res) {
            alert('there was a error deleting your hike')
        });
    }
}])








 
 

  