let titleIdReference = document.querySelector('#titleId');
let descriptionIdReference = document.querySelector('#descriptionId');
let imageIdReference = document.querySelector('#imageId');
let addButtonReference = document.querySelector('#addButton');

let cardsReference = document.querySelector('#cards');

let posts = []

addButtonReference.addEventListener('click',function(event){
    
    let titleIdReference = document.querySelector('#titleId').value;
    let descriptionIdReference = document.querySelector('#descriptionId').value;
    let imageIdReference = document.querySelector('#imageId').value;

    posts.push ({
        titleId: titleIdReference,
        descriptionId: descriptionIdReference,
        imageId: imageIdReference
    })
    event.preventDefault()
    console.log(posts)

    for(let post of posts){
        cardsReference.innerHTML+=`
        <div class="item">
                <img src="${post.imageId}">
                <h2>${post.titleId}</h2>
                <p>${post.descriptionId}</p>
            </div>
        `
    }
})
