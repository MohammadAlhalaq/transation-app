// import { promises } from "dns";

const input = document.querySelector('.input-feild');

const btn = document.querySelector('.btn');

// const result = document.querySelector('.result');

btn.addEventListener('click', () => {
  const word = JSON.stringify({ input: input.value });
  fetch('/search', {
    method: 'POST',
    body: word,
    headers: { 'Content-Type': 'application/json' },
  })
    .then(res => res.json())
    .then((res) => {
      console.log('results', res);
      return res.results;
    })
    .then(res => res.forEach((e) => {
      console.log(e.title);
    }));
});
