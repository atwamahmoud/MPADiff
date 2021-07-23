const fetch = require('node-fetch');

const HOME_PAGE_MOVIES_TITLES = [
    "Friends",
    "Avengers",
    "12 Angry men",
    "citizen kane",
    "The social Network",
    "Pirates of the Caribbean"
]



function getMovieDataByName(name) {
    return fetch(`http://www.omdbapi.com/?t=${encodeURIComponent(name)}&apikey=${process.env.MOVIES_API_KEY}`)
    .then(r => r.json())
    .then(movie => ({
        name: movie?.Title,
        poster_url: movie?.Poster,
        description: movie?.Plot,
        id: movie?.imdbID
    }))
}

module.exports.getHomePageMovies = async () => {
    return await Promise.all(HOME_PAGE_MOVIES_TITLES.map((movieName) => getMovieDataByName(movieName)))
}


module.exports.getMovie = async (id) => {
    return fetch(`http://www.omdbapi.com/?i=${id}&apikey=${process.env.MOVIES_API_KEY}&plot=full`)
    .then(r => r.json())
    .then(movie => ({
        name: movie.Title || "N/A",
        poster_url: movie.Poster || "N/A",
        description: movie.Plot || "N/A",
        id: movie.imdbID || "N/A",
        year: movie.Year || "N/A",
        rated: movie.Rated || "N/A",
        released: movie.Released || "N/A",
        genre: movie.Genre || "N/A",
        runtime: movie.Runtime || "N/A",
        director: movie.Director || "N/A",
        writtenBy: movie.Writer || "N/A",
        actors: movie.Actors || "N/A",
        awards: movie.Awards || "N/A",
        ratings: movie.Ratings || [],
        earnings: movie.BoxOffice || "N/A",
        producedBy: movie.Production || "N/A"
    }))
}


module.exports.getMovieByTitle = async (name) => {
    return getMovieDataByName(name).then(movie => {
        if(movie.id) return [movie]
        return []
    });
}