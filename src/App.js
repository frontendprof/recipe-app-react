import React, {useEffect, useState} from 'react';
import {v4 as uuidv4} from "uuid";
import Recipe from "./Recipe";
import './App.css';

function App() {

  const APP_ID="81eb18f8";
  const APP_KEY="ed1e488ec2179a95964393fea0879a48";

 

  const [recipes,setRecipes]=useState([]);
  const [search,setSearch]=useState('');
  const [query,setQuery]=useState('');


  useEffect(()=>{
    getRecipes();
    
  },[query])

  const getRecipes = async()=>{

    const res=await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data=await res.json();

    setRecipes(data.hits);
    console.log(data.hits);
    
  }


  const updateSearch = e =>{
    setSearch(e.target.value);
  }


  const getSearch = e =>{
    e.preventDefault();
    setQuery(search);
    setSearch("");
  }





  return (
    <div className="App">
      
      <form onSubmit={getSearch} className="search-form">
        <input type="text" className="search-bar" value={search} onChange={updateSearch}/>
        <button type="submit" className="search-btn">Search ...</button>
      </form>

      <div className="recipes">

        {recipes.map(rec=>(
        <Recipe  
        key={uuidv4()}
        title={rec.recipe.label} 
        calories={rec.recipe.calories}
        image={rec.recipe.image}
        ingred={rec.recipe.ingredients}
        />
       
        ))}

      </div>
    
     
    
    </div>
  );
}

export default App;
