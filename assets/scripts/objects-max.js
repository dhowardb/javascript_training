const addMovieBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');

const movies = [];

const renderedMovies = (filter = '') => {
  const movieList = document.getElementById('movie-list');

  movieList.innerHTML = ''; //not ideal

  const filteredMovies = !filter
    ? movies
    : movies.filter((movie) => movie.info.title.includes(filter));

  if (movies.length === 0) {
    movieList.classList.remove('visible');
  } else {
    movieList.classList.add('visible');
  }
  filteredMovies.forEach((movie) => {
    const movieElement = document.createElement('li');

    //checking if property exists in the object
    if (!('info' in movie)) {
    }

    // or
    // if (!(movie.info === undefined)) {
    // }

    const { info, ...otherProps } = movie; //need to be same with key name
    console.log(otherProps);

    // let { title: movieTitle } = info;
    let { getFormattedTitle } = movie; //comment this out first, it looks like its causing due to 'this'
    // console.log(this);
    // getFormattedTitle = getFormattedTitle.bind(movie); //to reference the correct 'this' use bind
    // let text = info.title + ' - '; //practicing object destructuring
    // let text = movieTitle.toUpperCase() + ' - '; //instead of manually upperCase we can call custom method/function using this

    let text = getFormattedTitle.call(movie) + ' - ';
    for (const key in info) {
      if (key !== 'title' && key !== '_title') {
        text = text + `${key}: ${info[key]}`;
      }
    }
    movieElement.textContent = text;
    movieList.append(movieElement);
  });
};

const addMovieHandler = () => {
  const title = document.getElementById('title').value;
  const extraName = document.getElementById('extra-name').value;
  const extraValue = document.getElementById('extra-value').value;

  if (
    title.trim() === '' ||
    extraName.trim() === '' ||
    extraValue.trim() === ''
  ) {
    return;
  }

  const newMovie = {
    info: {
      // title,
      set title(value) {
        if (value.trim === ' ') {
          this._title = 'DEFAULT';
          return;
        }
        this._title = value;
      },
      get title() {
        return this._title;
      },
      [extraName]: extraValue,
    },
    id: Math.random().toString(),
    // getFormattedTitle: function () {   //this is an alternative but they are not the same
    //   return this.info.title.toUpperCase();
    // },
    getFormattedTitle() {
      console.log(this);
      return this.info.title.toUpperCase();
    },
  };

  newMovie.info.title = title;

  movies.push(newMovie);
  renderedMovies();
};

const searchMovieHandler = () => {
  console.log(this);
  const filterTerm = document.getElementById('filter-title').value;
  renderedMovies(filterTerm);
};
addMovieBtn.addEventListener('click', addMovieHandler);
searchBtn.addEventListener('click', searchMovieHandler);
