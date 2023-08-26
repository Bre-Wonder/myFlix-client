import { useParams } from "react-router";
import { Card, ListGroup } from "react-bootstrap";
import { MovieCard } from "../movie-card/movie-card";


export const ProfileView = ({user}) => {
  const { userId } = useParams();
  console.log(user);

  const user = users.find((b) => b.id === userId);
  return (
    <Card>
      <Card.Body>
        <Card.Title>User Information</Card.Title>
        <div>
          <Card.Text>Username: </Card.Text>
          <Card.Text>{user.Username}</Card.Text>
        </div>
        <div>
          <Card.Text>Password: </Card.Text>
          <Card.Text>{user.Password}</Card.Text>
        </div>
        <div>
          <Card.Text>Email: </Card.Text>
          <Card.Text>{user.Email}</Card.Text>
        </div>
        <div>
          <Card.Text>Birthdate: </Card.Text>
          <Card.Text tyep="date">{user.Birthday}</Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
}

let favoriteMovies = movies.filter(m =>
  user.FavoriteMovies.includs(m._id)
  );

// Return User Information 
// Update User Information 
// Deregister a user 
// Add movie to favorite list 
// Delete mnove from favorite list 
// Add button to movie card to add to list
// Apply Bootstrap