import styles from "./app.module.css";
import {  ingredientsList } from "../../utils/data";
import Header from "../app-header/app-header";
import BurgerIngredients from '../burger-ingredients/burger-ingredients'
import BurgerConstructor from "../burger-constructor/burger-constructor";
import React from 'react'
import { getResponseData } from "../../utils/data";
import { urlApiIngridients } from "../../utils/data";
import Loader from "../loader/loader";

function App() {
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(false)
  const [data, setData] = React.useState([])
 

  React.useEffect(() => {
    const getFilms = () => {
      setLoading(true)
    fetch(urlApiIngridients)
      .then(res => getResponseData(res))
      .then(data => setData(data.data))
      .catch(error => setError(true), console.log(error))
      .finally(() => setLoading(false))
    };
    getFilms()
  }, [])
  
 
  return (
    <div className={styles.app}>
      <Header/>
      {
        loading && 
        <div className={styles.load}>
          <Loader/>
          <h2 className='text text_type_main-large'>Загружаю ингредиенты...</h2>
        </div>
      }
      {error && 'Произошла ошибка'}
      { !loading && data.length > 0 &&

      <main className={styles.main}>
        <BurgerIngredients data={data} ingredientsList={ingredientsList}/>
        <BurgerConstructor data={data}/> 
      </main>

      }
    </div>
  );
}

export default App;
