import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  let x = '';
	if(options.addition !== undefined && typeof(options.addition) !== 'string') {
		options.addition = '' + options.addition;
	}
	options.repeatTimes = options.repeatTimes || 1;
	for(let i = 0; i < options.repeatTimes; i++) {
		x += str;
		options.additionRepeatTimes = options.additionRepeatTimes || 1;
		for(let j = 0; j < options.additionRepeatTimes; j++) {
			options.addition = options.addition || '';
			x += options.addition;
			if (j < options.additionRepeatTimes - 1) {
				options.additionSeparator = options.additionSeparator || '|';
				x += options.additionSeparator;
			}
		}
		options.separator = options.separator || '+';
		if(i < options.repeatTimes-1) {
			options.separator = options.separator || '|';
			x += options.separator;
		}
	}
	return x;
}
