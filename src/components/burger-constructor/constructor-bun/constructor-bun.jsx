import { ConstructorElement} from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from "prop-types";
import { DataPropType } from '../../../utils/prop-types';

function Bun ({data, position}) {
  return (
    <div  className='pl-8'>
        <ConstructorElement
          type={position}
          isLocked={true}
          text={`${data[0].name} ${position === 'top' ? '(верх)' : '(низ)'}`}
          price={data[0].price}
          thumbnail={data[0].image}
        />
      </div>
  )
}

Bun.propTypes = {
  data: PropTypes.arrayOf(DataPropType).isRequired,
  position: PropTypes.string.isRequired,
}

export default Bun;