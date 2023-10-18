import styles from './order-details.module.css'
import img from '../../images/done.svg'
import { useSelector } from "react-redux";
import { getOrder } from '../../utils/selectors';
import Loader from '../loader/loader';

const OrderDetails = () => {
  
  const order = useSelector(getOrder);

  return (
    <section className={`${styles.section} pt-20 pb-30`} aria-label='Информация о заказе'>
      { order 
        ?  <p className={`${styles.number} text text_type_digits-large`}>{order}</p>
        : <Loader/>
      }
      <p className='text text_type_main-medium pt-8'>Номер заказа</p>
      <img className={`${styles.img} pt-15 pb-15`} src={img} alt="Статус заказа" />
      <p className='text text_type_main-default'>Ваш заказ начали готовить</p>
      <p className='text text_type_main-default text_color_inactive pt-2'>Дождитесь готовности на орбитальной станции</p>
    </section>
  );
};

export default OrderDetails;