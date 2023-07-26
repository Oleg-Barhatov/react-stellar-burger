import {useState}  from 'react'
import styles from './burger-ingredients.module.css'
import {Tab}  from '@ya.praktikum/react-developer-burger-ui-components';
import IngredientItem from './ingredient-item/ingredient-item';
import { DataPropType, TabPropType } from '../../utils/prop-types';
import PropTypes from "prop-types";

function BurgerIngredients ({data, tapList}) {
  const [current, setCurrent] = useState(tapList.bun)

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
                    onClick = {() => setCurrent(tapList[item])}>
                  {tapList[item]}
                </Tab>
              </li>
            );
          })
        }
      </ul>

      <div className={`${styles.field} custom-scroll`}>
        <h2 className={'text text_type_main-medium pb-6'} >{tapList.bun}</h2>
        <ul className={`${styles.ul} pb-10`}>
        {
          data.filter(item => item.type === Object.keys(tapList)[0] ).map(data =>{
            return (<IngredientItem data={data} key={data._id} />)
          })
        }
        </ul>
        <h2 className={'text text_type_main-medium pb-6'}>{tapList.sauce}</h2>
        <ul className={`${styles.ul} pb-10`}>
        {
          data.filter(item => item.type === Object.keys(tapList)[1] ).map(data =>{
            return (<IngredientItem data={data} key={data._id}/>)
          })
        }
        </ul>
        <h2 className={'text text_type_main-medium pb-6'}>{tapList.main}</h2>
        <ul className={`${styles.ul}`}>
        {
          data.filter(item => item.type === Object.keys(tapList)[2] ).map(data =>{
            return (<IngredientItem data={data} key={data._id}/>)
          })
        }
        </ul>
          
      </div>
      
    </section>  
  )

}

BurgerIngredients.propTypes = {
  data: PropTypes.arrayOf(DataPropType).isRequired,
  tapList: TabPropType.isRequired,
}

export default BurgerIngredients;

