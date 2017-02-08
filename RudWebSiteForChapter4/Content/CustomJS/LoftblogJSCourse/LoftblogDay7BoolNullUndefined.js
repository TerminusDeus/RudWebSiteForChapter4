console.log(Boolean(NaN)); // false
console.log(Boolean("")); // false
console.log(Boolean(0)); // false
console.log(Boolean(NaN)); // false
console.log(Boolean(undefined)); // false

var booll = 'str';

if (booll) console.log("существует");

// если возвращется undefined, то это значит то, что значение не задано
// null может вернуться только если явно присвоено

var param, obj = {}
console.log(param); // undefined
console.log(obj.param); // undefined

var func = function (arg) { console.log(arg) }
console.log(func());  // undefined
console.log(func());