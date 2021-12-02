//
// Все робити за допомоги js.
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

// let div = document.createElement('div');
// div.classList.add('wrap', 'collapse', 'alpha', 'beta');
// div.innerText = "привіт!!!"
// div.style.background = 'silver';
// div.style.color = 'red';
// div.style.fontSize = '25px';
// document.body.appendChild(div);
// let clonDiv =  div.cloneNode(true);
// document.body.appendChild(clonDiv);


// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.
// let menu_Ul = document.getElementsByClassName('menu');
// let menu  =['Main','Products','About us','Contacts'];
// for (const menu1 of menu){
//    let createLi = document.createElement('li');
//     createLi.innerText = menu1;
//     menu_Ul[0].appendChild(createLi)
// }


// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

//
// for (const elemArrElement of coursesAndDurationArray) {
//     let elemArr = document.createElement('div');
//     elemArr.innerText =`${elemArrElement.title} ${elemArrElement.monthDuration}`;
//     document.body.appendChild(elemArr)
// }


// // - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// // За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
// //     Завдання робити через цикли.

let elemArr = document.createElement ('div');
let our = elemArr.classList.add('item')
document.body.appendChild(elemArr);
let itemDiv = document.getElementsByClassName('item' );

for (const elemArrElement of coursesAndDurationArray) {

    let h1 = document.createElement('h1');
    h1.classList.add('heading')
    h1.innerText =`${elemArrElement.title}`;
   itemDiv[0].appendChild(h1);


    let p = document.createElement('p');
    p.classList.add( 'heading');
    p.innerText =`${elemArrElement.monthDuration}`;
    document.body.appendChild(p);
    itemDiv[0].appendChild(p);
 }





