 // --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

let array_1 =  [1,2,3,4,5];
let array_2 = ['Вася','Петя','Коля','Света','Катя'];
let array_3 = ['Вася',true, 1, false, 6] ;

console.log(array_1);
console.log(array_2);
console.log(array_3);

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

let array = [];
array [0] = 'Вася';
array [1] = false;
array[2] = 123;
console.log(array);


// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.


for (let i = 0; i <= 9; i++) {
    document.write('<div>ABRACADBRA</div>');
};

for (let i= 0; i <= 9; i++) {
    document.write(`<div> by ${i} </div>`);
};

let i = 0;
while (i <=19) {
    document.write("<h1>Привіт</h1>")
i++;

};


let l = 0;
while (l <=19){

    document.write(`<h1> День ${l}</h1>`)
    l++;
}







// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

// let array_5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (i = 0; i< array_5.length; i++ ) {
//     console.log(array_5[i] );
// };

//// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

let array_6 = ['Я', 'хочу', 'вивчити', 'js', 'дуже', 'швидко', 'як', 'тільки', 'зможу', 'зробити'];
for ( let i = 0; i < array_6.length; i++) {
    console.log(array_6[i]);
}

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

let array_7 = [ 1, 2, 'Я', 'хочу', 'вивчити', 'js', 3, 4, 5, false];
for ( let i = 0; i < array_7.length; i++) {
    console.log(array_7[i]);
}

// / - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

let array_8 = [ 1, true, 'Я', 'хочу', 'вивчити', true, 'js', false, 4, 5, false];
for (const i of array_8) {
    if (typeof i === "boolean") {
        console.log(i);
    }
};

 // - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи


 let array_9 = [ 1, 2, 'Я', 'хочу', 'вивчити', 'js', 3, 4, 5, false];
 for ( let i = 0; i < array_9.length; i++) {
   if ( typeof array_9 [i] === "number"){
   console.log(i);}
 };



 // - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи


 let array_10 = [ 1, true, 'Я', 'хочу', 'вивчити', true, 'js', false, 4, 5, false];
 for (const i of array_10) {
     if (typeof i === "string") {
         console.log(i);
     }
 };




 // - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.


 let array_11 = [];
 array_11 [0] = 'Вася';
 array_11 [1] = false;
 array_11 [2] = 123;
 array_11 [3] = "Галя";
 array_11 [4] = 12;
 array_11 [5] = true;
 array_11 [6] = 'Кадабра';
 array_11 [7] = 'Мамба';
 array_11 [8] = 112;
 array_11 [9] = 2;
  for ( let i = 0; i < array_11.length; i++){
      console.log(array_11 [i]);
  };




 // - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

 for ( let i = 0; i <= 10; i++ ) {
     console.log(`${i}`);
     document.write(`<div>${i}</div>`);
 }
 // - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

 // for ( let i = 0; i <= 100; i++ ){
 //     console.log(`${i}`);
 //     document.write(`${i}`);
 // }

 // - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

 for ( let i = 0; i <= 100; i+= 2){
     console.log(`${i}`);
     document.write(`${i}`);
 }
 // - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

 for ( let i=0; i<=100; i++) {
 if(i%2===0)
     console.log(i);
 }

 // - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
 for (let i = 0; i <= 100; i++) {
     if (i%2 !== 0)
         console.log(i);
 };


 for (let i = 0; i <= 100;  i++) {
     if (i%2 >0)
         console.log(i);
 };

