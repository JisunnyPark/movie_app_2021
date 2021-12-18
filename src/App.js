import React from 'react';

function Food({ name, picture }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <img src={picture} />
    </div>
  );
}

const foodLike = [
  {
    name: 'Kimchi',
    image: 'https://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg',
  },
  {
    name: 'Malatang',
    image: 'https://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg',
  },
  {
    name: 'Korean Fried Chicken',
    image: 'https://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg',
  }
];

function App() {
  return (
    <div> 
      {foodLike.map(dish => (
        <Food name={dish.name} picture={dish.image} />
        ))} 
    </div>
  );
}

export default App;
