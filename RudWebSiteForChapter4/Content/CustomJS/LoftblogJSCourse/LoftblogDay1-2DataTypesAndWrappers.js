alert("Файл LoftblogDay1-2 подключен на странице");

// всего основных типов данных в js 6:
// 3 примитивных (number, boolean, string), object, undefined, function
var x = 'Добро пожаловать!';
var number = 1;
var str = "Поехали!";
var str1 = "function fu работает";
/*вместо var ; можно использовать ,*/
var numberSecond = 1.5,
    bool = true,
    undef,
    nuul = null,
    object = {
        proper: "1",
        // функцию можно объявить так
        pro: function myfunction() {
            alert("function myfunction работает");
        },
        // и ещё так
        fu: function () {
            alert(str1);
        }
    }
// alert(object.proper);
// object.pro();
// object.fu();

console.log("typeof nuul = " + typeof nuul)
console.log("typeof undef = " + typeof undef)
console.log("typeof bool = " + typeof bool)
console.log("typeof numberSecond = " + typeof numberSecond)
console.log("typeof str = " + typeof str)

// http://javascript.ru/regexp
// Когда регулярное выражение создается при помощи конструктора new RegExp(…),
// необходимо помнить, что обратные слеши (\) должны экранироваться, например:
var regexp = new RegExp('\\w', 'ig');

// При использовании литерального формата, этого делать не нужно:
regexp = /\w/gi;
func1 = function myfunction() {

}
arr = [1, 2, 3];


console.log("typeof object = " + typeof object) // object 
console.log("typeof regexp = " + typeof regexp) // object
console.log("typeof arr = " + typeof arr)       // object 
console.log("typeof func1 = " + typeof func1)   // function

console.log(" object = " + object); // вывод - object = [object Object]

object.proper = "234";

console.log(" object = " + object); // вывод - object = [object Object]

object.newProp = 123;

console.log(" object = " + object); // вывод - object = [object Object]

/* ОБЁРТКИ */

// ; можно не использовать при использовании методов, но это считается дурным тоном
// toLowerCase - метод = обертка для примитивного типа данных
console.log(x.toLowerCase())

console.log("String(Строка) = " )
console.log(String("Строка")) // Строка

console.log("new String(Строка) = ")
console.log(new String("Строка")) // String

console.log("typeof String(Строка) = " + typeof String("Строка")) // string
console.log("typeof new String(Строка) = " + typeof new String("Строка")) // object 

var numb = Number(124)
// объект - обёртка
var numbObj = new Number(1234)

console.log("numb = ")
console.log(numb) // 124
console.log("numbObj = ")
console.log(numbObj) // Number {[[PrimitiveValue]]: 1234}
console.log("typeof numb = " + typeof numb) // number
console.log("typeof numbObj = " + typeof numbObj) // object

console.log("typeof numbObj.toString() = " + typeof numbObj.toString()) // string
console.log("typeof numb.toString() = " + typeof numb.toString()) // string

numb.prop = 125;
numbObj.prop = 125;

console.log("numb = ")
console.log(numb) // 124
console.log("numbObj = ")
console.log(numbObj) // Number {prop: 125, [[PrimitiveValue]]: 1234}
console.log("typeof numb = " + typeof numb) // number
console.log("typeof numbObj = " + typeof numbObj) // object

console.log("typeof numbObj.toString() = " + typeof numbObj.toString()); // string
console.log("typeof numb.toString() = " + typeof numb.toString()); // string

// если приводим с помощью toString => получаем примитивы и теряем значения prop
console.log(numbObj.toString()); // 1234
console.log(numb.toString()); // 124