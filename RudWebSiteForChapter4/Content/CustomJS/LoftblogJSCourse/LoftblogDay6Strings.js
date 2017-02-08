// строки
// можно использовать как одинарные так и двойные кавычки
str = "qwerty"; /**/ str2 = 'qwerty';
// str2 = "zxcsdczx"asdasc"zxcedscz z" // так нельзя
str2 = "zxcsdczx'asdasc'zxcedscz z" // так можно
str2 = 'zxcsdczx"asdasc"zxcedscz z' // экранирование
str2 = "zxcsdczx\"asdasc\"zxcedscz z" // экранирование
// основные символы - табуляция перенос троки и экранирование
str3 = "cjwesdvc \n \t k237weiuncsdf78cwi";
console.log(str3)

console.log(str3.length)
// метод для конкатенации
console.log('hello'.concat(' world!')); // hello world!

console.log(str3.charAt(3)); // e
console.log(str3.charCodeAt(3)); // 101
console.log(str3.codePointAt(3)); // 101

console.log(str3.substring(3, 6)); // esd
console.log(str3.slice(3, 6)); // esd // slice = substring, но есть также поддержка отрицательных значений
console.log(str3.slice(-4)); // 8cwi
console.log(str3.substr(4, 2)); // sd
console.log(str3.split("")); // получим массив
console.log(str3.replace("wesd", "xxxx")); // cjxxxxvc...
console.log(str3.indexOf("a")); 