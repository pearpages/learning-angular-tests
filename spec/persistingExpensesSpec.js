'use strict'

describe('persisting expenses', function (){

	var service;

	beforeEach(module('app'));

	beforeEach(inject(function(expensesDataService){

		service = expensesDataService;
	}));

	describe('call backs', function (){

		it('should call back when persisted', function (){
			var spyCallBack = jasmine.createSpy('callBackSpy');

			service.persistExpenses(spyCallBack);
			expect(spyCallBack).toHaveBeenCalled();
		});

		it('should spy on persistExpenses',function (){

			var spy = spyOn(service, 'persistExpenses');
			service.persistExpenses();
			expect(spy).toHaveBeenCalled();
		});

		it('should spy on persistExpenses and fake a reply', function (){
			var spy = spyOn(service, 'persistExpenses').and.callFake(function (){
				return 3;
			})

			 var numRecordsPersisted = service.persistExpenses();
			 expect(numRecordsPersisted).not.toEqual(4);
			 expect(numRecordsPersisted).toEqual(3);
		});
	});
});