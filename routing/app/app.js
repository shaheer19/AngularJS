var timeBomb = angular.module('timeBomb',['ngRoute']);

timeBomb.config(['$routeProvider',function($routeProvider){
   $routeProvider.
   when('/push',{
     templateUrl:'views/push.html',
     controller:"NameController"

   }).
   when('/display',{
     templateUrl:'views/display.html'
   }).
   otherwise({
     redirectTo:'/'
   })

}]);





timeBomb.controller('FoodController',['$scope','$http',function($scope,$http){


  $scope.additem = function (item) {


          console.log(item.available);
}

$http.get('data/bestseller.json').then(function(res){
   $scope.foods = res.data;
 })
}]);
