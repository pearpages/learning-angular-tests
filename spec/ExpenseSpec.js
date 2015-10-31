describe("Expense objects", function (){

	var expense, expnseItem;

	beforeach(function (){
		var expenseItem = new ExpenseItem(100);
		var expense = new Expense(expenseItem);
	});

	it("should be of type ExpenseItem", function (){
		expect(expense.expenseItem).toBe(expenseItem);
	});

	it("should have the correct expense amount", function (){
		expect(expense.expenseItem.amount).toEqual(100);
	});
});