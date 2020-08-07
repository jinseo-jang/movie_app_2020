import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";

//execution sequence
// when react app launches render() runs -->
// When App component mounts componentDidMount() runs -->
class Home extends React.Component {
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
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    //when it gets all json data, change state to false
    //when movie data stores in state, render() accordingly runs
    //movies: movies can be merged to one like movies because key and values are the same
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

export default Home;
