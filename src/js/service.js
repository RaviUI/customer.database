var myApp = angular.module('SampleApp');

myApp.factory('RgService', function($http){
	return{
		getUsers: function() {
			var req = {
			 method: 'GET',
			 url: 'js/reg.json'
			};
			return $http(req);
		}

	}

});