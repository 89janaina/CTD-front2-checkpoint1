let titleIdReference = document.querySelector('#titleId');
let descriptionIdReference = document.querySelector('#descriptionId');
let imageIdReference = document.querySelector('#imageId');
let addButtonReference = document.querySelector('#addButton');

let cardsReference = document.querySelector('#cards');

let post = "";

let posts = [];

//evento

addButtonReference.addEventListener('click', function(event){

    event.preventDefault()

    //input para receber Dados

    post = { titleId: titleIdReference.value, descriptionId: descriptionIdReference.value,  imageId: imageIdReference.value}

    cardsReference.innerHTML += (`
   
    <div class="item">
        <img src="${post.imageId}">
        <h2>${post.titleId}</h2>
        <p>${post.descriptionId}</p>
    </div>    
</div>`)

posts.push(post)
    
})
