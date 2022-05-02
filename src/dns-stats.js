const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */

function getDNSStats(domains) {
  let obj = {};

  if(domains.length === 0) {
    return obj;

  } else {

    let arrOfDomains = domains.map(
      item => (item + '.')
      .split('.')
      .reverse()
      .join('.'))
      .sort((a, b) => a.length - b.length);
  
    let regexTopDomain = arrOfDomains[0].match(/^\.\w+/i);
    let topDomain = regexTopDomain[0];
    obj[topDomain] = 0;
  
    for(let i = 0; i < arrOfDomains.length; i++) {
      obj[arrOfDomains[i]] = 0;
    }
  
    for(let i = 0; i < arrOfDomains.length; i++) {
      for(let key in obj) {
        if(arrOfDomains[i].includes(key)){
          obj[key]++;
        }
      }
    }

    return obj;
  }
}


module.exports = {
  getDNSStats
};
