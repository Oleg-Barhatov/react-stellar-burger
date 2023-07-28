import styles from './app-header.module.css';
import { Button, BurgerIcon, ListIcon, Logo, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';

function Header () {
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} pt-4 pb-4`}>
        <ul className={styles.ul}>
          <li>
            <Button htmlType="button" size="medium" type="secondary" extraClass={`${styles.button} pr-5 pl-5 text_color_primary`}>
              <BurgerIcon type="primary"/>
              Конструктор
            </Button>
          </li>
          <li>
            <Button htmlType="button" size="medium" type="secondary" extraClass={`${styles.button} pr-5 pl-5 text_color_inactive`}>
                <ListIcon type="secondary"/>
                Лента заказов
            </Button>
          </li>
        </ul>
          <div className={styles.logo}>
            <Logo />
          </div>
          <Button htmlType="button" size="medium" type="secondary" extraClass={`${styles.lk} ${styles.button} pr-5 pl-5 text_color_inactive`}>
            <ProfileIcon type="secondary"/>
            Личный кабинет
          </Button>
      </nav>
    </header>
  )
};

export default Header;