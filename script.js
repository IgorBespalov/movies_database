let numberOfFilms;

for (let i = 0; i < 1; i++) {
    numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?');
    if (numberOfFilms != null && numberOfFilms != '') {
        break;
    } else { 
        i--; 
    }
}

const personalMovieDB = {
    count: numberOfFilms,
    movies: {

    },
    actors: {

    },
    genres: [],
    privat: false
};


for (let i = 0; i < 2; i++) {
    const lastMovieSaw = prompt('Один из последних просмотренных фильмов?', ''),
          lastMovieRaiting = +prompt('На сколько баллов от 1 до 10 Вы его оцените?', '');

    // ----- проверяем условия ввода информации ------
    if (lastMovieSaw != null && lastMovieRaiting != null && lastMovieSaw != '' & lastMovieRaiting != '' && lastMovieSaw.length < 50) {  
        personalMovieDB.movies[lastMovieSaw] = lastMovieRaiting; // предпочтительнее, чем через фигурные скобки, тк через фигурные скобки новые данные будут перезаписываться в ту же пару ключ-значение, а здесь будут дополняться
        console.log('done...')
    } else {
        console.log('error!');
        i--;  // если ошибка, то счетчик цикла уменьшается на 1 и значит проходит дополнительный круг до тех пор, пока условия верного ввода не будут удовлетворены
    } 
}

if (personalMovieDB.count < 10) {
    console.log('Вы посмотрели довольно мало фильмов. Смотрите кино чаще - это здорово!');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    console.log('Вы - классический зритель.');
} else if (personalMovieDB.count > 30) {
    console.log('Вы - настоящий кономан!!!');
} else {
    console.log('Произошла ошибка...');
}

// const preMovieSaw = 'vvvvwe',
//       preMovieRaiting = 5.1,
//       lastMovieSaw = 'sdasq',
//       lastMovieRaiting = 6;

// personalMovieDB.movies = {
//     [preMovieSaw]: preMovieRaiting,
//     [lastMovieSaw]: lastMovieRaiting
// };

// personalMovieDB.movies[preMovieSaw] = preMovieRaiting;
// personalMovieDB.movies[lastMovieSaw] = lastMovieRaiting;

console.log(personalMovieDB);