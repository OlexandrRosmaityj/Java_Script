//
// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'


// let str1 = 'javascript is cool';
// let str2 = 'lorem ipsum';
// let str3 = 'hello world';
// document.write(`<div>Довжина дорівнює: ${str1.length}</div>  <div>Довжина дорівнює:${str2.length}</div><div>Довжина дорівнює: ${str3.length}</div>`)


// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let str1 = 'javascript is cool';
// let toUpcase = str1.toUpperCase();
// console.log(toUpcase);

// let str2 = 'lorem ipsum';
// let toUpcase = str2.toUpperCase();
// console.log(toUpcase);
//
// let str3 = 'hello world';
// let toUpcase = str3.toUpperCase();
// console.log(toUpcase);


// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// let str1 = 'HELLO WORLD';
// let toLocase = str1.toLowerCase();
// console.log(toLocase,)

// let str2 = 'LOREM IPSUM';
// let toLocase = str2.toLowerCase();
// console.log(toLocase);

// let str3 = 'JAVASCRIPT IS COOL';
// let toLocase = str3.toLowerCase();
// console.log(toLocase);



// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
//
// let str = ' dirty string   ';
// let trim = str.trim();
// console.log(trim)



// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//   let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']

// let str = 'Каждый охотник желает знать'
// let stringToarray = (str) => str.split(' ')
// let arr = stringToarray(str);
// document.write(arr);


// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый

//
// let str = 'Каждый охотник желает знать';
// let delete_characters = (str, leng) => {
//     let arr = str.split(' ')
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].length === leng) {
//             console.log(arr[i]);
//
//         }
//     }}
// delete_characters(str,5);

// let delete_characters = (str, index) => {
//     return str.substr(0, index);
// };
// document.write(delete_characters(str,6))




//
// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами.
// При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

// let str = "HTML JavaScript PHP";
// let insert_dash = (str) =>{
// let toUpcase = str.toUpperCase().replaceAll(' ', " - ");
// console.log(toUpcase);}
// insert_dash(str);
//

//
// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
//


// let firstUp = (str) => {
//     if (!str) return str; // перевірка на те чи стрічка не пуста, а саме чи не пустий [0] індекс
//     return str[0].toUpperCase() + str.substring(1);
// };
// console.log(firstUp('вася привiт !'));






