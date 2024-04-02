// if we add anything to string it will be always string
let a = "200";
console.log(a + 100);

let b = `my name is ${"cat"}`;
console.log(b + " " + 200);

// if we want convert the string to number we can use Number()
let c = '300';
console.log(Number(c)+100);

// converting to number to string
let d = 100;
console.log(String(d)+200);

//if we converting the number which is not a true number it will NAN
let number = '100';
console.log(Number('laptop'));
console.log(typeof NaN);

console.log(String(20),20);

// type coercion
// addition works but minus actually subtract   
console.log('20' - '10' - 5);
console.log('10'+'10');