const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
  };
  
  function decode(expr) {
    let strChar10 = expr.match(/.{1,10}/g)
    let noZero = [];
    let strChar2 = [];
    let resArr = [];
    let resStr = '';
  
    for (let subStr of strChar10) {
      if (subStr[0] !== "*") {
        noZero.push(Number(subStr) + '');
      }
      else {
        noZero.push('*');
      }
    }
  
    for (const item of noZero) {
      strChar2.push(item.match(/.{1,2}/g))
    }
  
  
    for (const subItem of strChar2) {
      let letter = '';
      for (const char of subItem) {
        if (char === '10') {
          letter = letter + '.';
        } else if (char === '11') {
          letter = letter + '-';
        } else if (char === '*') {
          letter = letter + ' '
        }
      }
      resArr.push(letter)
    }
  
  
    for (let letter of resArr) {
      if (letter === ' ') {
        resStr += ' ';
      } else {
        resStr += MORSE_TABLE[letter];
      }
    }
    return resStr;
  }
  
  

module.exports = {
    decode
}