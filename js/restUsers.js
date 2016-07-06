var restAngular = angular.module("restAngular",[]);

//Adicionar um novo usuário
restAngular.controller("newUserController",['$scope', function($scope){
	//$scope.saveUser = function(name, email, password, sex){
		
	//}
}]);

//Alterar um usuário já existente 
restAngular.controller("alterUserController",['$scope', function($scope){
	code = $scope.code

}]);

//Buscar um usuário já existente 
restAngular.controller("findUserController", ['$scope','$http', function($scope,$http){
	$scope.find = function(){
		code = $scope.code;
		url = "http://localhost:8080/ciag-teste-adriel-rest/rest/service/getUser/" + code;
		console.log(url);
		return $http.get(url)
			.success(function (data, status, headers,config){
				$scope.findUser = data;
			})
			.error(function(data,status,headers,config){
				console.log("Error");
			})
	}

}]);

//Listar todos os usuários cadastrados
restAngular.controller("listUsersController",['$scope', '$http', function($scope){
	$scope.users = function(){
		//console.log($scope.code);
		return $http.get("http://localhost:8080/ciag-teste-adriel-rest/rest/service/allUsers")
			.success(function (data, status, headers,config){
				$scope.allUsers = data;
			})
			.error(function(data,status,headers,config){
				console.log("Error");
			})
	}

}]);

//Remover um usuário já cadastrado
restAngular.controller("removeUserController",['$scope', function($scope){
	code = $scope.code

}]);
