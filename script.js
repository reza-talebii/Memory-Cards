const cards = JSON.parse(localStorage.getItem("card")) || [];
//DOM VARIABLE
const directAddContainer = document.querySelector("#direct-btn");
const addCardBtn = document.querySelector("#add-card");
const BtnCloseContainer = document.querySelector("#hide");
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
  showCardsDOM();
};

const addCard = () => {
  toggleClassContainer(".container", ".add-container");
  const [question, answer] = getInputValue("#question", "#answer");
  const newCard = { question, answer };
  saveDate(newCard);
};

const showDOM = () => {
  //CLEAR CONTAINER
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

// const clearAllCard = () => {};
// const prevCard = () => {};
// const nextCard = () => {};
// const updateCurrent = () => {};
// const turnCard = () => {};

directAddContainer.addEventListener("click", directContainer);
BtnCloseContainer.addEventListener("click", closeAddContainer);
addCardBtn.addEventListener("click", addCard);
showDOM();
