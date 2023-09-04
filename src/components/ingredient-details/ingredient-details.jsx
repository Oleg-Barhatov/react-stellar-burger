import styles from './ingredient-details.module.css'
import { useSelector } from 'react-redux';
import { getData, getId} from '../../utils/selectors';

const IngredientDetails = () => {

  const data = useSelector(getData);
  const id = useSelector(getId)

  const  getDataModal = (data, id) => {
    return data.find(item => item._id === id)
  }

  const ingredient  = getDataModal(data, id)

  return (
    <section className={`${styles.section} pt-10 pb-15` } aria-label='Пищевая ценность'>
      
      <h2 className={`${styles.title} text text_type_main-large pl-10`}>Детали ингредиента</h2>
      <img className={styles.image} src={ingredient.image} alt={ingredient.name} />
      <p className={`${styles.name} text text_type_main-medium pt-4`}>{ingredient.name}</p>

      <ul className={`${styles.container} pt-8`}>

        <li className={styles.li}>
          <p className="text text_type_main-default text_color_inactive">Калории,ккал</p>
          <p className="text text_type_digits-default text_color_inactive">{ingredient.calories}</p>
        </li>

        <li className={styles.li}>
          <p className="text text_type_main-default text_color_inactive">Белки, г</p>
          <p className="text text_type_digits-default text_color_inactive">{ingredient.proteins}</p>
        </li>

        <li className={styles.li}>
          <p className="text text_type_main-default text_color_inactive">Жиры, г</p>
          <p className="text text_type_digits-default text_color_inactive">{ingredient.fat}</p>
        </li>

        <li className={styles.li}>
          <p className="text text_type_main-default text_color_inactive">Углеводы, г</p>
          <p className="text text_type_digits-default text_color_inactive">{ingredient.carbohydrates}</p>
        </li>

      </ul>

    </section>
  );
};

export default IngredientDetails;