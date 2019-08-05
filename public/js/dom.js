const inputWord = document.querySelector('#word');
const handleError = document.querySelector('#error');
const viewTranslate = document.querySelector('#translate');
const from = document.querySelector('#from');
const to = document.querySelector('#to');

handleError.classList.add('display');

const langs = {
  Afrikaans: 'af',
  Amharic: 'am',
  Arabic: 'ar',
  Azerbaijani: 'az',
  Bashkir: 'ba',
  Belarusian: 'be',
  Bulgarian: 'bg',
  Bengali: 'bn',
  Bosnian: 'bs',
  Catalan: 'ca',
  Cebuano: 'ceb',
  Czech: 'cs',
  Welsh: 'cy',
  Danish: 'da',
  German: 'de',
  Greek: 'el',
  English: 'en',
  Esperanto: 'eo',
  Spanish: 'es',
  Estonian: 'et',
  Basque: 'eu',
  Persian: 'fa',
  Finnish: 'fi',
  French: 'fr',
  Irish: 'ga',
  Scottish: 'gd',
  Galician: 'gl',
  Gujarati: 'gu',
  Hebrew: 'he',
  Hindi: 'hi',
  Croatian: 'hr',
  Haitian: 'ht',
  Hungarian: 'hu',
  Armenian: 'hy',
  Indonesian: 'id',
  Icelandic: 'is',
  Italian: 'it',
  Japanese: 'ja',
  Javanese: 'jv',
  Georgian: 'ka',
  Kazakh: 'kk',
  Khmer: 'km',
  Kannada: 'kn',
  Korean: 'ko',
  Kyrgyz: 'ky',
  Latin: 'la',
  Luxembourgish: 'lb',
  Lao: 'lo',
  Lithuanian: 'lt',
  Latvian: 'lv',
  Malagasy: 'mg',
  Mari: 'mh',
  Maori: 'mi',
  Macedonian: 'mk',
  Malayalam: 'ml',
  Mongolian: 'mn',
  Marathi: 'mr',
  Malay: 'ms',
  Maltese: 'mt',
  Burmese: 'my',
  Nepali: 'ne',
  Dutch: 'nl',
  Norwegian: 'no',
  Punjabi: 'pa',
  Papiamento: 'pap',
  Polish: 'pl',
  Portuguese: 'pt',
  Romanian: 'ro',
  Russian: 'ru',
  Sinhalese: 'si',
  Slovak: 'sk',
  Slovenian: 'sl',
  Albanian: 'sq',
  Serbian: 'sr',
  Sundanese: 'su',
  Swedish: 'sv',
  Swahili: 'sw',
  Tamil: 'ta',
  Telugu: 'te',
  Tajik: 'tg',
  Thai: 'th',
  Tagalog: 'tl',
  Turkish: 'tr',
  Tatar: 'tt',
  Udmurt: 'udm',
  Ukrainian: 'uk',
  Urdu: 'ur',
  Uzbek: 'uz',
  Vietnamese: 'vi',
  Xhosa: 'xh',
  Yiddish: 'yi',
  Chinese: 'zh',
};
const keys = Object.keys(langs);

keys.forEach((element) => {
  const option = document.createElement('option');
  option.value = langs[element];
  option.textContent = element;
  if (element === 'Arabic') option.selected = 'selected';
  from.appendChild(option);
});

keys.forEach((element) => {
  const option = document.createElement('option');
  option.value = langs[element];
  option.textContent = element;
  if (element === 'English') option.selected = 'selected';
  to.appendChild(option);

});
// ?lang=${}
inputWord.addEventListener('keyup', (a) => {
  const word = inputWord.value;
  const langfrom = from.value;
  const langto = to.value;
  viewTranslate.setAttribute('style', 'color: red');
  if (inputWord.value === '') {
    viewTranslate.textContent = '';
    handleError.classList.add('display');
  }
  if (inputWord === document.activeElement && a.key !== 'Backspace') {
    setTimeout(() => {
      createXhr(`/translate?word=${word}&langfrom=${langfrom}&langto=${langto}`)
        .then(res1 => res1.text[0])
        .then((res2) => {
          viewTranslate.textContent = res2;
          handleError.textContent = '';
          handleError.classList.add('display');
        })
        .catch((err) => {
          handleError.textContent = err;
          handleError.classList.remove('display');
        });
    }, 1500);
  }
});
