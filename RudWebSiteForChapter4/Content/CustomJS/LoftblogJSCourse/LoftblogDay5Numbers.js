// подробный разбор типов данных

// number

var number = 123;
// 4 основных метода
////console.log(number.toFixed(2)); // определяем количество чисел после запятой
////console.log(number.toExponential(2)); // приводим к экпоненциальному виду
////console.log(number.toPrecision(4)); // округление до определенного количества цифр
////console.log(number.toString()); // перевод в string

////// Math в js позволяет работать с более сложными операциями
////console.log(Math.abs(number));
////console.log(Math.sqrt(number));
////console.log(Math.floor(number));
////console.log(Math.ceil(number));
////console.log(Math.round(number));
////console.log(Math.pow(number, 2));
////console.log(Math.PI);

console.log(0 / 0); // NaN = not a number
console.log("qdfgch" / 0); // NaN
console.log(NaN === NaN); // false
console.log(isNaN(NaN)); // true
console.log(1 / 0); // Infinity
console.log(1 / 0); // -Infinity

inf = Infinity;
nan = NaN;

console.log(inf + 123); // Infinity
console.log(inf > 123); // true