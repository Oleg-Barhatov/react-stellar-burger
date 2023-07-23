 export const ingredientsList = {
  'bun': 'Булки',
  'sauce': 'Соусы',
  'filling': 'Начинки',
};

export const urlApi = 'https://norma.nomoreparties.space/api/ingredients';

export const getResponseData = (res) => {
  if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`); 
  }
  return res.json();
};


