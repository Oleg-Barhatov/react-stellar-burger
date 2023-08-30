import styles from './burger-constructor.module.css'
import { useMemo}  from 'react'
import { CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import ConstructorItem from './constructor-item/constructor-item';
import Bun from './constructor-bun/constructor-bun';
import { getNumOrder } from '../../utils/api';
import { useDispatch, useSelector } from 'react-redux';
import { getIngredient, getPrice } from '../../utils/selectors';
import { PRICE_SUM_BUN, PRICE_SUM_FILLING } from '../../services/totalPrice/totalPriceAction';


function BurgerConstructor () {

  const ingredient = useSelector(getIngredient)
  const totalPrice = useSelector(getPrice)

  const bun = ingredient.bun
  const fillings = ingredient.fillings

  const dispatch = useDispatch()
 
  useMemo(() => {
     bun
      ? dispatch({ type: PRICE_SUM_BUN, payload: bun.price })
      : dispatch({ type: PRICE_SUM_FILLING, payload: fillings.reduce((acc, filling) => acc + filling.price, 0) })
  }, [ingredient])

 
  // const activeButton = () => {
  //   if (ingredient.bun !== null && ingredient.fillings.length !== 0) {
  //     return setStateButton(true)
  //   }
  // }

  // useEffect(() => {
  //   // dispatchTotal(ingredient)
  //   activeButton()
  // }, [ingredient])

  // const getOrder = () => {
  //   const filingsId = ingredient.fillings.map(filling => filling._id)
  //   const ingredientId = [ingredient.bun._id, filingsId, ingredient.bun._id].flat()
  //   ingredient.bun !== null &&  getNumOrder(ingredientId)
  //     .then(data => setStateOrder(data.order.number))
  //     .catch(err => console.log(err))
  //     .finally(() => setStateButton(false), setIngredient({ bun: null, fillings: [] }), setVisible(!visible) )
  // }

  return (

    <section className={`${styles.section} pt-25`}>

      {
        ingredient.bun 
          ? (<Bun position='top' data={ingredient.bun}/>) 
          : (
              <div className={styles.bun}>
                <p className='text_type_main-default text_color_inactive'>Тут должна быть ваша булка</p>
              </div> 
            ) 
      }

      <ul className={`${styles.ul} custom-scroll`}>
        { 
          ingredient.fillings.length > 0 
            ? (ingredient.fillings.map(data => <ConstructorItem data={data} key={data.key}/>)) 
            : (
                <div className={styles.fillings}>
                  <p className='text_type_main-default text_color_inactive'>Перенесите ингредиенты</p>
                </div> 
              )
        }
      </ul>

      {
        ingredient.bun 
          ? (<Bun position='top' data={ingredient.bun}/>) 
          : (
              <div className={styles.bun}>
                <p className='text_type_main-default text_color_inactive'>Тут должна быть ваша булка</p>
              </div> 
            ) 
      }

      <div className={`${styles.total} mt-6 mr-4`}>
        <div className={`${styles.container}`}>
          <p className='text text_type_digits-medium'>{totalPrice}</p>
          <CurrencyIcon type="primary"/>
        </div>
        <Button htmlType="button" type="primary" size="large" disabled={true} onClick={1}>
          Оформить заказ
        </Button>
      </div>

    </section>
  )

}

export default BurgerConstructor;






