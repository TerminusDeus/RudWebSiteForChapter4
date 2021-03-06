﻿// выражения, инструкции
// выражения возвращают значения

var str = "string" //

var statement = 5 + 2; // выражение => надо вычислить для парсера
var liter = "asdcwe"; // литерал => не надо вычислять, возвращается такой, какой есть

// ОПЕРАТОРЫ

// арифметичекие
// условные 
// сравнения
// побитовые

//  разные операторы имеют разный приоритет: Приоритет операторов https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

// АРИФМЕТИЧЕКИЕ ОПЕРАТОРЫ

// префиксная и постфиксная форма
var a = 2;
var b = 3;

console.log(a++); // 2 => сначала вывод в консоль, потом присвоение
console.log(a); // 3
console.log(++a); // 4
console.log(a); // 4
console.log(a += 1); // 5
console.log(a -= 1); // 4

// ОПЕРАТОРЫ СРАВНЕНИЯ

//var x = 2, y = 3

a < b
a > b
// проверка по значению с автоконвертацией в тип проверки
a == b
a != b
// проверка по значению и типу данных
a === b
a !== b

// УСЛОВНЫЕ ОПЕРАТОРЫ

var age = 19;

//if (age === 18)
//{
//    alert("Уже не молодой!");
//}
//else {
//    alert("Ошибочка");
//}

(age === 18) ? alert("Вы взрослый!") : (age === 21) ? alert("Вам 21") : alert("Юнец");

// ЛОГИЧЕСКИЕ ОПЕРАТОРЫ 
(age <= 20 && age == 19) ? alert("Условие 1 выполняется") : alert("Условие 1 не выполняется");

(age <= 20 || age == 20) ? alert("Условие 2 выполняется") : alert("Условие 2 не выполняется");