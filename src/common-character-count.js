const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  if(typeof s1 == "string" && typeof s2 == "string"){
    let oneStroke = s1.split(''),
      twoStroke = s2.split(''),
      overlap = 0;

      for(let i = 0; i < oneStroke.length; i++){
        for(let k = 0; k < twoStroke.length; k++){
          if(oneStroke[i] == twoStroke[k]){
            overlap++;
          }
        }
      }

      return overlap;
  }
}

module.exports = {
  getCommonCharacterCount
};
