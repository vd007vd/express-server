let input = process.argv.slice(2);
let columns = +input[0];
let diamond = (columns) => {
  let a = "";
  let b = "";
  for (let i = 1; i <= columns * 2; i++) {
    if (i <= columns) {
      a = "  ";
      for (let j = columns; j >= i; j--) {
        a = a + "  ";
      }
      for (let k = 1; k <= i; k++) {
        a = a + " *  ";
      }
      b += "\n" + a;
    } else {
      a = "";
      for (let j = columns; j <= i; j++) {
        a = a + "  ";
      }
      for (let k = columns * 2; k >= i; k--) {
        a = a + " *  ";
      }
      b += "\n" + a;
    }
    a = "";
  }
  console.log(`The Diamond of ${columns} columns : \n ${b} \n`);
};

diamond(columns);
