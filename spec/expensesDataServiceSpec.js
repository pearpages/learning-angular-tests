describe("expensesDataService", function (){

	var service;

	beforeEach(module('app'));

	beforeEach(inject(function(expensesDataService){
		service = expensesDataService;
	}));

	it('should return three expense items', function (){
		expect(service.getExpenses().length).toBe(3);
	});
	

	it('should return a taxi expense', function(){

		var expenseItems = service.getExpenses();
		var testExpenseItem = new ExpenseItem('Taxi','Taxi To Airport', 89.95);
		expect(expenseItems).toContain(testExpenseItem);
	});

	describe('reasonable expenses', function (){

		var taxi, dinner;

		beforeEach(function (){
			jasmine.addMatchers(customMatchers);
		});

		beforeEach(function (){
			taxi = new ExpenseItem('taxi', 'Taxi to airport', 89.50);
			dinner = new ExpenseItem('dinner', 'Dinner with John and Ward', 189.50);
		});

		it('taxi should be a resasonable expense',function (){
			expect(taxi).toBeAReasonableExpense();
		});

		it('dinner should not be a reasonable expense',function (){
			expect(dinner).not.toBeAReasonableExpense();
		});
	});


});

