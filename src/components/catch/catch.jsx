import styles from './catch.module.css'
import img from '../../images/error.svg'
import PropTypes from "prop-types";

const Catch = ({error}) => {
  return (
    <section className={styles.error}>
      <h2 className={`${styles.h2} text text_type_digits-medium`}>{`${error} :(`}</h2>
      <img className={styles.img} src={img} alt="Ошибка загрузки"/>
    </section>
  );
};

Catch.propTypes = {
  error: PropTypes.string.isRequired,
};

export default Catch;