import React, {useEffect, useState} from 'react';
import {v4 as uuidv4} from "uuid";
import Recipe from "./Recipe";
import './App.css';

function App() {

  const APP_ID="81eb18f8";
  const APP_KEY="ed1e488ec2179a95964393fea0879a48";

  const exampleReq=`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const [recipes,setRecipes]=useState([]);


  useEffect(()=>{
    getRecipes();
    
  },[])

  const getRecipes = async()=>{

    const res=await fetch(exampleReq);
    const data=await res.json();

    setRecipes(data.hits);
    console.log(data.hits);
    
  }



  return (
    <div className="App">
      
      <form className="search-form">
        <input type="text" className="search-bar"/>
        <button type="submit" className="search-btn">Search ...</button>
      </form>
     {recipes.map(rec=>(
       <Recipe  
       key={uuidv4()}
       title={rec.recipe.label} 
       calories={rec.recipe.calories}
       image={rec.recipe.image}
       />
     ))} 
    </div>
  );
}

export default App;
