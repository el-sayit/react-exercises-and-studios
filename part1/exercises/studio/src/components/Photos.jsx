import styles from '/src/components/Description.modules.css'
const RecipePhoto = () => {
    let url ='https://www.kingarthurbaking.com/sites/default/files/styles/featured_image/public/2021-09/easy-cheesecake-alt.jpg?itok=3XWK_Qf5';
    return (
        <img src={url} alt="recipe photo" className={styles.imageUpdates} />
    )
}
export default RecipePhoto;