
// lines (10 sloc)  1.03 KB
//
// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
// -- Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// -- отримує текст з параграфа з id "content"
// let contentId = document.getElementById ('content');
// console.log(contentId);

// -- отримує текст з блоку з id "rules"
// let rulesId = document.getElementById('rules');
// console.log(rulesId);

// -- замініть текст параграфа з id 'content' на будь-який інший
// contentId.innerText = " Lorem ipsum dolor sit amet, consectetur adipisicing.";

// -- замініть текст параграфа з id 'rules' на будь-який інший
// rulesId.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi fuga ipsa ipsam libero numquam possimus provident quae quo tempora.'

// -- змініть кожному елементу колір фону на червоний

// let stylDocumentId = document.getElementById('content',);
// stylDocumentId.style.backgroundColor = 'red';
//
// let stylDocumentClass = document.getElementsByClassName('fc bp');
// for (const item of stylDocumentClass) {
//  item.style.backgroundColor = "red"
//   }
//
// let  stylDocumentName =  document.getElementsByTagName('li');
// console.log(stylDocumentName)
// for (const element of stylDocumentName) {
//  element.style.backgroundColor = 'red'
// }


 // -- змініть кожному елементу колір тексту на синій


// -- отримати весь список класів елемента з id=rules і вивести їх в console.log


// let rulesId = document.getElementById('rules');
// console.log(rulesId.classList)



// -- поміняти колір тексту у всіх елементів fc_rules на червоний

let classFcRules = document.getElementsByClassName('fc_rules');
for(const element of classFcRules) {
 element.style.color = 'red'
}
