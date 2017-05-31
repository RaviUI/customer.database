var myApp = angular.module('SampleApp');
myApp.controller('homeCtrl', ['$scope','$http','RgService','$location',
                            function($scope,$http,RgService,$location){
                            

                            $scope.editRow = function(id) {
                                $location.path('profile/'+id);
                            };

                            $scope.delete = function(idx) {
                                $scope.users.splice(idx, 1);
                                localStorage.setItem('profiles', JSON.stringify($scope.users) );
                            };

                              
                            function getUsers(){
                                 if(localStorage.getItem('profiles')) {
                                    $scope.users = JSON.parse(localStorage.getItem('profiles'));
                                 } else {
                                    RgService.getUsers().then(
                                        function(res){                                    
                                            $scope.users = res.data.users;
                                            localStorage.setItem('profiles', JSON.stringify($scope.users) );
                                            console.log($scope.users);
                                        },
                                        function(res){
                                            console.log(res);
                                    });
                                }
                            };
                            getUsers();

	

}]);