import styles from "./app.module.css";
import {  ingredientsList } from "../../utils/data";
import Header from "../app-header/app-header";
import BurgerIngredients from '../burger-ingredients/burger-ingredients'
import BurgerConstructor from "../burger-constructor/burger-constructor";
import {useState, useEffect} from 'react'
import { getResponseData } from "../../utils/data";
import { urlApi } from "../../utils/data";

function App() {
  const [state, setState] = useState({
    isLoading: false,
    hasError: false,
    data: []
  });
  
  useEffect(() => {
    const getData = () => {
      setState({...state, isLoading: true});
      fetch(urlApi)
        .then(res => getResponseData(res))
        .then(data => setState({data: data.data, isLoading: false, hasError: false}))
        .catch(error => setState({...state, hasError: true }))
    }
   getData()
  }, [state])

  const {isLoading, hasError, data} = state;
  console.log(state)
  return (
    <div className={styles.app}>
      <Header/>
      <main className={styles.main}>
        <BurgerIngredients data={data} ingredientsList={ingredientsList}/>
        <BurgerConstructor data={data}/>
      </main>
    </div>
  );
}

export default App;
