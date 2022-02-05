const directAddContainer = document.querySelector("#direct-btn");
const addCardBtn = document.querySelector("#add-card");
const BtnCloseContainer = document.querySelector("#hide");

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

const addCard = () => {
  console.log(getInputValue("#question", "#answer"));
};

const getInputValue = (...inputs) => {
  const values = [];
  inputs.map((input) => {
    values.push(document.querySelector(`${input}`).value);
  });
  return values;
};

const showCardsDOM = () => {};
const clearAllCard = () => {};
const prevCard = () => {};
const nextCard = () => {};
const updateCurrent = () => {};
const turnCard = () => {};

directAddContainer.addEventListener("click", directContainer);
BtnCloseContainer.addEventListener("click", closeAddContainer);
addCardBtn.addEventListener("click", addCard);
