const btnDec = document.querySelector(".btnbtn-dec");
const text = document.querySelector("#text");
const btnIec = document.querySelector(".btnbtn-inc");
const btnRes = document.querySelector(".reset");

let counter = 0;

btnDec.addEventListener("click", () => {
  if (counter > 0) counter--;

  text.innerHTML = counter;
});

btnIec.addEventListener("click", () => {
  counter++;

  text.innerHTML = counter;
});
btnRes.addEventListener("click", () => {
  counter = 0;

  text.innerHTML = counter;
});
