import {InputNumber}  from '../index'

// let input = process.argv.slice(2);
// let rows = +input[0];
let equilateral = (InputNumber : number) : void => {
  let rows = InputNumber
  let a = "";
  let pyramid = "";
  for (let i = 1; i <= rows; i++) {
    for (let j = rows; j >= i; j--) {
      a = a + "  ";
    }
    for (let k = 1; k <= i; k++) {
      a = a + " *  ";
    }
    pyramid += "\n" + a;
    a = "";
  }
  console.log(`The pyramid of ${rows} rows : \n ${pyramid} \n`);
};

// equilateral(rows);

export default equilateral;
