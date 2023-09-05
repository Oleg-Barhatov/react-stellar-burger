import styles from './burger-constructor.module.css'
import { useCallback, useMemo}  from 'react'
import { CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import ConstructorItem from './constructor-item/constructor-item';
import Bun from './constructor-bun/constructor-bun';
import { useDispatch, useSelector } from 'react-redux';
import { getIngredient} from '../../utils/selectors';
import { loadOrderDetails } from '../../services/getOrderDetails/getOrderAction';
import { useDrop } from "react-dnd";
import { ADD_BUN, ADD_FILLING, MOVE_INGREDIENT } from '../../services/ingredient/ingredientAction';
import { v4 as uuidv4 } from 'uuid';

function BurgerConstructor () {

  const dispatch = useDispatch()

  const ingredient = useSelector(getIngredient)

  const bun = ingredient.bun
  const fillings = ingredient.fillings

  const totalPrice = useMemo(() => {
    const bunPrice = bun ? bun.price * 2 : 0
    const fillingPrice = fillings.reduce((acc, filling) => acc + filling.price, 0)

    return  fillingPrice + bunPrice 
     
  }, [bun, fillings])

  const activeButton = () =>  bun === null  ? true : false 

  const getOrder = () => {
    const filingsId = fillings.map(filling => filling._id);
    const ingredientId = [bun._id, filingsId, bun._id].flat();

    dispatch(loadOrderDetails(ingredientId));
  }

  const [, dropTarget] = useDrop({
    accept: ['bun', 'sauce', 'main'],
    drop: (data) => {
      if (data.type === 'bun') {
      dispatch({
        type: ADD_BUN,
        payload: {...data, key: uuidv4()},
      });
    } else {
      dispatch({
        type: ADD_FILLING, 
        payload: {...data, key: uuidv4()},
      })
    }},
    collect: monitor => ({
      canDrop: monitor.canDrop(),
    })
  });

  const moveCard = useCallback ((dragIndex, hoverIndex) => {
    dispatch({
      type: MOVE_INGREDIENT,
      payload: {
        dragIndex: dragIndex,
        hoverIndex: hoverIndex,
      } 
    });
  }, [dispatch]);

  const renderCard = useCallback((data, index) => {
    return (
      <ConstructorItem
        data={data}
        key={data.key}
        index={index}
        id={data._id}
        moveCard={moveCard}
      />
    )
  }, [moveCard])


  return (

    <section className={`${styles.section} pt-25`} ref={dropTarget}>

      {
        ingredient.bun 
          ? (<Bun position='top' data={ingredient.bun}/>) 
          : (
              <div className={styles.bun} >
                <p className='text_type_main-default text_color_inactive'>Тут должна быть ваша булка</p>
              </div> 
            ) 
      }

      <ul className={`${styles.ul} custom-scroll`}>
        { 
          ingredient.fillings.length > 0 
            ? (ingredient.fillings.map((data, index) => renderCard(data, index))) 
            : (
                <div className={styles.fillings}>
                  <p className='text_type_main-default text_color_inactive'>Перенесите ингредиенты</p>
                </div> 
              )
        }
      </ul>

      {
        ingredient.bun 
          ? (<Bun position='bottom' data={ingredient.bun}/>) 
          : (
              <div className={styles.bun} style={{ borderRadius: '40px 40px 88px 88px'}}>
                <p className='text_type_main-default text_color_inactive'>Тут должна быть ваша булка</p>
              </div> 
            ) 
      }

      <div className={`${styles.total} mt-6 mr-4`}>
        <div className={`${styles.container}`}>
          <p className='text text_type_digits-medium'>{totalPrice}</p>
          <CurrencyIcon type="primary"/>
        </div>
        <Button htmlType="button" type="primary" size="large" disabled={activeButton()} onClick={getOrder}>
          Оформить заказ
        </Button>
      </div>

    </section>
  )

}

export default BurgerConstructor;






