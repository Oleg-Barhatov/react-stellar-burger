import { ConstructorElement} from '@ya.praktikum/react-developer-burger-ui-components';

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

export default Bun;