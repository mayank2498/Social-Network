(function(){
  angular.module('TimeWaste').
  controller('NavigationController',['$scope','$http','$state',function($scope,$http,$state){
    $scope.logInUser = function(){
        $http.post('api/user/login',$scope.login).success(function(response){
            console.log("login post request...");
            console.log(response);
            localStorage.setItem('User-Data',JSON.stringify(response));
        }).error(function(error){
          console.log(error); 
        });
    }
  }]);
}());