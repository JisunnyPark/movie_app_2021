import React from 'react';
import propTypes from 'prop-types';

function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

const foodLike = [
  {
    id: 1,
    name: 'Kimchi',
    image: 'https://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg',
    rating: 5,
  },
  {
    id: 2,
    name: 'Malatang',
    image: 'https://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg',
    rating: 4.9,
  },
  {
    id: 3,
    name: 'Korean Fried Chicken',
    image: 'https://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg',
    rating: 4.8,
  }
];

function App() {
  return (
    <div> 
      {foodLike.map(dish => (
        <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
        ))} 
    </div>
  );
}

Food.propTypes = {
  name: propTypes.string.isRequired,
  picture: propTypes.string.isRequired,
  rating: propTypes.number,
};

export default App;
