import styles from "./app.module.css";
import {  tapList } from "../../utils/data";
import Header from "../app-header/app-header";
import BurgerIngredients from '../burger-ingredients/burger-ingredients'
import BurgerConstructor from "../burger-constructor/burger-constructor";
import {useEffect} from 'react'
import Loader from "../loader/loader";
import Catch from "../catch/catch";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import { useSelector, useDispatch } from "react-redux";
import { loadDataAction } from "../../services/getData/getDataAction";
import { getData, getPreload, getErrorFetch, getModalVisible } from "../../utils/selectors";
import { MODAL_CLOSE } from "../../services/modal/modalAction";

function App() {
  // const [visible, setVisible] = useState(false);
  // const [stateOrder, setStateOrder] = useState()

  const dispatch = useDispatch()

  const data = useSelector(getData);
  const preload = useSelector(getPreload);
  const errorFetch = useSelector(getErrorFetch);
  const visible = useSelector(getModalVisible)


  useEffect(() => {
    dispatch(loadDataAction())
  }, [dispatch])
  
  return (

    <div className={styles.app}>

      <Header/>

      {
        preload && 
        <div className={styles.load}>
          <Loader/>
          <h2 className='text text_type_main-large'>Загружаю ингредиенты...</h2>
        </div>
      }

      {
        errorFetch !== '' && 
          <div className={styles.load}>
            <Catch error={errorFetch}/>
          </div>
      }

      { 
        !preload && data.length  &&
        <main className={styles.main}>
            <BurgerIngredients   tapList={tapList}/>
            <BurgerConstructor/> 
        </main>
      }

      <Modal visible={visible} closePopup={ () => dispatch({type: MODAL_CLOSE}) }>
        <OrderDetails stateOrder={1}/>
      </Modal>
    </div>
  );
}

export default App;
