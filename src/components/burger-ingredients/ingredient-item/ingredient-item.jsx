import styles from './ingredient-item.module.css';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { DataPropType } from '../../../utils/prop-types';
import { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { MODAL_OPEN, MODAL_ID } from '../../../services/modal/modalAction';
import { getIngredient } from '../../../utils/selectors';
import { useDrag } from 'react-dnd';

function IngredientItem ({data}) {

  const ingredient = useSelector(getIngredient)
  const dispatch = useDispatch()

  const onClick = () => {
      dispatch({type: MODAL_ID, payload: data._id})
      dispatch({type: MODAL_OPEN, payload: 'IngredientDetails'})
  }

  const [, dragRef] = useDrag({
    type: data.type,
    item:  data 
});

  const count = useMemo(() => {
    const bun = ingredient.bun ? ingredient.bun : 0;
    const fillings = ingredient.fillings ? ingredient.fillings : 0;

    if (bun  && fillings ) {

      const filingsId = fillings.map(filling => filling._id);
      const ingredientId = [bun._id, filingsId, bun._id].flat();

      return ingredientId.filter(id => id === data._id).length
    }

  },[ingredient, data._id])

  return (
    <>
      <li className={`${styles.li}`} onClick={onClick} ref={dragRef}>
        <Counter count={count} 
                 size="default" 
                 extraClass={`${styles.count} ${count && styles.visible} m-1`}
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
    </>
  )
}

IngredientItem.propTypes = {
  data: DataPropType.isRequired
}

export default IngredientItem;