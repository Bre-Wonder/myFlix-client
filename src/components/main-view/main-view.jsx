import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
  const [movies, setMovies] = useState ([
      {
        id: 1,
        title: "Hunt for the Wilderpeople",
        description: "A young adolescent is adopted by a new family and he adventures with his Uncle Heck around the Kiwi mountains",
        genre: "Adventure",
        director: "Taika Waititi",
        image: "https://resizing.flixster.com/_igfe_lVd6qSL3ijI-BfBWQtFEU=/206x305/v2/https://flxt.tmsimg.com/assets/p12664790_p_v8_ah.jpg",
        featured: "true"
      },
      {
        id: 2,
        title: "Roman Holiday",
        description: "A young royal finds herself lost on the streets of Rome pretending to be someone else. A journalist with his own plans decides to help her without either of them revealing their identities.",
        genre: "Romantic Comedy",
        director: "William Wyler",
        image: "https://amc-theatres-res.cloudinary.com/v1579117759/amc-cdn/production/2/movies/4300/4257/Poster/p_800x1200_RomanHoliday_En_0802517.jpg",
        featured: "true"
      },
      {
        id: 3,
        title: "The Parent Trap",
        description: "Adolescent twins are separated at a very young age by their parent’s divorce. Both girls reunite by happenstance and work to try to get their parents back together.",
        genre: "Romantic Comedy",
        director: "Nancy Meyers",
        image: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/300E2FE605731ED0F338D027EDB9FC2FD0384DCC98620AFFE5F3EDE7E58CAD87/scale?width=1200&aspectRatio=1.78&format=jpeg",
        featured: "true"
      }
  ]);

  const [selectedMovie, setSelectedMovie] = useState(null);

  if(selectedMovie) {
    return (
      <MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} />
    );
  }

  if (movies.length === 0) {
    return <div>This List is Empty!</div>
  }

  return (
    <div>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onMovieClick={(newSelectedMovie) => {
            setSelectedMovie(newSelectedMovie);
          }}
        />
      ))}
    </div>
  );
};