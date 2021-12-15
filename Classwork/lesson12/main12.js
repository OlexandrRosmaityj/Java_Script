// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста

fetch('https://jsonplaceholder.typicode.com/posts').then( function (response){
 let respons = response.json();
 return respons;
})
    .then( posts => {
let wrap = document.createElement('div');
wrap.classList.add('wraps');

     for (const postsElement of posts) {
      let htmlDivElement = document.createElement('div');
      htmlDivElement.classList.add('post');

         htmlDivElement.innerHTML = `<h1> userId: ${ postsElement.userId} </h1>
        <h2> id: ${ postsElement.id} </h2>
        <h3>  title: ${postsElement.title } </h3>
        <p>  body: ${ postsElement.body} </p>`

         let but  =document.createElement('button');
         but.classList.add('btn');
         but.innerText =" Comments";

         but.onclick = () =>{
                        fetch(`https://jsonplaceholder.typicode.com/posts/${postsElement.id}/comments`)
                 .then(response => response.json())
                 .then(com =>{
                     for (const comElement of com) {
                         if (postsElement.id === comElement.postId){
                             let div1 = document.createElement('div');
                             div1.classList.add('div1')

                             div1.innerHTML = `<h1> postId: ${ comElement.postId} </h1>
        <h2> id: ${ comElement.id} </h2>
        <h3>  name: ${comElement.name } </h3>
        <h4>email: ${comElement.email}</h4>
        <p>  body: ${comElement.body} </p>`
                             htmlDivElement.appendChild(div1)
                         }
                     }
                 })
         }
         htmlDivElement.appendChild(but);
         wrap.appendChild(htmlDivElement);
      }
        document.body.appendChild(wrap);
})

