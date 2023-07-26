import {useState}  from 'react'
import ingredientsStyle from './burger-ingredients.module.css'
import {Tab}  from '@ya.praktikum/react-developer-burger-ui-components';
import IngredientItem from './ingredient-item/ingredient-item';
import { DataPropType, TabPropType } from '../../utils/prop-types';
import PropTypes from "prop-types";

BurgerIngredients.propTypes = {
  data: PropTypes.arrayOf(DataPropType).isRequired,
  tapList: TabPropType.isRequired,
}

function BurgerIngredients ({data, tapList}) {
  const [current, setCurrent] = useState(tapList.bun)
  return (
    <section className={`${ingredientsStyle.burgerIngredients}`}>

      <h1 className="text text_type_main-large pt-10">Соберите бургер</h1>
      <ul className={`${ingredientsStyle.tab} pt-5 pb-10`}>
        {
          Object.keys(tapList).map((item, index) => {
            return (
              <li key = {index}> 
                <Tab 
                    value = {tapList[item]}
                    active = {current === tapList[item]}
                    onClick = {setCurrent}>
                  {tapList[item]}
                </Tab>
              </li>
            );
          })
        }
      </ul>

      <div className={`${ingredientsStyle.field} custom-scroll`}>
        <h2 className={'text text_type_main-medium pb-6'}>{tapList.bun}</h2>
        <ul className={`${ingredientsStyle.ul} pb-10`}>
        {
          data.filter(item => item.type === Object.keys(tapList)[0] ).map(data =>{
            return (<IngredientItem data={data} key={data._id} />)
          })
        }
        </ul>
        <h2 className={'text text_type_main-medium pb-6'}>{tapList.sauce}</h2>
        <ul className={`${ingredientsStyle.ul} pb-10`}>
        {
          data.filter(item => item.type === Object.keys(tapList)[1] ).map(data =>{
            return (<IngredientItem data={data} key={data._id}/>)
          })
        }
        </ul>
        <h2 className={'text text_type_main-medium pb-6'}>{tapList.main}</h2>
        <ul className={`${ingredientsStyle.ul}`}>
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

export default BurgerIngredients;

