import React from "react";
import style from "./recipe.module.css";





function Recipe({title,calories,image,ingred}){
   return(
       <div className={style.recipe}> 
           <h1>{title}</h1>
           <h2>Calories: {Math.round(calories)} cal</h2>
           <ul>
               {ingred.map(ing =>(
                   <li>{ing.text}</li>
               ))}
           </ul>
           <img className={style.image} src={image} alt="" />
       </div>
   )
}


export default Recipe;