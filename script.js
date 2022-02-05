let cards = JSON.parse(localStorage.getItem("card")) || [];
let currentCardIndex = JSON.parse(localStorage.getItem("cardCurrent")) || 0;
//DOM VARIABLE
const directAddContainer = document.querySelector("#direct-btn");
const addCardBtn = document.querySelector("#add-card");
const BtnCloseContainer = document.querySelector("#hide");
const clearBtn = document.querySelector("#clear-card-btn");
const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const cardsContainer = document.querySelector(".cards");

const directContainer = () => {
  toggleClassContainer(".container", ".add-container");
};

const toggleClassContainer = (selector1, selector2) => {
  const cardContainer = document.querySelector(selector1);
  const addContainer = document.querySelector(selector2);
  cardContainer.classList.toggle("hide");
  addContainer.classList.toggle("show");
};

const closeAddContainer = () => {
  toggleClassContainer(".container", ".add-container");
};

const getInputValue = (...inputs) => {
  const values = [];
  inputs.map((input) => {
    const inp = document.querySelector(`${input}`);
    values.push(inp.value);
    inp.value = "";
  });

  return values;
};

const saveDate = (newCard) => {
  cards.push(newCard);
  localStorage.setItem("card", JSON.stringify(cards));
  showDOM();
};

const addCard = () => {
  toggleClassContainer(".container", ".add-container");
  const [question, answer] = getInputValue("#question", "#answer");
  const newCard = { question, answer };
  saveDate(newCard);
};

const showDOM = () => {
  updateCurrent();
  //Add card element
  cardsContainer.innerHTML = "";
  cards.map(creatCardElement);
};

const creatCardElement = (item, index) => {
  const cardItem = document.createElement("div");
  //ADD CLASSES
  cardItem.classList.add("card");
  if (index == currentCardIndex) cardItem.classList.add("active");
  //CARD INNER HTML
  cardItem.innerHTML = `
  <div class="card__inner">
  <div class="card__inner--front">
    <h3 class="card__question card-title">${item.question}</h3>
  </div>
  <div class="card__inner--back">
    <h3 class="card__answer card-title">${item.answer}</h3>
  </div>
  </div>
  `;
  //append
  cardsContainer.append(cardItem);
  //click show answer
  cardItem.addEventListener("click", turnCard);
};

const clearAllCard = () => {
  localStorage.clear();
  cards = [];
  currentCardIndex = 0;
  showDOM();
};

const updateCurrent = () => {
  const countCardContainer = document.querySelector("#count-card");
  countCardContainer.innerHTML =
    cards.length != 0 ? `${currentCardIndex + 1}/${cards.length}` : "0/0";
  localStorage.setItem("cardCurrent", currentCardIndex);
};

const nextCard = () => {
  const cardsItem = document.querySelectorAll(".card");
  cardsItem[currentCardIndex].className = "card left";

  currentCardIndex++;

  if (currentCardIndex > cards.length - 1) currentCardIndex = cards.length - 1;

  cardsItem[currentCardIndex].className = "card active";
  updateCurrent();
};

const prevCard = () => {
  const cardsItem = document.querySelectorAll(".card");
  cardsItem[currentCardIndex].className = "card right";

  currentCardIndex--;

  if (currentCardIndex < 0) currentCardIndex = 0;

  cardsItem[currentCardIndex].className = "card active";
  updateCurrent();
};

const turnCard = (e) => e.currentTarget.classList.toggle("show-answer");

directAddContainer.addEventListener("click", directContainer);
BtnCloseContainer.addEventListener("click", closeAddContainer);
addCardBtn.addEventListener("click", addCard);
clearBtn.addEventListener("click", clearAllCard);
prevBtn.addEventListener("click", prevCard);
nextBtn.addEventListener("click", nextCard);
showDOM();
