import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

//execution sequence
// when react app launches render() runs -->
// When App component mounts componentDidMount() runs -->
class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  // destructuring assignment of object type result
  //when js meets await, wait until promise object is settled. Afterwards js returns results from the code.
  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "http://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    //when it gets all json data, change state to false
    //when movie data stores in state, render() accordingly runs
    this.setState({ movies: movies, isLoading: false });
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state; //destructing assignment
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">"Loading ..."</span>{" "}
          </div>
        ) : (
          <div className="movies">
            {movies.map((movie) => {
              return (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                  genres={movie.genres}
                />
              );
            })}
          </div>
        )}
      </section>
    );
  }
}

export default App;

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     console.log("hello");
//   }

//   componentDidMount() {
//     console.log("I'm rendering");
//   }

//   componentDidUpdate() {
//     console.log("I'm just updated");
//   }

//   componentWillUnmount() {
//     console.log("Good bye, curel world");
//   }

//   state = {
//     count: 0,
//   };

//   add = () => {
//     this.setState((current) => ({
//       count: current.count + 1,
//     }));
//   };

//   minus = () => {
//     this.setState((current) => ({
//       count: current.count - 1,
//     }));
//   };

//   render() {
//     console.log("render");
//     return (
//       <div>
//         <h1> The number is: {this.state.count}</h1>
//         <button onClick={this.add}>Add</button>
//         <button onClick={this.minus}>Minus</button>
//       </div>
//     );
//   }
// }

// export default App;
//import PropTypes from "prop-types";

// function Food({ name, picture, rating }) {
//   //console.log(props);
//   return (
//     <div>
//       <h2>I love {name} </h2>
//       <h4>{rating}/5.0</h4>
//       <img src={picture} alt={name} height="200px" width="200px" />
//     </div>
//   );
// }

// const foodLike = [
//   {
//     id: 1,
//     name: "kimchi",
//     image:
//       "https://www.maangchi.com/wp-content/uploads/2014/06/whole-cabbage-kimchi.jpg",
//     rating: 4.9,
//   },
//   {
//     id: 2,
//     name: "samgiopsal",
//     image:
//       "https://img.kr.news.samsung.com/kr/wp-content/uploads/2017/03/%ED%91%B8%EB%93%9C%ED%8F%AC%EC%BB%A4%EC%8A%A44%ED%8E%B804.jpg",
//     rating: 5.0,
//   },
//   {
//     id: 3,
//     name: "bibimbap",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/1/1e/Dolsot_bibimbap%2C_Hangang%2C_Paris_001.jpg",
//     rating: 3.9,
//   },
// ];

// // function renderFood(dish) {
// //   return <Food name={dish.name} picture={dish.image} />;
// // }

// // const renderFood = (dish) => <Food name={dish.name} picture={dish.image} />;
// // const renderFood = (dish) => {
// //   return <Food name={dish.name} picture={dish.image} />;
// // };

// function App() {
//   return (
//     <div>
//       {foodLike.map((dish) => (
//         <Food
//           key={dish.id}
//           name={dish.name}
//           picture={dish.image}
//           rating={dish.rating}
//         />
//       ))}
//     </div>
//   );
// }

// Food.propTypes = {
//   name: PropTypes.string.isRequired,
//   picture: PropTypes.string.isRequired,
//   rating: PropTypes.number,
// };

// export default App;
