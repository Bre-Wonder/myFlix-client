import React from "react";
import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./movie-card.scss";

export const MovieCard = ({ movie, user }) => {
  return (
    <Card className="h-100" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={movie.ImagePath} />
      <Card.Body>
        <Card.Title>{movie.Title}</Card.Title>
        
        <Link to={`/movies/${encodeURIComponent(movie._id)}`}>
          <Button className="openButton">Open</Button>
        </Link>
        <Button 
        // onClick={movieFavoriteAdded}
        className="addButton"
        varient="primary" type="submit"
        title="Add Movie to Favorites List"> + </Button>
        <Button 
        // onClick={movieFavoriteRemoved}
        className="removeButton"
        varient="primary" type="submit"
        title="Remove Movie from Favorites List"> - </Button>
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