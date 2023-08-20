import { ConstructorElement} from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from "prop-types";

function Bun ({data, position}) {
  return (
    <div  className='pl-8'>
        <ConstructorElement
          type={position}
          isLocked={true}
          text={`${data.name} ${position === 'top' ? '(верх)' : '(низ)'}`}
          price={data.price}
          thumbnail={data.image}
        />
      </div>
  )
}

Bun.propTypes = {
  data: PropTypes.object.isRequired,
  position: PropTypes.string.isRequired,
}

export default Bun;