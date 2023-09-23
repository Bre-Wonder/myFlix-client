import { useParams } from "react-router";
import { Card, Form, Button } from "react-bootstrap";
import { MovieCard } from "../movie-card/movie-card";
import { useState } from "react";


export const ProfileView = ({user, token, onUserUpdate, onDeletedUser}) => {
  const { userId } = useParams();
  const [ username, updateUsername ] = useState("");
  const [ password, updatePassword ] = useState("");
  const [ email, updateEmail ] = useState("");
  const [ birthday, updateBirthday ] = useState("");
  const [ movies ] = useState([]);

  // Update User Information

  const updateUser = () => {
    const data = {
      Username: username,
      Password: password,
      Email: email,
      Birthday: birthday
    };

  fetch(`https://bre-wonder-cinema-app-8704977a1a65.herokuapp.com/users/${user.Username}`,
    
  {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json", Authorization: `Bearer ${token}`
    }
  }).then((response) => response.json())
    .then((user) => {
      if (user.Username) {
      alert("Update Successful");
      localStorage.setItem("user", JSON.stringify(user));
      onUserUpdate(user);
    } else {
      alert("Update Failed");
    }
  });

    console.log('clicked');
  }

  // Deregister User/Delete User

  const deletedUser = () => {

  fetch(`https://bre-wonder-cinema-app-8704977a1a65.herokuapp.com/users/${user.Username}`,
    
  {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json", Authorization: `Bearer ${token}`
    }
  }).then((response) => {
      if (response.ok) {
      onDeletedUser(user);
      alert("User has been deleted");
    } else {
      alert("User NOT successfully deleted");
    }
  });
}
  

  return (
    <Card>
      <Card.Body>
        <Card.Title>My Movie List</Card.Title>
          <Form>
            <Card.Text>
              <>
                {!user ? (
                  <Navigate to="/login" replace />
                ) : movies.length === 0 ? (
                  <p>This List is Empty!</p>
                ) : (
                  <>
                    {movies
                    .filter((m) => user.FavoriteMovies.find((fav) => fav.title === m.title))
                    .map((movie) => (
                      <Col className="mb-4" key={movie._id} med={3}>
                        <MovieCard 
                          movie={movie}
                          user={user}
                          setUser={setUser}/>
                      </Col>
                    ))}
                  </>
                  )}             
              </>
            </Card.Text>
          </Form>
          <br/>
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
        <br/>
        <Button onClick={updateUser}
        varient="primary" type="submit">Update User</Button>
        <br/>
        <br/>
        <Button onClick={deletedUser}
        varient="primary" type="submit">Delete User</Button>
      </Card.Body>
    </Card>
  );
}



// Return User Information 
// Update User Information 
// Deregister a user 
// Add movie to favorite list 
// Delete movie from favorite list 
// Add button to movie card to add to list
// Apply Bootstrap