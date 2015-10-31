describe('ExpensesController', function (){

	var $controllerConstructor;

	var scope;

	beforeEach(module('app'));

	beforeEach(inject(function($controller,$rootScope){
		$controllerConstructor = $controller;
		scope = $rootScope.$new();
	}));

	it('should have three expenses items', function (){
		var ctrl = $controllerConstructor('ExpensesController',{$scope:scope});
		expect(ctrl.expenseItems.length).toBe(3);
	});

});