import {useState}  from 'react'
import styles from './burger-ingredients.module.css'
import {Tab}  from '@ya.praktikum/react-developer-burger-ui-components';
import IngredientItem from './ingredient-item/ingredient-item';
import { TabPropType } from '../../utils/prop-types';
import { useSelector } from 'react-redux';
import { getData } from '../../utils/selectors';


function BurgerIngredients ({ tapList}) {
  const data = useSelector(getData)
  const [current, setCurrent] = useState(tapList.bun)

  const bun = data.filter(item => item.type === Object.keys(tapList)[0])
  const sauce = data.filter(item => item.type === Object.keys(tapList)[1])
  const main = data.filter(item => item.type === Object.keys(tapList)[2] )
  
  const scrollTab = item => {
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
                    onClick = {() => setCurrent(tapList[item], scrollTab(item))}>
                  {tapList[item]}
                </Tab>
              </li>
            );
          })
        }
      </ul>

      <div className={`${styles.field} custom-scroll`}>
        <h2 className={'text text_type_main-medium pb-6'} id={Object.keys(tapList)[0]}>{tapList.bun}</h2>
        <ul className={`${styles.ul} pb-10`}>
        {
          bun.map(data =>{ return (<IngredientItem data={data} key={data._id} />)})
        }
        </ul>
        <h2 className={'text text_type_main-medium pb-6'} id={Object.keys(tapList)[1]}>{tapList.sauce}</h2>
        <ul className={`${styles.ul} pb-10`}>
        {
          sauce.map(data =>{ return (<IngredientItem data={data} key={data._id}/>)})
        }
        </ul>
        <h2 className={'text text_type_main-medium pb-6'} id={Object.keys(tapList)[2]}>{tapList.main}</h2>
        <ul className={`${styles.ul}`}>
        {
          main.map(data =>{return (<IngredientItem data={data} key={data._id}/>)})
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

