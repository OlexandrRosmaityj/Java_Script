// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка обчислює та повертає площу прямокутника висотою

// let area = (a, b) => a*b;
// console.log(area(5, 6));


// - створити функцію яка обчислює та повертає площу кола
// let area = ( r ) =>3.14*r**2;
// console.log(area( 10));

// - створити функцію яка обчислює та повертає площу циліндру
// let area = (r, h) => 2*3.14*r*h;
// console.log( area(5, 10));

// - створити функцію яка приймає масив та виводить кожен його елемент

// let array = [1, 2, 2,'ffa' ];
// let output_Arr = (array) =>{
//     for (let i=0; i< array.length; i++)
//     {
//         document.write(`<div>${array[i]}</div>`);
//     }
// }
// output_Arr(array);


// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент
// let outputText = (text) => {
//     document.write(`<p>${text}</p>`);
// }
// outputText('Hello!!!');



// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// let outputUL = (text) => {
//    document.write(`<ul>
// <li>${text}</li>
// <li>${text}</li>
// <li>${text}</li>
// </ul>`);
// }
// outputUL("Hello World");

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)



// let outputUL = (text,quantity ) => {
//     for (let i=1; i<=quantity; i++){
//
//         document.write(`<ul>
// <li>${text}</li></ul>`);
//     }
// }
// outputUL("Hello World", 3);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let arr = [55, 'Вася', true, 144, 'Петро']
// let acceptElement = (arr) => {
//     for (let i =0; i< arr.length; i++){
//         document.write(`<ul><li>${arr[i]}</li></ul>`);
//     }
// }
// acceptElement(arr);

//
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок

// let arr = [ {
//     id: 12,
//     name: "Оля",
//     age: 26
// },{
//     id: 8,
//     name: "Дмитро",
//     age: 18
// },{
//     id: 12,
//     name: "Степан",
//     age: 35
// }]
//
// let acceptArr = (arr) =>{
//     for (let i=0; i < arr.length; i++) {
//            document.write(`<div>${arr[i].name} :  ${arr[i].id} : ${arr[i].age} </div>`);
//
//     }
//
// }
// console.log(acceptArr(arr));