const addMovieBtn = document.getElementById('add-movie-btn')
const searchBtn = document.getElementById('search-btn')

const movies = []

const renderMovies = (filter = '') => {
  const movieLIst = document.getElementById('movie-list')

  if (movies.length === 0) {
    movieLIst.classList.remove('visible')
  } else {
    movieLIst.classList.add('visible')
  }
  movieLIst.innerHTML = ''

  const filteredMovies = !filter
    ? movies
    : movies.filter((movie) => movie.info.title.includes(filter))

  filteredMovies.forEach((movie) => {
    const movieEl = document.createElement('li')
    let text = movie.info.title + ' - '
    for (const key in movie.info) {
      if (key !== 'title') {
        text = text + `${key}: ${movie.info[key]}`
      }
    }
    movieEl.textContent = text
    movieLIst.append(movieEl)
  })
}

const addMovieHandler = () => {
  const title = document.getElementById('title').value
  const extraName = document.getElementById('extra-name').value
  const extraValue = document.getElementById('extra-value').value

  if (
    title.trim() === '' ||
    extraName.trim() === '' ||
    extraValue.trim() === ''
  ) {
    return
  }

  const newMovie = {
    info: {
      title,
      [extraName]: extraValue,
    },
    id: Math.random(),
  }

  movies.push(newMovie)
  renderMovies()
  console.log(newMovie)
}

const searchMovieHandler = () => {
  const filterTerm = document.getElementById('filter-title').value
  renderMovies(filterTerm)
}

addMovieBtn.addEventListener('click', addMovieHandler)
searchBtn.addEventListener('click', searchMovieHandler)
