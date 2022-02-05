let cards = JSON.parse(localStorage.getItem("card")) || [];
let currentCardIndex = 1;
//DOM VARIABLE
const directAddContainer = document.querySelector("#direct-btn");
const addCardBtn = document.querySelector("#add-card");
const BtnCloseContainer = document.querySelector("#hide");
const clearBtn = document.querySelector("#clear-card-btn");
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
    values.push(document.querySelector(`${input}`).value);
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
  countCardContainer.innerHTML = `${currentCardIndex}/${cards.length}`;
};

// const nextCard = () => {};
// const prevCard = () => {};

const turnCard = (e) => e.currentTarget.classList.toggle("show-answer");

directAddContainer.addEventListener("click", directContainer);
BtnCloseContainer.addEventListener("click", closeAddContainer);
addCardBtn.addEventListener("click", addCard);
clearBtn.addEventListener("click", (e) => clearAllCard);
showDOM();
