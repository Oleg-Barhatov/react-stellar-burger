import ItemStyles from './ingredient-item.module.css';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { DataPropType } from '../../../utils/prop-types';
import PropTypes from "prop-types";

IngredientItem.propTypes = {
  data: DataPropType.isRequired
}

function IngredientItem ({data}) {
  return (
      <li className={`${ItemStyles.li}`}>
        <Counter className={`${ItemStyles.count}`} 
                 count={1} 
                 size="default" 
                 extraClass="m-1"
        />
        <img src={data.image} 
             alt={data.name} 
             className={`${ItemStyles.image}`}>
        </img>
        <div className={`${ItemStyles.container}`}>
          <p className='text text_type_digits-default '>{data.price}</p>
          <CurrencyIcon type="primary" />
        </div>
        <p className={`${ItemStyles.paragraph} text text_type_main-default`}>{data.name}</p>
      </li>
  )
}

export default IngredientItem;