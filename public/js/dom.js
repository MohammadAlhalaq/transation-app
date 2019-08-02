const inputWord = document.querySelector('#word');
const viewTranslate = document.querySelector('#translate');
inputWord.addEventListener('keypress', (code) => {
  const word = inputWord.value;
  viewTranslate.setAttribute('style', 'color: red');
  if (code.key === 'Enter') {
    createXhr(`/translate?word=${word}`)
      .then(res => res.json())
      .then(res1 => res1.text[0])
      .then((res2) => {
        viewTranslate.textContent = res2;
      })
      .catch(err => console.log(err));
  }
});
