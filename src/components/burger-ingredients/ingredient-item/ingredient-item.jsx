import styles from './ingredient-item.module.css';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { DataPropType } from '../../../utils/prop-types';
import Modal from '../../modal/modal';
import IngredientDetails from '../../ingredient-details/ingredient-details';
import {useState} from 'react'

function IngredientItem ({data}) {
  const [visible, setVisible] = useState(false);
  
  return (
    <>
    
      <li className={`${styles.li}`} onClick={() => setVisible(!visible)}>
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