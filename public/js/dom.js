// import { promises } from "dns";

const input = document.querySelector('.input-feild');

const btn = document.querySelector('.btn');

// const result = document.querySelector('.result');


btn.addEventListener('click', () => {
  const word = input.value;
  fetch(`https://api.themoviedb.org/3/search/movie?api_key=e60d1f76001c4655e361864c383b4640&query=${word}&page=1&include_adult=false`)
    .then(res => res.json())
    .then(res => res.results)
    .then(res => res.forEach((e) => {
      console.log(e.title);
    }));
});
