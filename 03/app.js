const n = 100;
const oddNumbers = [];


let numbers = generateNumbers()
console.log(numbers);


function isOdd(el) {
  return el % 2 !== 0;
};

function generateNumbers() {
  let arr = [];

  for (var i = 0; i < n; i++) {
    let num = Math.round(Math.random() * n);
    if (isOdd(num)) {
      arr.push(num);
    }
  };
  return arr;
};

// ***************************
// EXTRA: ********************
// ***************************

// jak musialbym zmienić powyższy kod żeby oddNumbers array przechowywało dokładnie n liczb?
// zastanawiałem się nad tym dodatkowo
