import classes from './ChoresList.module.css';
export default function ChoresList () {
   return(
      <div>
         <div className={classes.choresBox}>
         <p className={classes.choresHeading}>Chore list</p>;
         <ol >
            <li className={classes.choresText}>Play soccer</li>
            <li className={classes.choresText}>Learn coding</li>
            <li className={classes.choresText}>Read a book</li>
         </ol>
         </div>
      </div>
   )
}