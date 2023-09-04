import {useState, useMemo, useEffect}  from 'react'
import styles from './burger-ingredients.module.css'
import {Tab}  from '@ya.praktikum/react-developer-burger-ui-components';
import IngredientItem from './ingredient-item/ingredient-item';
import { TabPropType } from '../../utils/prop-types';
import { useSelector } from 'react-redux';
import { getData } from '../../utils/selectors';
import { useInView } from 'react-intersection-observer'


function BurgerIngredients ({ tapList}) {

  const data = useSelector(getData)

  const [current, setCurrent] = useState(tapList.bun)

  const [bunRef, bunInView] = useInView({threshold: 0});
  const [sauceRef, sauceInView] = useInView({threshold: 0});
  const [mainRef, meinInView] = useInView({threshold: 0});

  const bun = useMemo ( () => data.filter(item => item.type === 'bun' ), [data])
  const sauce = useMemo( () => data.filter(item => item.type === 'sauce') , [data])
  const main = useMemo( () => data.filter(item => item.type === 'main' ) , [data])

  useEffect(() => {
    if (bunInView) {
      setCurrent(tapList.bun);
    }
    else if (sauceInView) {
      setCurrent(tapList.sauce);
    }
    else if (meinInView) {
      setCurrent(tapList.main);
    }
  }, [bunInView, sauceInView, meinInView, tapList]);

  const scrollTab = item => {
    setCurrent(tapList[item])
    document.getElementById(item).scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <section className={`${styles.burgerIngredients}`}>

      <h1 className="text text_type_main-large pt-10">Соберите бургер</h1>
      <ul className={`${styles.tab} pt-5 pb-10`}>
        {
          Object.keys(tapList).map((item, index) => {
            return (
              <li key = {index}> 
                <Tab 
                    value = {tapList[item]}
                    active = {current === tapList[item]}
                    onClick = {() => scrollTab(item)}>
                  {tapList[item]}
                </Tab>
              </li>
            );
          })
        }
      </ul>

      <div className={`${styles.field} custom-scroll`}>
        <h2 className={'text text_type_main-medium pb-6'} ref={bunRef} id={Object.keys(tapList)[0]}>{tapList.bun}</h2>
        <ul className={`${styles.ul} pb-10`}>
        {
          bun.map(data => <IngredientItem data={data} key={data._id}/> )
        }
        </ul>
        <h2 className={'text text_type_main-medium pb-6'} ref={sauceRef} id={Object.keys(tapList)[1]}>{tapList.sauce}</h2>
        <ul className={`${styles.ul} pb-10`}>
        {
          sauce.map(data => <IngredientItem data={data} key={data._id}/> )
        }
        </ul>
        <h2 className={'text text_type_main-medium pb-6'} ref={mainRef} id={Object.keys(tapList)[2]}>{tapList.main}</h2>
        <ul className={`${styles.ul}`}>
        {
          main.map(data => <IngredientItem data={data} key={data._id}/> )
        }
        </ul>
          
      </div>
      
    </section>  
  )

}

BurgerIngredients.propTypes = {
  tapList: TabPropType.isRequired,
}

export default BurgerIngredients;

