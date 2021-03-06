process.env.NODE_ENV = 'test';

var assert = require('assert');
var Limit = require('../../modifiers/limit');

describe('Limit', function() {
	describe('#constructor', function() {
		it('should create an instance of Limit', function() {
			var l = new Limit();
			assert.ok(l);
		});
	});
	describe('#limit', function() {
		it('should set and get limit', function() {
			var l = new Limit();
			var limit = 5;
			l.limit(limit);
			assert.equal(l.limit(), limit);
		});
	});
	describe('#toString', function() {
		it('should get string representation of the instance', function() {
			var limit = 5;
			var l = new Limit();
			l.limit(limit);
			var to_string = [];
			to_string.push('LIMIT');
			to_string.push(limit);
			assert.equal(l.toString(), to_string.join(' '));
		});
	});
});