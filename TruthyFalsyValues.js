// there are 5 values which will be directly false when we try to convert them to boolean
// 0 ,' ',Nan,null, undefined

console.log(Boolean(''));
console.log(Boolean(0));
console.log(Boolean(NaN));
console.log(Boolean({}));