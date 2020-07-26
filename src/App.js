import React from "react";
import PropTypes from "prop-types";

function Food({ name, picture, rating }) {
  //console.log(props);
  return (
    <div>
      <h2>I love {name} </h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} height="200px" width="200px" />
    </div>
  );
}

const foodLike = [
  {
    id: 1,
    name: "kimchi",
    image:
      "https://www.maangchi.com/wp-content/uploads/2014/06/whole-cabbage-kimchi.jpg",
    rating: 4.9,
  },
  {
    id: 2,
    name: "samgiopsal",
    image:
      "https://img.kr.news.samsung.com/kr/wp-content/uploads/2017/03/%ED%91%B8%EB%93%9C%ED%8F%AC%EC%BB%A4%EC%8A%A44%ED%8E%B804.jpg",
    rating: 5.0,
  },
  {
    id: 3,
    name: "bibimbap",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/1/1e/Dolsot_bibimbap%2C_Hangang%2C_Paris_001.jpg",
    rating: 3.9,
  },
];

// function renderFood(dish) {
//   return <Food name={dish.name} picture={dish.image} />;
// }

// const renderFood = (dish) => <Food name={dish.name} picture={dish.image} />;
// const renderFood = (dish) => {
//   return <Food name={dish.name} picture={dish.image} />;
// };

function App() {
  return (
    <div>
      {foodLike.map((dish) => (
        <Food
          key={dish.id}
          name={dish.name}
          picture={dish.image}
          rating={dish.rating}
        />
      ))}
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number,
};

export default App;
