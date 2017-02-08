// строковое, числовое и логическое преобразование
// явное преобразование
console.log(typeof String(455))
console.log(typeof Number("456"));
console.log(typeof Boolean(678));
console.log(typeof Boolean(0));

console.log(1 + "5"); // 15
console.log(typeof (1 + "5")); // string
console.log(typeof (1232 + "")); // быстро в строку
console.log(typeof ( + '232')); // быстро в число
console.log(typeof (!! + "d3")); // быстро в bool
console.log(typeof (!! + "")); // быстро в строку
// первый восклиц знак = оператор 'не', второй - инверсия

console.log(+""); // быстро в строку
console.log(+true);
console.log(+false);

var num = 678;
console.log(typeof num.toString());

console.log(parseInt("100 wesfdc32c", 10)) // 100 // десятичная система счисления, опционально
console.log(parseFloat("100", 10)) // 100 // 