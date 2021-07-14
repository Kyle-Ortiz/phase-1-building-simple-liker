// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const emptyLikes = document.querySelectorAll(".like-glyph");
emptyLikes.forEach((emptyLike) => {
  emptyLike.addEventListener("click",  () => {
    mimicServerCall()
    .then (() => {
      emptyLike.innerText = `${FULL_HEART}`;
      emptyLike.classList.add("activated-heart");
    })
    .catch((e) => {
      const error = document.querySelector(".hidden");
      error.classList.remove("hidden");
      const errorMessage = document.querySelector("#modal-message");
      errorMessage.innerText = `${e}`;
      setTimeout((e) => {
        error.classList.add("hidden")
      },3000);
      
    })
  })
})
const fullLikes = document.querySelectorAll(".like-glyph");
fullLikes.forEach((fullLike) => {
  fullLike.addEventListener("click",  () => {
    mimicServerCall()
    .then (() => {
      fullLike.innerText = `${EMPTY_HEART}`;
      fullLike.classList.remove("activated-heart");
    })
    .catch((e) => {
      const error = document.querySelector(".hidden");
      error.classList.remove("hidden");
      const errorMessage = document.querySelector("#modal-message");
      errorMessage.innerText = `${e}`;
      setTimeout((e) => {
        error.classList.add("hidden")
      },3000);
      
    })
  })
})




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
