import styles from './ingredient-item.module.css';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { DataPropType } from '../../../utils/prop-types';
import Modal from '../../modal/modal';
import IngredientDetails from '../../ingredient-details/ingredient-details';
import {useState, useContext} from 'react'
import { BurgerIngredientsContext } from '../../../services/appContext';
import { v4 as uuidv4 } from 'uuid';

function IngredientItem ({data}) {
  const [visible, setVisible] = useState(false);
  const {ingredient, setIngredient} = useContext(BurgerIngredientsContext)

  const addIngredient = () => {
    if (data.type === 'bun') {
      setIngredient({
        ...ingredient,
        bun: {...data, key: uuidv4()},
      });
    } else  {
      setIngredient({
        ...ingredient,
        fillings: [
          ...ingredient.fillings,
          {...data, key: uuidv4()},
        ]
      });
    }}
  
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