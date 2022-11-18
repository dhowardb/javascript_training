const addMovieBtn = document.getElementById('add-movie-btn');
const searchMovieBtn = document.getElementById('search-btn');

const movies = [];

const movieLogger = () => {
  //User Input
  const favoriteMovieInput = document.getElementById('title');
  const extraName = document.getElementById('extra-name');
  const extraValue = document.getElementById('extra-value');
  //   movies.favorite = favoriteMovieInput.value;
  //   movies.name = extraName.value;
  //   movies.value = extraValue.value;

  const newMovie = {
    info: {
      [extraName.value]: extraValue.value,
      title: favoriteMovieInput.value,
    },
    id: Math.random(),
  };
  movies.push(newMovie);
};

const renderedMovies = (filter = '') => {
  const movieList = document.getElementById('movie-list');
  movieList.innerHTML = ''; //not ideal

  const filteredMovies = !filter ? movies : filter;

  if (movies.length === 0) {
    movieList.classList.remove('visible');
  } else {
    movieList.classList.add('visible');
  }
  //   movies.forEach((movie) => {
  //     const createListElement = document.createElement('li');
  //     let text = movie.info.title + ' - ';
  //     for (const key in movie.info) {
  //       if (key !== 'title') {
  //         text += `${key}: ${movie.info[key]}`;
  //       }
  //     }
  //     createListElement.textContent = text;
  //     movieList.append(createListElement);
  //   });

  filteredMovies.map((movie) => {
    const createListElement = document.createElement('li');
    const { info, ...otherProps } = movie;
    const { title: movieTitle, ...otherInfo } = info; // title:movieTitle is just renaming the object
    // let text = movie.info.title + ' - ';
    let text = movieTitle + ' - ';
    for (const key in otherInfo) {
      if (key !== 'title') {
        text += `${key}: ${info[key]}`;
      }
    }
    // for (const key in info) {
    //   if (key !== 'title') {
    //     text += `${key}: ${info[key]}`;
    //   }
    // }
    createListElement.textContent = text;
    movieList.append(createListElement);
  });
  //   movies.map((movie) => {
  //     const createListElement = document.createElement('li');
  //     movieList.classList.add('visible');

  //     let text = movie.info.title + ' - ';
  //     for (const key in movie.info) {
  //       if (key !== 'title') {
  //         text += `${key}: ${movie.info[key]}`;
  //       }
  //     }
  //     createListElement.textContent = text;
  //     movieList.append(createListElement);
  //   for (const key in movies) {
  //     const newList = document.createElement('li');
  //     newList.textContent = `${key} : ${movies[key]}`;

  //     movieList.append(newList);
  //   }
  // });
};
const addMovieHandler = () => {
  movieLogger();
  renderedMovies();
};

const searchMovieHandler = () => {
  const filterTitle = document.getElementById('filter-title').value;
  const filteredMovies = movies.filter((movie) =>
    movie.info.title.includes(filterTitle)
  );
  renderedMovies(filteredMovies);
};

const movieList = document.getElementById('movie-list');
addMovieBtn.addEventListener('click', addMovieHandler);
searchMovieBtn.addEventListener('click', searchMovieHandler);
