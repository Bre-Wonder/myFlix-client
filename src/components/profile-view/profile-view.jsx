import { useParams } from "react-router";
import { Card } from "react-bootstrap";


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

// Connect favorite button to ProfileView from MovieCard/Movie View
//   Be able to add movie
//   Delete a movie

// Apply Bootstrap

// let favoriteMovies = movies.filter(m =>
//   user.FavoriteMovies.includs(m._id)
//     );