import styles from '/src/components/Description.modules.css';

import React from 'react';

class RecipeDescription extends React.Component {
    render(){
        return (
            <div>
                <div>
                    <h1>Easy Cheesecake</h1>
                    <p>Never mind the sour cream, farmer's cheese, cream cheese, water bath, and worrying about a sunken center. The filling for this delicious, easy cheesecake recipe has just four simple ingredients, and the cake bakes in a mere 30 minutes. Now THAT'S easy! </p>
                
                </div>
                <RecipeAuthor/>
            </div>
        )

    }
};

const RecipeAuthor = () =>{
    let authorLink = 'https://www.kingarthurbaking.com/recipes/easy-cheesecake-recipe';
    let authorPhoto = 'https://www.kingarthurbaking.com/sites/default/files/styles/scaled_very_small_250w/public/2022-06/PJ%20Hamel.JPG?itok=citOW7k7';
    let authorName = 'PJ Hamel';
    return (
        <div className = {styles.recipeAuthorBlock}>
            <img src={authorPhoto} alt="photo of author with dogs" className={styles.imageUpdates} />
            <div>
                <h3>{authorName}</h3>
                <a href={authorLink}>Easy Cheesecake</a>
            </div>
        </div>
    );
}
export default RecipeDescription;