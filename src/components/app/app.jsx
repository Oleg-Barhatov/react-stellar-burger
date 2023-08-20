import styles from "./app.module.css";
import {  tapList } from "../../utils/data";
import Header from "../app-header/app-header";
import BurgerIngredients from '../burger-ingredients/burger-ingredients'
import BurgerConstructor from "../burger-constructor/burger-constructor";
import {useState, useEffect, useReducer} from 'react'
import { getIngredients } from "../../utils/api";
import Loader from "../loader/loader";
import Catch from "../catch/catch";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import { BurgerIngredientsContext } from "../../services/appContext";

function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [data, setData] = useState([]);
  const [visible, setVisible] = useState(false);
  const [ingredient, setIngredient] = useState({ bun: null, fillings: [] });
  const initialState = { total: 0 };
  const [stateTotal, dispatchTotal] = useReducer(reducer, initialState);
  const [stateButton, setStateButton] = useState(false)
  const [stateOrder, setStateOrder] = useState()
  
  function reducer(state, ingredient) {
    const bun = ingredient.bun ? ingredient.bun.price * 2 : initialState.total
    const filling = ingredient.fillings.reduce((previousValue, filling) => previousValue + filling.price, initialState.total)
    return  { total: filling + bun }
  }

  const activeButton = () => {
    if (ingredient.bun !== null && ingredient.fillings.length !== 0) {
      return setStateButton(true)
    }
  }

  useEffect(() => {
    dispatchTotal(ingredient)
    activeButton()
  }, [ingredient])

  useEffect(() => {
    const getData = () => {
      setLoading(true)
      getIngredients()
      .then(data => setData(data.data))
      .catch(err => setError(err))
      .finally(() => setLoading(false))
    };
    getData()
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

      {
        error !== '' && 
          <div className={styles.load}>
            <Catch error={error}/>
          </div>
      }

      { 
        !loading && data.length  &&
        <main className={styles.main}>
          <BurgerIngredientsContext.Provider value={{data, ingredient, setIngredient, visible, setVisible, stateTotal, dispatchTotal, stateButton, stateOrder, setStateOrder,setStateButton}}>
            <BurgerIngredients   tapList={tapList}/>
            <BurgerConstructor/> 
          </BurgerIngredientsContext.Provider>
        </main>
      }

      <Modal visible={visible} closePopup={ () => setVisible(!visible) }>
        <OrderDetails stateOrder={stateOrder}/>
      </Modal>
    </div>
  );
}

export default App;
