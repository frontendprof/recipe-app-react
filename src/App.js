import React, {useEffect, useState} from 'react';
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

  }



  return (
    <div className="App">
      
      <form className="search-form">
        <input type="text" className="search-bar"/>
        <button type="submit" className="search-btn">Search ...</button>
      </form>
      
    </div>
  );
}

export default App;
