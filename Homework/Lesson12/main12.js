
// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати,
// за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts


fetch('https://jsonplaceholder.typicode.com/posts').then( function (response) {
    let jsonBody = response.json();
        return jsonBody;
})
.then(users =>{

    let divElement = document.createElement("div");
    for (const user of users) {
        let divPost = document.createElement('div');

        divElement.classList.add('elem');
        divPost.classList.add("post");

        divPost.innerHTML = `<h1> userId ${user.userId}</h1>
        <h2> id ${user.id}</h2>
        <h3>title ${user.title}</h3>
        <p> body ${user.body}</p> `;


        document.body.appendChild(divElement);
        divElement.appendChild(divPost);
   }
})

//     2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments

fetch('https://jsonplaceholder.typicode.com/comments').then(function (respon){
    let coment = respon.json();
       return coment;
})
    .then(comments =>{
        let div  = document.createElement('div');
        div.classList.add('wrap');

        for (const comment of comments) {
            let divComment =document.createElement('div');
                  divComment.classList.add('comments');

            divComment.innerHTML = `<h1>userId ${comment.userId}</h1>
            <h2>id: ${comment.id}</h2>
            <h3>name: ${comment.name}</h3>
            <h4>email: ${comment.email}</h4>
            <p>body: ${comment.body}</p>`;

document.body.appendChild(div);
div.appendChild(divComment);
        }
    })


