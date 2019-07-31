// import { promises } from "dns";

const input = document.querySelector('.input-feild');

const btn = document.querySelector('.btn');

// const result = document.querySelector('.result');


btn.addEventListener('click', () => {
  const word = input.value;
  fetch(`/search/:${word}`)
    .then(res => res.json())
    .then(res => res.results)
    .then(res => res.forEach((e) => {
      console.log(e.title);
    }));
});
