import styles from '/src/components/Ingredients.module.css'

const RecipeIngredients = () =>{
    let ingredientList = ['6 tablespoons (85g) butter','2/3 cup (133g) granulated sugar',
'two 8-ounce packages (452g) cream cheese','2 large eggs','1/8 teaspoon table salt']
return (
    <div>
        <h3>Recipe ingredientList</h3>
        <ul className={styles.ingredientList}>
        <li>{ingredientList[0]}</li>
        <li>{ingredientList[1]}</li>
        <li>{ingredientList[2]}</li>
        <li>{ingredientList[3]}</li>
        <li>{ingredientList[4]}</li>
        </ul>
    </div>
)
}
export default RecipeIngredients