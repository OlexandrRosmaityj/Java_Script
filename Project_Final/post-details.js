let searchID = window.location.search;
let postId = searchID.replace(`?Post_Id=`, ``)

fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(value => value.json())
    .then(post => {

        let postDiv = document.createElement("div")

        postDiv.innerHTML =
            `<div>
                <div>id: ${post.id}</div>
                <div>title: ${post.title}</div>
                <div>body: ${post.body}</div>
            </div>`

document.body.appendChild(postDiv)

        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
            .then(response => response.json())
            .then(comments => {

                // commentsDiv.innerHTML = `<h2>ALL COMMENTS</h2>`
                commentsDiv.classList.add('fff')
                for (const comment of comments) {
                    let commentDiv = document.createElement(`div`);
                    commentDiv.innerHTML += `
                    
                    id: ${comment.id}
                    name: ${comment.name}
                    email: ${comment.email}
                    body: ${comment.body}
                    `


                  document.body.appendChild(commentsDiv)
                }
        })
    });

