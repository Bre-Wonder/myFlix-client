import { useEffect, useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view";
import { SignUpView } from "../signup-view/signup-view";
import Row from "react-bootstrap/Row";
import { Col } from "react-bootstrap";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { NavigationBar } from "../navigation-bar/navigation-bar";
import { ProfileView } from "../profile-view/profile-view";

export const MainView = () => {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const storedToken = localStorage.getItem("token");
  const [user, setUser] = useState(storedUser);
  const [token, setToken] = useState(storedToken);
  const [movies, setMovies] = useState ([]);

  useEffect(() => {
    if (!storedToken) {
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
      <BrowserRouter>
        <NavigationBar 
          user={user}
          onLoggedOut={() => {
            setUser(null);
            setToken(null);
            localStorage.clear()
          }}
        />
        <Row className="justify-constent-md-center">
          <Routes>
            <Route
              path="/signup"
              element={
                <>
                  {user ? (
                    <Navigate to="/"/>
                  ) : (
                    <Col md={6} xs={10} lg={4}>
                      <SignUpView
                        onSignedUp={(user) => {
                          setUser(null);
                          setToken(null);
                          localStorage.clear() 
                        }}
                      />
                    </Col>
                  )}             
                </>
              }
            />
            <Route
              path="/login"
              element={
                <>
                  {user ? (
                    <Navigate to="/"/>
                  ) : (
                    <Col md={6} xs={10} lg={4}>
                      <LoginView
                        onLoggedIn={(user, token) => {
                        setUser(user);
                        setToken(token);
                        }}
                      />
                    </Col>
                  )}             
                </>
              }
            />
            <Route
              path="/movies/:movieId"
              element={
                <>
                  {!user ? (
                    <Navigate to="/login" replace />
                  ) : movies.length === 0 ? (
                    <Col>This List is Empty!</Col>
                  ) : (
                    <Col md={8} style={{ border: "1px solid black" }}>
                      <MovieView movies={movies} />
                    </Col>
                  )}             
                </>
              }
            />
            <Route
              path="/profile"
              element={
                <>
                  {!user ? (
                    <Navigate to="/login" replace />
                  ) : (
                      <ProfileView 
                        onUserUpdate={(user) => {
                        setUser(user);
                        }}
                        onDeletedUser={(user) => {
                        localStorage.clear();
                        }}
                        user={user} token={token} setUser={setUser} 
                      />  
                  )}             
                </>
              }
            />
            <Route
              path="/"
              element={
                <>
                  {!user ? (
                    <Navigate to="/login" replace />
                  ) : movies.length === 0 ? (
                    <Col>This List is Empty!</Col>
                  ) : (
                    <>
                      {movies.map((movie) => (
                        <Col className="mb-4" key={movie._id} med={3}>
                          <MovieCard movie={movie} user={user} setUser={setUser} />
                        </Col>
                      ))}
                    </>
                  )}             
                </>
              }
            />
          </Routes>
        </Row>
      </BrowserRouter>
    );  
};