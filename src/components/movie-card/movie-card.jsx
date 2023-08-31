import React from "react";
import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export const MovieCard = ({ movie }) => {
  return (
    <Card className="h-100">
      <Card.Img variant="top" src={movie.ImagePath} />
      <Card.Body>
        <Card.Title>{movie.Title}</Card.Title>
        
        <Link to={`/movies/${encodeURIComponent(movie.id)}`}>
          <Button>Open</Button>
        </Link>
        <Link>
          <Button title="Add Movie to Favorites List"> + </Button>
        </Link>
      </Card.Body>
    </Card> 
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired, 
    image: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired
  }).isRequired
};