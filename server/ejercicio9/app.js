'use strict';
angular.module('myApp', [
'myApp.controllers',
'ngRoute'
]);

//angular.module('myApp').config(function($routeProvider){
//$routeProvider.when('/view1',{
//controller:'Controller1',
//templateUrl:'partials/view1.html'
//}).when('/view2',{
//controller: 'Controller2',
//templateUrl: 'partials/view2.html'
//});
//});

angular.module('myApp').config(function($routeProvider,
$locationProvider){
$routeProvider.when('/view1',{
controller:'Controller1',
templateUrl:'/view1.html'
}).when('/view2',{
controller: 'Controller2',
templateUrl: '/view2.html'
});
$locationProvider.html5Mode(true); //activate HTML5 Mode
});