let tarif = document.getElementById("money");
let buyButton=document.getElementById("buy-button")

function handleButtonClick() {
  tarif.scrollIntoView({block: "start", behavior: "smooth"});
}

buyButton.addEventListener('click', handleButtonClick);


let mara = document.getElementById("mara");
let aboutButton = document.getElementById("about-button");

function handleButtonClick1() {
  mara.scrollIntoView({block: "start", behavior: "smooth"});
}

aboutButton.addEventListener('click', handleButtonClick1);