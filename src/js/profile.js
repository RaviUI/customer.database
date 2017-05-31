var myApp = angular.module('SampleApp');
myApp.controller('profileCtrl', ['$scope','$http','RgService','$location','$routeParams',
                            function($scope,$http,RgService,$location, $routeParams){
                            	$scope.user = {};
                            	$scope.users = JSON.parse(localStorage.getItem('profiles'));
                            	if($routeParams.id) {
                            		 if(localStorage.getItem('profiles')) {	                                   
	                                    $scope.user = $scope.users.filter(function(user){return user.id == $routeParams.id})[0];
	                                 }
                            	}
                                $scope.save = function() {
                                    //if ($scope.save.$valid) {
                                    	if(!$scope.user.id) {
                                    		$scope.user.id = Math.floor((Math.random() * 10) + 1);
                                    		$scope.users.push($scope.user);
                                    	} else {
                                    		$scope.users.forEach(function(user){
                                    			if($scope.user.id == user.id) {
                                    				user = $scope.user;
                                    			}
                                    		});
                                    	}
                                    	localStorage.setItem('profiles', JSON.stringify($scope.users) );
                                    	$location.path('/');
                                    //}
                                };
                                
                         

	

}]);