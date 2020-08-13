import React from 'react';


const foodILike = [{
  id: 1,
  name: "kimchi",
  image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Q0zpG1gmmdITbyG0YXmzJAHaHa%26pid%3DApi%26h%3D160&f=1"
  },
  {
    id:2,
    name: "pork",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Q0zpG1gmmdITbyG0YXmzJAHaHa%26pid%3DApi%26h%3D160&f=1"
  },
  {
    id:3,
    name: "beef",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.aSt4ks6h6rGZwo5OdaB4KQHaEK%26pid%3DApi&f=1"
  }
 
]; 

function Food({name,picture}){
  return (
    <div> 
      <h2>i like {name}</h2>
      <img src ={picture} alt = {name}/>
    </div>
    );
  }


function App() {
  return (
    <div>
      
      {foodILike.map(dish => (    // dish는 다른 이름으로 정해져도 상관이 없다. 
        <Food key ={dish.id} name={dish.name} picture= {dish.image} />
      ))}
    </div>
  );
}

export default App;
