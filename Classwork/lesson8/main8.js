// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) змінює клас тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)
// let textId = document.getElementById('main_header');
// console.log (textId);
// textId.classList.add('mon-year');

// b) робить шириниу елементу ul 400px
// let widthUl = document.getElementsByTagName("ul");
// widthUl.style.width = '400px';

// c) робить шириниу всіх елементів з класом linkList шириною 50%
// let widthClassLinklist = document.getElementsByClassName('linkList');
// for (const widthClassLinklistElement of widthClassLinklist) {widthClassLinklistElement.style.width = '50%'
// }

// d) отримує текст який зберігається в елементі з класом listElement2
// function txt (text) {
//     let elemClassName = document.getElementsByClassName('listElement2');
//     elemClassName.innnerText = text
//     }

// e) отримує всі елементи li та змінює ім колір фону на сірий
// let fonLi = document.getElementsByTagName("ul");
// for (const fonLiElement of fonLi) {
// fonLiElement.style.background = 'silver'
//     };


// f) отримує всі елементи 'a' та додає їм клас anchor
// let elemLi = document.getElementsByTagName("a");
// for (const element of elemLi) {
// element.classList.add('anchor')
//     };


// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
// let elemLi = document.getElementsByTagName("a");
// for (const element of elemLi) {if( element.innerText= "link3"){ element.style.fontSize = '40px'
// }
//     };

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
//
// let elemLi = document.getElementsByTagName("a");
// for (const element of elemLi) { let xxx = element.innerText
//     element.classList.add('xxx')
//     };
// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// let elemSub_header = document.getElementsByClassName('sub-header') ;
// for (const elemSubHeaderElement of elemSub_header) {
//     elemSubHeaderElement.style.background =prompt("Введіть колір");
// }
// console.log(elemSubHeaderElement)


// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
// let elemSub_header = document.getElementsByClassName('sub-header') ;
// for (const elemSubHeaderElement of elemSub_header) {if( elemSubHeaderElement.innerText === 'content 2 segment'){
//     elemSubHeaderElement.style.color = prompt('Введіть колір');
// };
// };

// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// let elemClassContent_1 = document.getElementsByClassName('content_1');
// elemClassContent_1.innerText = prompt('text')

// l) отримати елементи p та змінити їм padding на 20px
// let elemP = document.getElementsByTagName('p');
// for (const elemPElement of elemP) {elemPElement.style.padding = '20px'};

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
// let elemText2 = document.getElementsByClassName('text2');
// for (let elemText2Element of elemText2) { elemText2Element.innerText = "mon-year"
// }
