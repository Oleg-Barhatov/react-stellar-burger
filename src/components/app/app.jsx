import styles from "./app.module.css";
import {  tapList } from "../../utils/data";
import Header from "../app-header/app-header";
import BurgerIngredients from '../burger-ingredients/burger-ingredients'
import BurgerConstructor from "../burger-constructor/burger-constructor";
import {useState, useEffect} from 'react'
import { getResponseData } from "../../utils/data";
import { urlApiIngridients } from "../../utils/data";
import Loader from "../loader/loader";
import Catch from "../catch/catch";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";

function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [data, setData] = useState([]);
  const [visible, setVisible] = useState(false);
 
  useEffect(() => {
    const getFilms = () => {
      setLoading(true)
    fetch(urlApiIngridients)
      .then(res => getResponseData(res))
      .then(data => setData(data.data))
      .catch(err => setError(err))
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

      {
        error !== '' && 
          <div className={styles.load}>
            <Catch error={error}/>
          </div>
      }

      { 
        !loading && data.length  &&
        <main className={styles.main}>
          <BurgerIngredients data={data} tapList={tapList}/>
          <BurgerConstructor data={data} visible={ () => setVisible(!visible) }/> 
        </main>
      }

      <Modal visible={visible} closePopup={ () => setVisible(!visible) }>
        <OrderDetails/>
      </Modal>
    </div>
  );
}

export default App;
