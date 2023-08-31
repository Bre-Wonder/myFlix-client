import { useParams } from "react-router";
import { Card, Form } from "react-bootstrap";
import { MovieCard } from "../movie-card/movie-card";
import { useState } from "react";


export const ProfileView = ({user}) => {
  const { userId } = useParams();
  const [ username, updateUsername ] = useState("");
  const [ password, updatePassword ] = useState("");
  console.log(user);

  return (
    <Card>
      <Card.Body>
        <Card.Title>Profile Information</Card.Title>
        <div>
          <Card.Text>Username: </Card.Text>
          <Card.Text>{user.Username}</Card.Text>
          <Form>
            <Form.Group controlId="formUsername">
              <Form.Control
                type="text"
                value={username}
                onChange={(e) => updateUsername(e.target.value)}
                required
                minLength="3"
              />
            </Form.Group>
          </Form>
        </div>
        <div>
          <Card.Text>Password: </Card.Text>
          <Card.Text>{user.Password}</Card.Text>
          <Form>
            <Form.Group controlId="formPassword">
              <Form.Control
                type="text"
                value={password}
                onChange={(e) => updatePassword(e.target.value)}
                required
                minLength="3"
              />
            </Form.Group>
          </Form>
        </div>
        <div>
          <Card.Text>Email: </Card.Text>
          <Card.Text>{user.Email}</Card.Text>
        </div>
        <div>
          <Card.Text>Birthdate: </Card.Text>
          <Card.Text type="date">{user.Birthday}</Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
}

// let favoriteMovies = movies.filter(m =>
//   user.FavoriteMovies.includs(m._id)
//   );

// Return User Information 
// Update User Information 
// Deregister a user 
// Add movie to favorite list 
// Delete movie from favorite list 
// Add button to movie card to add to list
// Apply Bootstrap