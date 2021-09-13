'use strict';


let validateBankAccount = (num) => {

  let pattern2 = /^[A-Za-z]{2}\d{2}(\s?\d{4}){5}$/;

  console.log('Regex match with ' + num + ' , ' + pattern2.test(num));

};

let bankAcount = 'ES6600190020961234567890';
let bankAcount2 = 'ES66 0019 0020 9612 3456 7890';

validateBankAccount(bankAcount);
validateBankAccount(bankAcount2);

console.log("---------------------------------------");

// Matricula de coche

const patternCars = /^(\d{4})\s?(-)?([A-Z]{3})$/;

const values = ['2021 GMD', '2345-GMD', '4532BDB', '0320-AAA'];

for (let value of values) {
 
  console.log("Regex test with " +  value + " , " + patternCars.test(value));
}
console.log("---------------------------------------");

for (let value of values) {
  console.log(
    'Value.match width ' + value + ' ,  ' + value.match(patternCars)
  );
 
}


