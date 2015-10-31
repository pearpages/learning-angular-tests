(function (){

	//create the module and define its dependencies
	angular.module('app',['ngRoute'])

	//config always runs before the services are ready
	.config(['$routeProvider', function($routeProvider){
		$routeProvider
			.when('/', {templateUrl: 'src/app/Expense/expense.html'})
			.when('/admin', {templateUrl: 'src/app/Admin/admin.html'})
			.otherwise({redirectTo: '/'});
	}]);
})();