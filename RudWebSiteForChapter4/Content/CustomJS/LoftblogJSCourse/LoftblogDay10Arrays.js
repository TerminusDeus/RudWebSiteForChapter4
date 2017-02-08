// массивы - упорядоченные наборы данных, определеннные индексами
// способ создания массива с помощью литерала
var arr = [1, "fg", {}];
// объекты массива используются в разных случаях по разному

// способ создания массива с помощью литерала
// элементы массива можно дотать с помощью индекса
// все массивы zerobased = начинаются с элемента с индексом = 0
// добавлением массива
arr[4] = "fer";
console.log(arr);

// дырки в массивах
console.log(arr[3]); // undefined
console.log(arr.length); // 5

// delete помогает удалить элемент, но при этом получается дырка

delete arr[1];
console.log(arr[1]); // undefined

// для удаления без дырок надо использовать splice
arr.splice(1, 2);

arr.length = 10;
console.log(arr);

// добавление элемента в конец массива
arr[arr.length] = "323fc";
console.log(arr);

// многомерный массив
var matrix = [
    [1, 2, 3],
    [1, "w", 2]
]
console.log(matrix);
console.log(matrix[1][1]); // w // номер элемента - массива, номер элемента в подмассиве

// конкатенация массивов
var newArr = matrix.concat(arr);
console.log(newArr);

// преобразование массива в строку
console.log(arr.join(""));

// вставляем новый элемент в конец массива
arr.push("safwe")
console.log(arr);

// удаляем последний элемент массива
arr.pop();
console.log(arr);

// вставка и удаление элементов в начале массива
arr.unshift("asd");
console.log(arr);
arr.shift();
console.log(arr);

// элементы в обратном порядке
arr.reverse();
console.log(arr);

// вырезаем подмассив
slicedArr = arr.slice(0, 1);
console.log(slicedArr);

// сортировка в зависимости от функции - паттерна
arr.sort();
console.log(arr);

