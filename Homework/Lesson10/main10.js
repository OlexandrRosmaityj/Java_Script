// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text"


//
// let text = document.getElementById('text');
// let btn  = document.getElementsByClassName('txt')[0];
//
// btn.onclick = function (){
//     text.style.display = 'none'
// }

//     - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
// let btn  = document.getElementsByClassName('txt')[0];
//
// btn.onclick = function (){
//     btn.style.display = 'none'
// }

// - Cтворити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18,
// та повідомити про це користувача


// let age = document.getElementById("age");
// let but  = document.getElementById('but');
// but.onclick = function (){
//
//     if ( age.value >= 0 && age.value <18 ){
//         document.write("Ви не пройшли перевірку")
//             }
//    else if ( age.value > 18) {
//         document.write("оk");
//     } else {  document.write("Ввели відємне число");
//         }
// }




// - Создайте меню, которое раскрывается/сворачивается при клике
// let menuH = document.querySelector('.menu');
// let praisi  = menuH.querySelector(".prais");
//
// praisi.onclick = function() {
//       menuH.classList.toggle('hidden');
// };






// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.



 let comments = [
     {title : 'lorem1', body:'lorem ipsum dolo sit ameti'},
     {title : 'lorem2', body:'lorem ipsum dolo sit ameti'},
     {title : 'lorem3', body:'lorem ipsum dolo siths ameti'},
     {title : 'lorem4', body:'lorem ipsum dolo sit amessnti'}
 ];
let div = document.createElement('div');
    for (const item of comments) {
        let h3 = document.createElement('h3');
        let p = document.createElement('p');
        let btn = document.createElement('button');


        h3.innerText = item.title;
        p.innerHTML = item.body;
        btn.innerHTML = 'collapse'

        btn.onclick = () => {
            p.classList.add('hidden');
        }

        div.append(h3, p, btn);
    }
    document.body.appendChild(div)

















//
// let divFather = document.createElement('div');
// for (const item of comments) {
//     let div = document.createElement('div');
//     let h3 = document.createElement('h3');
//     let p = document.createElement('p');
//     let btn = document.createElement('button');
//     let hr = document.createElement('hr');
//
//     h3.innerText = item.name;
//     p.innerHTML = item.body;
//     btn.innerHTML = 'Закрий мене'
//
//     btn.onclick = () => {
//         p.classList.add('pHidden')
//
//     }
//     div.append(h3, p, btn);
//     divFather.append(div, hr);
// }
// document.body.appendChild(divFather)
//
//
