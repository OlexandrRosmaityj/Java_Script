//
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// function calc (a, b){
//     let area = a * b;
//     return area;
// };
// let result = calc(5, 10);
// console.log(result);




// - створити функцію яка обчислює та повертає площу кола з радіусом r
//
// function calc (a){
//     const pi = 3.14;
//     return pi*a**2;
// }
// let result = calc(5);
// console.log(result);



// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// function calc (a, b){
//     const pi = 3.14;
//     return 2*pi*a*b;
// };
// let result = calc (10, 5);
// console.log(result);


// - створити функцію яка приймає масив та виводить кожен його елемент
//


// array = ['я','був', 'тут', 23,12]
// function arr (array) {
//     for (let i = 0; i < array.length; i++) {
//         document.write(array[i]); }
// };
// arr(array);


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function txt (text) {
//     document.write(`<p>${text}</p>`);
// };
// txt("hello!");



// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function txt (text) {
//     document.write(`<ul>
// <li>${text}</li>
// <li>${text}</li>
// <li>${text}</li>
// </ul>`);
// };
// txt("hello!");

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)


// function text (size,it) {
//     for (let i = 0; i < size; i++) {
//     document.write(`<ul>
//   <li>${it}</li>
//   <li>${it}</li>
//   <li>${it}</li>
//   </ul>`);
//            };
// };
// text(5,"привіт");
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// array = ['я','був', 'тут', 23, 12, false, true]
// function arr (array) {
//     for (let i = 0; i < array.length; i++) {
//         document.write(`<ul>
//             <li>${array[i]}</li>
//
//             </ul>` ); }
// };
// arr(array);

//
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
//
// array = [{
//     id: 1,
//     name: "Петя",
//     age: 21,
//
//     },{
//     id: 2,
//     name: "Коля",
//     age: 63,
//
// },{
//     id: 3,
//     name: "Света",
//     age: 43,
// }
// ]


// function arr (array) {
//     for (let i = 0; i < array.length; i++) {
//        document.write(`<div> ${array[i].name} : ${array[i].id} : ${array[i].age}  </div>`);
//         console.log(array[i]);
//     };
// };
// arr(array);


