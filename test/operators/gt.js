process.env.NODE_ENV = 'test';

var assert = require('assert');
var GreaterThan = require('../../operators/gt');

describe('GreaterThan', function() {
	describe('#constructor', function() {
		it('should compile query', function() {
			var column = 'col';
			var operator = '>';
			var value = 'val';
			var eq = new GreaterThan(column, value);
			assert.equal(eq._column, column);
			assert.equal(eq._operator, operator);
			assert.equal(eq._value, '\'' + value + '\'');
		});
	});
});