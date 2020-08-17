import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import Movie from "./Movie";
class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies,json?sort_by=rating"
    ); //data안에있는 data 의 movies
    this.setState({ movies, isLoading: false }); //movies를 setstate해주면 we are ready로 바꿈
  };
  componentDidMount() {
    this.getMovies();
  }

  render() {
    //react는 자동적으로 class 컴포넌트의 랜더 meothod를 자동적으로 실행한다.
    const { isLoading, movies } = this.state;
    return (
      <div>
        {isLoading
          ? "Loading..."
          : movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
              />
            ))}
      </div>
    );
  }
}

export default App;
