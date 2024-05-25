const btn = document.getElementById("jokebtn");
const para = document.getElementById("joke_parA");
const jokeurl =
  "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

let getJoke = function () {
  fetch(jokeurl)
    .then((data) => data.json())
    .then((item) => {
      para.textContent = `${item.joke}`;
    })
    .catch(function (error) {
      console.log(error);
    });
};
btn.addEventListener("click", function () {
  getJoke();
});
