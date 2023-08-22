const urlApiIngridients = 'https://norma.nomoreparties.space/api';

const getResponseData = (res) => {
  if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`); 
  }
  return res.json();
};

function getIngredients() {
  return fetch(`${urlApiIngridients}/ingredients`)
   .then(res => getResponseData(res))
}

function getNumOrder(ingredientsId) {
  return fetch(`${urlApiIngridients}/orders`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      'ingredients': ingredientsId
    })
  }).then((res) => getResponseData(res));
}

export {getIngredients, getNumOrder}