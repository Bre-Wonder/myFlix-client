import React from "react";
import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./movie-card.scss";

export const MovieCard = ({ movie, onMovieFavoriteAdded }) => {
  // const [user ] = useState(storedUser);
  // const [ movie ] = useState([]);

  // const handleSubmit = (event) => {
  //   event.preventDefault();
 
  // // Adding Movie to User Favorites List

  // // const movieFavoriteAdded = () => { 
    

  // // fetch(`https://bre-wonder-cinema-app-8704977a1a65.herokuapp.com/users/${user.Username}/movies/${movie.Id}`,
    
  // // {
  // //   method: "POST",
  // //   body: JSON.stringify(data),
  // //   headers: {
  // //     "Content-Type": "application/json", Authorization: `Bearer ${token}`
  // //   }
  // // }).then((response) => response.json())
  // //   .then((user, movie) => {
  // //     if (user.Username) {
  // //     localStorage.setItem("user", JSON.stringify(user));
  // //     movies.filter(m =>
  // //     user.MovieFavoriteAdded.includs(m._id)
  // //       );
  // //     movieFavoriteAdded(movie.Id);
  // //     alert("Movie Added");
  // //   } else {
  // //     alert("Movie NOT successfully added, please try again");
  // //   }
  // // });

  // //   console.log('Movie Added to List');
  // // }}


  return (
    <Card className="h-100" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={movie.ImagePath} />
      <Card.Body>
        <Card.Title>{movie.Title}</Card.Title>
        
        <Link to={`/movies/${encodeURIComponent(movie._id)}`}>
          <Button className="openButton">Open</Button>
        </Link>
        <Button 
        onClick={() => onMovieFavoriteAdded(movie)}
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