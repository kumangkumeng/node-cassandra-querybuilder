process.env.NODE_ENV = 'test';

var reqlib = require('app-root-path').require;
var assert = require('assert');
var LIMIT = reqlib('/modifiers/limit');

describe('Limit', function() {
	describe('#constructor', function() {
		it('should create an instance of Limit', function() {
			var l = new LIMIT();
			assert.ok(l);
		});
	});
	describe('#toString', function() {
		it('should get string representation of the instance', function() {
			var limit = 5;
			var l = new LIMIT(limit);
			var to_string = [];
			to_string.push('LIMIT');
			to_string.push(limit);
			assert.equal(l.toString(), to_string.join(' '));
		});
	});
});