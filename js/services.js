var services = angular.module('restAngular.services',[]);

services.factory('restAngularFactory',['http', function($http){
	var users = function(){
		var usersList = [];
	};

	users.prototype.getUsers = function(){
		var self = this;

		return $http.get('http://localhost:8080/ciag-teste-adriel-rest/rest/service/allUsers').then(
			function(response){
				self.users = response.data.users
				return response;
			}, function(response){
				console.log('Erro');
				return response;
			}
		);
		return users;
	}
}]);