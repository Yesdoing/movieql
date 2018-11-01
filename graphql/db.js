let movies = [
    {
        id: 0,
        name: 'Jone Wock',
        score : 8
    },
    {
        id: 1,
         name: 'Jone Wock - reload',
         score: 5
    },
    {
        id: 2,
        name: 'Harry Potter',
        score: 9
    },
    {
        id: 3,
        name: 'Forest Gump',
        score: 10
    },
    {
        id: 4,
        name: '신세계',
        score: 5
    }
]

export const getMovies = () => movies;

export const getById = id => {
    const filteredMovie = movies.filter(movie => movie.id === id);
    return filteredMovie[0];
};

export const deleteMovie = id => {
    const cleanedMovies = movies.filter(movie => movie.id !== id);
    if (movies.length > cleanedMovies.length) {
        movies = cleanedMovies;
        return true;
    } else {
        return false;
    }
}