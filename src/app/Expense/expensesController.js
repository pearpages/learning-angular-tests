(function (){
	'use strict'

	angular.module('app')
	.controller('ExpensesController', ['expensesDataService',ExpensesController]);

	function ExpensesController(expensesDataService){

		var vm = this;

		vm.activate = activate;
		vm.expenseItems = [];

		activate();

		function activate(){
			return vm.expenseItems = expensesDataService.getExpenses();
		}
	}
})();