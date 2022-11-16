const addModal = document.getElementById('add-modal');
const startAddMovieBtn = document.querySelector('header button');
const backdrop = document.getElementById('backdrop');
// const cancelAddMovieBtn = document.querySelector('#add-modal button');
const cancelAddMovieBtn = addModal.querySelector('.btn--passive');
const addMovieBtn = addModal.querySelector('.btn--success');
const userInputs = addModal.querySelectorAll('input');

const entryTextSection = document.getElementById('entry-text');
const movieList = document.getElementById('movie-list');

const deleteModal = document.getElementById('delete-modal');

const movies = [];
// let isDelete = false;

const updateUI = () => {
  if (!movies.length) {
    entryTextSection.style.display = 'block';
  } else {
    entryTextSection.style.display = 'none';
  }
};

const showDeleteModal = () => {
  deleteModal.classList.add('visible');
  backdropHandler();
};

const closeDeleteModal = () => {
  deleteModal.classList.remove('visible');
  backdropHandler();
};

const checkDelete = () => {
  let isDelete = confirmDeleteModalBtn.addEventListener('click', () => {
    return true;
  });
  console.log(isDelete);
  return isDelete;
  // return cancelDeleteModalBtn.addEventListener('click', () => false);
  // console.log(isDelete);
};

const confirmDeleteMovie = (movieId) => {
  deleteMovie(movieId);
  closeDeleteModal();
};
const deleteMovie = (movieId) => {
  let movieIndex = 0;
  for (const movie of movies) {
    if (movie.id === movieId) {
      break;
    }
    movieIndex++;
  }
  console.log(movieId);
  movies.splice(movieIndex, 1);
  movieList.children[movieIndex].remove();
  updateUI();
};

const deleteMovieHandler = (movieId) => {
  // if (!isDelete) {
  //   showDeleteModal();
  // } else {
  //   // console.log(newMovieId);
  //   // deleteMovie(newMovieId);
  // }
  showDeleteModal();
  let confirmDeleteModalBtn = deleteModal.querySelector('.btn--danger');
  const cancelDeleteModalBtn = deleteModal.querySelector('.btn--passive');

  //events issue
  cancelDeleteModalBtn.removeEventListener('click', closeDeleteModal);
  // confirmDeleteModalBtn.removeEventListener('click', confirmDeleteMovie.bind(null, movieId));  //this will not work due to creating new objects

  //workaround not advise use Events
  //via cloning
  confirmDeleteModalBtn.replaceWith(confirmDeleteModalBtn.cloneNode(true));

  confirmDeleteModalBtn = deleteModal.querySelector('.btn--danger');

  cancelDeleteModalBtn.addEventListener('click', closeDeleteModal);
  confirmDeleteModalBtn.addEventListener(
    'click',
    confirmDeleteMovie.bind(null, movieId)
  );
};
const renderNewMovieElement = (id, title, imageUrl, rating) => {
  //   for (const key in movies) {
  //     const listMovies = document.createElement('li');
  //     console.log(key);
  //     console.log(listMovies[key]);
  //     // listMovies.value = movie.value;
  //     // movieList.append(listMovies);
  //   }
  const newMovieElement = document.createElement('li');
  newMovieElement.className = 'movie-element';
  newMovieElement.innerHTML = `
        <div class="movie-element__image">
            <img src="${imageUrl}" alt="${title}">
        </div>
        <div class="movie-element__info">
            <h2>${title}</h2>
            <p>${rating}/5 stars</p>
        </div>
    `;
  movieList.append(newMovieElement);
  newMovieElement.addEventListener('click', deleteMovieHandler.bind(null, id));

  //testing to add new lists
  //   console.log(movies);
  //   console.log(movieList);
  //   for (const key in movies) {
  //     const movieValues = movies[key];
  //     const newMovieList = document.createElement('li');
  //     newMovieList.className = 'movie-element';
  //     // newMovieElement.textContent = `Movie Title ${movieValues.title} Images ${movieValues.imageUrl} and Ratings ${movieValues.rating}`;
  //     newMovieList.innerHTML = `
  //         <div class="movie-element__image">
  //             <img src="${movieValues.imageUrl}" alt="${movieValues.title}">
  //         </div>
  //         <div class="movie-element__info">
  //             <h2>${movieValues.title}</h2>
  //             <p>${movieValues.rating}/5 stars</p>
  //         </div>
  //     `;
  //     movieList.append(newMovieList);
  //   }
  //   console.log(movieList);

  //   const movieListElement = movieList.querySelector('li');
  //   movieListElement.addEventListener('click', () => {
  //     movieList.remove(movieListElement);
  //   });
};

const backdropHandler = () => {
  backdrop.classList.toggle('visible');
};

const cancelAddMovieHandler = () => {
  closeMovieModal();
};

const closeMovieModal = () => {
  addModal.classList.remove('visible');
  backdropHandler();
};

const showMovieModal = () => {
  addModal.classList.toggle('visible');
  backdropHandler();
  clearMovieInput();
};

const backdropClickHandler = () => {
  backdropHandler();
  closeMovieModal();
  closeDeleteModal();
};

const clearMovieInput = () => {
  for (const userInput of userInputs) {
    userInput.value = '';
  }
};

const addMovieInputHandler = () => {
  //   for (const userInput of userInputs) {
  //     console.log(userInput.value);
  //   }

  const titleValue = userInputs[0].value;
  const imageUrlValue = userInputs[1].value;
  const ratingValue = userInputs[2].value;

  if (
    !titleValue.trim() ||
    !imageUrlValue.trim ||
    !ratingValue.trim() ||
    ratingValue < 1 ||
    ratingValue > 5
  ) {
    alert('Please enter valid values');
    return;
  }

  const newMovie = {
    id: Math.random().toString(),
    title: titleValue,
    image: imageUrlValue,
    rating: ratingValue,
  };

  movies.push(newMovie);
  console.log(movies);

  showMovieModal();
  // backdropHandler();
  renderNewMovieElement(
    newMovie.id,
    newMovie.title,
    newMovie.image,
    newMovie.rating
  );
  clearMovieInput();
  updateUI();
};

startAddMovieBtn.addEventListener('click', showMovieModal);

backdrop.addEventListener('click', backdropClickHandler);
cancelAddMovieBtn.addEventListener('click', cancelAddMovieHandler);

addMovieBtn.addEventListener('click', addMovieInputHandler);

// confirmDeleteModalBtn.addEventListener(
//   'click',
//   deleteMovieHandler.bind(null, this.id, true)
// );
// cancelDeleteModalBtn.addEventListener('click', closeDeleteModal);
