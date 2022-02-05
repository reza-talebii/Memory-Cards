const addBtn = document.querySelector("#add-card-btn");
const BtnCloseContainer = document.querySelector("#hide");

const addCard = () => {
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
const showCardsDOM = () => {};
const clearAllCard = () => {};
const prevCard = () => {};
const nextCard = () => {};
const updateCurrent = () => {};
const turnCard = () => {};

addBtn.addEventListener("click", addCard);
BtnCloseContainer.addEventListener("click", closeAddContainer);
