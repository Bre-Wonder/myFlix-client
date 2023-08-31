import { useParams } from "react-router";
import { Card, Form } from "react-bootstrap";
import { MovieCard } from "../movie-card/movie-card";
import { useState } from "react";


export const ProfileView = ({user}) => {
  const { userId } = useParams();
  const [ username, updateUsername ] = useState("");
  const [ password, updatePassword ] = useState("");
  const [ email, updateEmail ] = useState("");
  const [ birthday, updateBirthday ] = useState("");
  console.log(user);

  return (
    <Card>
      <Card.Body>
        <Card.Title>Profile Information</Card.Title>
        <Form>
          <Form.Label>Username: </Form.Label>
          <Card.Text>{user.Username}</Card.Text>
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
        <Form>
          <Form.Label>Password: </Form.Label>
          <Card.Text>{user.Password}</Card.Text>
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
        <Form>
          <Form.Label>Email: </Form.Label>
          <Card.Text>{user.Email}</Card.Text> 
            <Form.Group controlId="formEmail">
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => updateEmail(e.target.value)}
                required
                />
            </Form.Group>
          </Form>
        <Form>
          <Card.Text>Birthdate: </Card.Text>
          <Card.Text type="date">{user.Birthday}</Card.Text>
          <Form.Group controlId="formBirthday">
            <Form.Control
              type="date"
              value={birthday}
              onChange={(e) => updateBirthday(e.target.value)}
              required
              />
          </Form.Group>
        </Form>
        <Button varient="primary" type="submit">Update</Button>
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