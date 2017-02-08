// ЦИКЛЫ
// 1 проход цикла = итерация
for (var i; i < 10; i++)
{

}

// ЦИКЛ FOR 
var j;
var arr = [1, 6, 3];
var len = arr.length;

for (j = 0; j < len; j++)
{
    console.log(arr[j]);
}

// ЦИКЛ FOR IN

var obj = {
    prop1: "23ec",
    prop2: "322",
    prop3: 32
};
var prop;

// всегда при обхождении объекта нужно делать проверку
for (prop in obj) {
    if (obj.hasOwnProperty(prop))
    console.log(prop + obj[prop]);
}

// ЦИКЛ WHILE
var k = 10;
while (k!=0) {
    console.log(k);
    k--;
}

var x = 10;

// ЦИКЛ DO WHILE
do {
    x--;
    console.log(x);
} while (x>5);