var _ = require('lodash');

var array = {
	first: 1,
	second: 2
};

var args = [array].concat(['Kirill','Osokin']);

array.third = 3;

console.log(args[0]);