// функции - истинная мощь js
// ф-я - конструкция, которая позволяет использовать кусок кода многократно
// ф-ии используются для скрытия кода (инкапсуляции)
// ф-я = объект = строка = число = можно писать свойства и методы для ф-ии
// 2 скрытых свойства при создании ф-ии: контекст функции и 
function func(a, b) { return a + b }
// если возвращ значение не указано с помощью return, то возвращается undefined
function func1(a, b) { a + b }
console.log(func); // function func(a, b) { return a + b }
console.log(func()); // NaN
console.log(func1); // function func1(a, b) { a + b }
console.log(func1()); // undefined
// анонимные функции
// функции - литералы
var funcExp = function (a, b) {
    return a + b;
}
console.log(funcExp(1,2)); // 3
// хостинг = подъем переменных = даже если вызов функции происходит до ее объявления, парсер js проанализирует код, ответственный за объявление
function one() {
    function funcExample() { return 'one' };
    return funcExample();
    function funcExample() { return 'two' };
}
console.log(one()); // two
function two() {
    var funcExample = function funcExample() { return 'one' };
    return funcExample();
    var funcExample = function funcExample() { return 'two' };
}
console.log(two()); // one

// Функции обратного вызова
// когда может пригодиться: для продолжения функционирования функции необходимо дождаться ответ от сервера
var func = function myfunction(callback) {
    var name = "Nick";
    return callback(name);
}

console.log(func(function myfunction(n) {
    return "Hello " + n;
}
)); // Hello Nick

// возвращение функции: в теле одной функции мы возвращаем целиком саму функцию
var func1 = function myfunction() {
    return function () { console.log("Привет") }
}
func1()();

// анонимные самовызывающиеся функции - основа модульного js
(function myfunction() {
    console.log("Привет от myfunction")
})(); // = myfunction()
(function myfunction() {
    var prop2 = "edasf";
    console.log("Привет от myfunction")
}()); // = myfunction()

// console.log(prop2); // Uncaught ReferenceError: prop2 is not defined

// паттерн "модуль"
var module = (function() {
    var prop2 = "edasf";
    console.log("Привет от myfunction из module")
})();

// хорошая практика - ставит ; перед самовызывающейся функцией
// ; помогает при проверке на завершение функций

var funcArgs = function myfunction(a, b, c) {
    console.log(arguments);
}
funcArgs(2, 3, 3); // [2, 3, 3]

var funcArgs1 = function myfunction() {
    var i, sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

console.log(funcArgs1(1, 2, 1, 32, 1, 2)); // [2, 3, 3]