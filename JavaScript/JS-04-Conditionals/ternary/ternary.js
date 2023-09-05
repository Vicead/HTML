//!  ************  TERNARY OPERATOR ************
// Şarta bağlı durumlar yazmak için başka ve daha kısa bir yöntem de ternary operator
// ES6 ile gelen bir özellik 

const age=26;
let mm;

age>=18?(mm=`You can drive`):(mm=`You can't drive`)
console.log(mm);


mm=age>=18?(`You can drive`):(`You can't drive`)
console.log(mm);

/* -------------------------------------------------------------------------- */

const vage=25;
let mmm;
mmm=vage>=20?(`You can vote`):(`You can't vote`)
console.log(mmm);

/* -------------------------------------------------------------------------- */

let num=23;

result=num %2===0?(`Even number`):(`Odd number`)
console.log(result);

/* -------------------------------------------------------------------------- */
let num1=0;

result=num1>=0?(num1===0?`0`:`Positive`):(`Negative`)
console.log(result);

/* -------------------------------------------------------------------------- */

operator=`-`;
let num2=45;
let num3=67;

let x=(operator===`+`)?(num2+num3):(num3-num2)
console.log(x);

/* -------------------------------------------------------------------------- */

distance=500
duration=10

let y=(distance>300&&duration>5)?(distance/duration):(`XDD`)
console.log(y);

/* -------------------------------------------------------------------------- */

name=`Caroline`;
let greetings=name?`Greetings ${name}`:`Welcome unknown guest`
console.log(greetings);

/* -------------------------------------------------------------------------- */

