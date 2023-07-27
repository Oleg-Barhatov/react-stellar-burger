const urlApiIngridients = 'https://norma.nomoreparties.space/api';

const getResponseData = (res) => {
  if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`); 
  }
  return res.json();
};

export default function getIngredients() {
  return fetch(`${urlApiIngridients}/ingredients`)
   .then(res => getResponseData(res))
}

