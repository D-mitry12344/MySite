let button = document.querySelector(".click");
let transit = document.querySelector('.transition');
let clicker =document.querySelector(".clicker");
let headerDown = document.querySelector("h1");
let textClick = document.querySelector(".textClick");
let provocator = document.querySelector(".provocator");
button.onclick = () => {
	transit.style.background = 'red';
	clicker.style.borderLeftColor ="red";
	headerDown.style.color ="red";
	headerDown.textContent="НЕ ЖМИТЕ, ДАЖЕ ЕСЛИ НАПИСАНО";
	headerDown.style.textAlign= "center";
	headerDown.style.fontSize= "80px";
	button.style.borderLeftColor = "white";
	textClick.textContent="НЕ ЖМАТЬ!";
	textClick.style.color ="red";
	provocator.textContent="Я знаю ты хочешь)))";
	clicker.textContent="Привет";
	clicker.style.fontSize="30px";
	button.style.animationDuration="0.5s";
	clicker.disabled = (clicker.disabled == true) ? false : true;
	clicker.style.borderLeftColor  = (clicker.disabled == true) ? "red" : "white"
};
function toSite(){
	window.location.href = '#';
}
clicker.onclick = () => {
	headerDown.textContent="ОЙ, ЗРЯ";
	clicker.textContent=" ";
	headerDown.style.textAlign= "center";
	provocator.textContent= "Красавчик)"
	textClick.textContent=" ";
	transit.style.background = "white";
	headerDown.style.color ="";
	setTimeout(toSite, 2000);
};