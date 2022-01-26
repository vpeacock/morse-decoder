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

const dashPoint = {
  10: '.',
  11: '-',
  '**': ' ',
};

function decode(expr) {
  let arr = expr.match(/..........?/g) || [];
  let tmp = [];
  let res = [];

  for (let subArr of arr) {    
    subArr = subArr.replace(/^0+/, '');
    subArr = subArr.match(/..?/g) || [];
    tmp.push(subArr);
  }

  for (const subArr of tmp) {
      for (let i = 0; i < subArr.length; i++) {
        subArr[i] = dashPoint[subArr[i]];
      }
  }
  
  for (const dotDash of tmp) {
    res.push(MORSE_TABLE[dotDash.join('')] || ' ');
  }

  return res.join('');
}


module.exports = {
  decode,
};
