import { useParams } from "react-router";


export const ProfileView = ({user}) => {
  const { userUsername } = useParams();
  const user = users.find((b) => b.id === userUsername);
  return (
    <div>
      <div>
        <span>Username: </span>
        <img src={user.Username} className="w-100" />
      </div>
      <div>
        <span>Password: </span>
        <span>{user.Password}</span>
      </div>
      <div>
        <span>Email: </span>
        <span>{user.Email}</span>
      </div>
      <div>
        <span>Birthdate: </span>
        <span tyep="date">{user.Birthday}</span>
      </div>
    </div>
  );
}

// Connect favorite button to ProfileView from MovieCard/Movie View
//   Be able to add movie
//   Delete a movie

// Apply Bootstrap

// Get Nav functionalities to work

// let favoriteMovies = movies.filter(m =>
//   user.FavoriteMovies.includs(m._id)
//     );