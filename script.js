let cards = JSON.parse(localStorage.getItem("card")) || [];
let currentCardIndex = 0;
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
  if (currentCardIndex == 0) currentCardIndex++;
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
  if (index == 0) cardItem.classList.add("active");
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
// const prevCard = () => {};
// const nextCard = () => {};
// const turnCard = () => {};

directAddContainer.addEventListener("click", directContainer);
BtnCloseContainer.addEventListener("click", closeAddContainer);
addCardBtn.addEventListener("click", addCard);
clearBtn.addEventListener("click", clearAllCard);
showDOM();
