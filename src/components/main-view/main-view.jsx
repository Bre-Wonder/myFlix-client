import { useEffect, useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view";
import { SignUpView } from "../signup-view/signup-view";
import Row from "react-bootstrap/Row";

export const MainView = () => {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const storedToken = localStorage.getItem("token");
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [movies, setMovies] = useState ([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    if (!token) {
      return;
    }

    fetch("https://bre-wonder-cinema-app-8704977a1a65.herokuapp.com/movies", 
      {headers: { Authorization: `Bearer ${token}`},
    })
      .then((response) => response.json())
      .then((movies) => {
        setMovies(movies); 
      });
    }, [token]);
    
    return (
      <Row>
        {!user ? (
          <>
            <LoginView
              onLoggedIn={(user, token) => {
                setUser(user);
                setToken(token);
              }}
              />
              or
            <SignUpView />
          </>
        ) : selectedMovie ? (
          <MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} />
        ) : movies.length === 0 ? (
          <>
            <button
              onClick={() => {
                setUser(null);
                setToken(null);
                localStorage.clear();
              }}
            >
              Logout
            </button>
            <div>This List is Empty!</div>
          </>
        ) : (
          <>
            <div>
            {movies.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                onMovieClick={(newSelectedMovie) => {
                  setSelectedMovie(newSelectedMovie);
                }}
              />
            ))}
            </div>
            <div>
              <button
                onClick={() => {
                  setUser(null);
                  setToken(null);
                  localStorage.clear();
                }}
                >
                Logout
              </button>
            </div>
          </>
        )};  
      </Row>
    );  
};