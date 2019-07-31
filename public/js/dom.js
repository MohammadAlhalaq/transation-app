/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
// import { promises } from "dns";

const input = document.querySelector('.input-feild');

const btn = document.querySelector('.btn');

const result = document.querySelector('.result');

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
	  const poster = document.createElement('div');
	  const posterImg = document.createElement('img');
	  const posterTitle = document.createElement('h2');
	  const posterOverview = document.createElement('P');
	  poster.classList.add('poster');
	  posterImg.classList.add('posterImg');
	  posterTitle.classList.add('posterTitle');
	  posterImg.setAttribute('src', `https://image.tmdb.org/t/p/w500/${e.poster_path}`);
	  poster.appendChild(posterTitle);
	  poster.appendChild(posterImg);
	  posterTitle.textContent = e.title;
	  posterOverview.textContent = e.overview;
	  poster.appendChild(posterOverview);
	  result.appendChild(poster);
    }));
});
