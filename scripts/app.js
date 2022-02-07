let cards = JSON.parse(localStorage.getItem("card")) || [];
let currentCardIndex = JSON.parse(localStorage.getItem("cardCurrent")) || 0;
//button VARIABLE
const directAddContainer = document.querySelector("#direct-btn");
const addCardBtn = document.querySelector("#add-card");
const BtnCloseContainer = document.querySelector("#hide");
const clearBtn = document.querySelector("#clear-card-btn");
const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const countInput = document.querySelector("#count-input");
//card variable
const cardsContainer = document.querySelector(".cards");

//EventListener
directAddContainer.addEventListener("click", toggleClassContainer);
BtnCloseContainer.addEventListener("click", toggleClassContainer);
addCardBtn.addEventListener("click", addCard);
clearBtn.addEventListener("click", clearAllCard);
prevBtn.addEventListener("click", prevCard);
nextBtn.addEventListener("click", nextCard);
countInput.addEventListener("change", changeCountCard);
showDOM();
