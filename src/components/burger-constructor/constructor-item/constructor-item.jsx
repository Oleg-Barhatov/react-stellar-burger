import { ConstructorElement, DragIcon  } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './constructor-item.module.css'
import { DataPropType } from '../../../utils/prop-types';
import { useDrag, useDrop } from 'react-dnd'
import {useRef} from 'react'
import { useDispatch } from 'react-redux';
import { DELETE_INGREDIENT } from '../../../services/ingredient/ingredientAction';

ConstructorItem.propTypes = {
  data: DataPropType.isRequired
}

function ConstructorItem ({data, id, index, moveCard}) {

  const dispatch = useDispatch()

  const deleteIngredient = () => {
    dispatch({
      type: DELETE_INGREDIENT,
      payload: data,
    })
  }

  const ref = useRef(null);

  const [, drop] = useDrop({

    accept: 'data',
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      }
    },

    hover(item, monitor) {
      if (!ref.current) {
        return
      }

      const dragIndex = item.index
      const hoverIndex = index

      if (dragIndex === hoverIndex) {
        return
      }

      const hoverBoundingRect = ref.current?.getBoundingClientRect()
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
      const clientOffset = monitor.getClientOffset()
      const hoverClientY = clientOffset.y - hoverBoundingRect.top

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return
      }

      moveCard(dragIndex, hoverIndex)
      item.index = hoverIndex
    },
  })

  const [, drag] = useDrag({
    type: 'data',
    item: () => {
      return { id, index }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  })

  drag(drop(ref))

  return (
    <li className={`${styles.li}`} ref={ref}>
      <DragIcon type="primary"/>
      <ConstructorElement
            text={data.name}
            price={data.price}
            thumbnail={data.image}
            handleClose={() => deleteIngredient()}
        />
    </li>
  )
}

export default ConstructorItem;