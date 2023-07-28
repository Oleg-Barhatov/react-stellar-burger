import styles from './burger-constructor.module.css'
import { CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import ConstructorItem from './constructor-item/constructor-item';
import { DataPropType } from '../../utils/prop-types';
import PropTypes from "prop-types";
import Bun from './constructor-bun/constructor-bun';

BurgerConstructor.propTypes = {
  data: PropTypes.arrayOf(DataPropType).isRequired,
  setVisible: PropTypes.func.isRequired,
}

function BurgerConstructor ({data, setVisible}) {
  const bun = data.filter(item => item.type === 'bun')
  const structure = data.filter(item => item.type === "main" || item.type ===  "sauce")
  
  return (

    <section className={`${styles.section} pt-25`}>
      <Bun position='top' data={bun}/>
      <ul className={`${styles.ul} custom-scroll`}>
        {
          structure.map((data, index) => {
            return (<ConstructorItem data={data} key={index}/>)
          })
        }
      </ul>

      <Bun position='bottom' data={bun}/>

      <div className={`${styles.total} mt-6 mr-4`}>
        <div className={`${styles.container}`}>
          <p className='text text_type_digits-medium'>610</p>
          <CurrencyIcon type="primary"/>
        </div>
        <Button htmlType="button" type="primary" size="large" onClick={setVisible}>
          Оформить заказ
        </Button>
      </div>

    </section>
  )

}

export default BurgerConstructor;






