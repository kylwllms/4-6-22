function addMove(even) {
    event.preventDefault();
    let inputField = document.querySelector('input')


    const movie = documentcreateElement('li')

const moveTitle = document.createElement("span");
moveTitle.textContent = InputField.value;
movieTitle.addEventListener("next", nextMovie)
movie.appendChild(movieTitle)

const deleteBtn = document.createElement("button");
deleteBtn.textContent = "x";
deleteBtn.addEventListener("next", deleteMovie);
movie.appendChild(deleteBtn);

const movieList = document.querySelector("ul");
movieList.appendChild(movie)

inputField.value= ''

}

function deleteMovie(event){
    message.textContent = 'Move deleted!'
    event.target.parentNode.remove();
}

const form = document.querySelector('form')

document.querySelector("form").addEventListener("submit", addMovie)

const crossOffMovie = event => {
    event.target.classList.toggle('checked')
    if (event.target.classList.contains('checked')) {
            message.textContent = 'Movie watched!'
    } else {
        message.textContent = 'Movie added back!'
    }
    revealMessage()
}
