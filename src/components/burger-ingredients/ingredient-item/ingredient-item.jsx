import styles from './ingredient-item.module.css';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { DataPropType } from '../../../utils/prop-types';
import Modal from '../../modal/modal';
import IngredientDetails from '../../ingredient-details/ingredient-details';
import {useState} from 'react'
import { useDispatch } from 'react-redux';
import { ADD_BUN, ADD_FILLING } from '../../../services/ingredient/ingredientAction';

function IngredientItem ({data}) {
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch()

  const addIngredient = () => {
    if (data.type === 'bun') {
      dispatch({type: ADD_BUN, payload: data}) 
    } else  {
      dispatch({type: ADD_FILLING, payload: data})
    }
  }

  return (
    <>
    
      <li className={`${styles.li}`} onClick={addIngredient}>
        <Counter className={`${styles.count}`} 
                 count={1} 
                 size="default" 
                 extraClass="m-1"
        />
        <img src={data.image} 
             alt={data.name} 
             className={`${styles.image}`}>
        </img>
        <div className={`${styles.container}`}>
          <p className='text text_type_digits-default '>{data.price}</p>
          <CurrencyIcon type="primary" />
        </div>
        <p className={`${styles.paragraph} text text_type_main-default`}>{data.name}</p>
      </li>

      <Modal visible={visible} closePopup={ () => setVisible(!visible) }>
        <IngredientDetails data={data}/>
      </Modal>
      

    </>
  )
}

IngredientItem.propTypes = {
  data: DataPropType.isRequired
}

export default IngredientItem;