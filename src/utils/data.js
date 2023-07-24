 export const ingredientsList = {
  'bun': 'Булки',
  'sauce': 'Соусы',
  'main': 'Начинки',
};

export const urlApiIngridients = 'https://norma.nomoreparties.space/api/ingredients';

export const getResponseData = (res) => {
  if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`); 
  }
  return res.json();
};


