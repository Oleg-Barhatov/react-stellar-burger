import styles from "./app.module.css";
import { data, ingredientsList } from "../../utils/data";
import Header from "../AppHeader/app-header";
import BurgerIngredients from '../burger-ingredients/burger-ingredients'
import BurgerConstructor from "../burger-constructor/burger-constructor";


function App() {
  return (
    <div className={styles.app}>
      <Header/>
      <main className={styles.main}>
        <BurgerIngredients data={data} ingredientsList={ingredientsList}/>
        <BurgerConstructor data={data} ingredientsList={ingredientsList}/>
      </main>
    </div>
  );
}

export default App;
