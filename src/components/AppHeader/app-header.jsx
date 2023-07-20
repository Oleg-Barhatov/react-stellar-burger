import headerStyles from './app-header.module.css';
import { Button, BurgerIcon, ListIcon, Logo, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';

function Header () {
  return (
    <header className={headerStyles.header}>
      <nav className={`${headerStyles.nav} pt-4 pb-4`}>
        <ul className={headerStyles.ul}>
          <li>
          <Button htmlType="button" size="medium" type="secondary" extraClass={`${headerStyles.button} pr-5 pl-5 text_color_primary`}>
              <BurgerIcon type="primary"/>
              Конструктор
            </Button>
          </li>
          <li>
            <Button htmlType="button" size="medium" type="secondary" extraClass={`${headerStyles.button} pr-5 pl-5 text_color_inactive`}>
                <ListIcon type="secondary"/>
                Лента заказов
              </Button>
          </li>
        </ul>
          <div className={headerStyles.logo}>
            <Logo />
          </div>
          <Button htmlType="button" size="medium" type="secondary" extraClass={`${headerStyles.lk} ${headerStyles.button} pr-5 pl-5 text_color_inactive`}>
            <ProfileIcon type="secondary"/>
            Личный кабинет
          </Button>
      </nav>
    </header>
  )
};

export default Header;