import React from "react";
import "./movie-card.scss";
import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";


export const MovieCard = ({ movie, user, token, setUser}) => {
  
  // const favoriteMovies = movies.filter(m => user.FavoriteMovies.includes(m._id));

  const isFavorite = user.FavoriteMovies.filter((m) => m === movie._id).length > 0;
    console.log("this is the user", user, isFavorite);
  


  // Adding Movie to User Favorites List

  const addToFavorites = () => { 


  fetch(`https://bre-wonder-cinema-app-8704977a1a65.herokuapp.com/users/${user.Username}/movies/${movie._id}`,
    
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json", Authorization: `Bearer ${token}`
    }
  })
   .then((response) => {
    if(response.ok) {
      return response.json();
    } 
  }) .then((user) => {
      if (user) {
      localStorage.setItem("user", JSON.stringify(user));
      setUser(user);
      alert("Movie Added");
    } else {
      alert("Movie NOT successfully added, please try again");
    }
  });
}

    // Removing Movie from User Favorites List

    const removeFromFavorites = () => { 
    

      fetch(`https://bre-wonder-cinema-app-8704977a1a65.herokuapp.com/users/${user.Username}/movies/${movie._id}`,
        
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json", Authorization: `Bearer ${token}`
        }
      }).then((response) => {
        if(response.ok) {
          return response.json();
        } 
      }) .then((user) => {
          if (user) {
          localStorage.setItem("user", JSON.stringify(user));
          setUser(user)
          alert("Movie Removed from List");
        } else {
          alert("Movie NOT successfully removed");
        }
      });
    }


  return (
    <Card className="h-100" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={movie.ImagePath} />
      <Card.Body>
        <Card.Title>{movie.Title}</Card.Title>
        
        <Link to={`/movies/${encodeURIComponent(movie._id)}`}>
          <Button className="openButton">Open</Button>
        </Link>
        {!isFavorite ? 

        <Button 
        onClick={addToFavorites}
        className="addButton"
        varient="primary" type="button"
        title="Add Movie to Favorites List"> + </Button> : 
        <Button 
        onClick={removeFromFavorites}
        className="removeButton"
        varient="primary" type="button"
        title="Remove Movie from Favorites List"> - </Button> }
      </Card.Body>
    </Card> 
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired, 
    ImagePath: PropTypes.string.isRequired,
    Director: PropTypes.string.isRequired,
    Genre: PropTypes.string.isRequired
  }).isRequired
};