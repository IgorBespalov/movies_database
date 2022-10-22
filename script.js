const numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', 0);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {

    },
    actors: {

    },
    genres: [],
    privat: false
};

const preMovieSaw = prompt('Один из последних просмотренных фильмов?', ''),
      preMovieRaiting = +prompt('На сколько баллов от 1 до 10 Вы его оцените?', ''),
      lastMovieSaw = prompt('Один из последних просмотренных фильмов?', ''),
      lastMovieRaiting = +prompt('На сколько баллов от 1 до 10 Вы его оцените?', '');

// const preMovieSaw = 'vvvvwe',
//       preMovieRaiting = 5.1,
//       lastMovieSaw = 'sdasq',
//       lastMovieRaiting = 6;

personalMovieDB.movies = {
    [preMovieSaw]: preMovieRaiting,
    [lastMovieSaw]: lastMovieRaiting
};

// personalMovieDB.movies[preMovieSaw] = preMovieRaiting;
// personalMovieDB.movies[lastMovieSaw] = lastMovieRaiting;

console.log(personalMovieDB);