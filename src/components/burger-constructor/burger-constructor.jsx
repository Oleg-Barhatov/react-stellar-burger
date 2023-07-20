import constructorStyles from './burger-constructor.module.css'
import { ConstructorElement, CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import ConstructorItem from './constructor-item/constructor-item';
import { DataPropType } from '../../utils/prop-types';
import PropTypes from "prop-types";

BurgerConstructor.propTypes = {
  data: PropTypes.arrayOf(DataPropType).isRequired
}

function BurgerConstructor ({data}) {
  return (
    
    <section className={`${constructorStyles.section} pt-25`}>
      <div  className='pl-8'>
        <ConstructorElement
          type="top"
          isLocked={true}
          text="Краторная булка N-200i (верх)"
          price={200}
          thumbnail={data.img}
        />
      </div>
      <ul className={`${constructorStyles.ul} custom-scroll`}>
        {
          data.filter(item => item.type === "filling" || item.type ===  "sauce").map((data, index) => {
            return (<ConstructorItem data={data} key={index}/>)
          })
        }
      </ul>
      <div  className='pl-8'>
        <ConstructorElement
          type="bottom"
          isLocked={true}
          text="Краторная булка N-200i (верх)"
          price={200}
          thumbnail={data.img}
        />
      </div>

      <div className={`${constructorStyles.total} mt-6 mr-4`}>
        <div className={`${constructorStyles.container}`}>
          <p className='text text_type_digits-medium'>610</p>
          <CurrencyIcon type="primary"/>
        </div>
        <Button htmlType="button" type="primary" size="large">
          Оформить заказ
        </Button>
      </div>

    </section>
  )

}

export default BurgerConstructor;






