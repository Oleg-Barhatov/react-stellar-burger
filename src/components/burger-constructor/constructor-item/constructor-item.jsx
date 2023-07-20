import { ConstructorElement, DragIcon  } from '@ya.praktikum/react-developer-burger-ui-components';
import ConstructorItemStyles from './constructor-item.module.css'
import { DataPropType } from '../../../utils/prop-types';


ConstructorItem.propTypes = {
  data: DataPropType.isRequired
}

function ConstructorItem ({data}) {
  return (
    <li className={`${ConstructorItemStyles.li}`}>
      <DragIcon type="primary"/>
      <ConstructorElement
            text={data.name}
            price={data.price}
            thumbnail={data.image}
        />
    </li>
  )
}

export default ConstructorItem;