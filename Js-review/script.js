const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

//Functional Array Methods in JavaScript: map, filter and reduce
// These methods do not mutate the original array instead they make a new array
// with some operations performed on the original array

// const books = getBooks();

// const x = [1, 2, 3, 4, 5].map((e1) => e1 * 2);
// console.log(x);

// //map array
// const titles = books.map((book) => book.title);
// titles;

// const essentialData = books.map((book) => ({
//   title: book.title,
//   author: book.author,
// }));

// essentialData;

// //filter array
// const longbooks = books
//   .filter((book) => book.pages > 400)
//   .filter((book) => book.hasMovieAdaptation);
// longbooks;

// const adventureBooks = books
//   .filter((book) => book.genres.includes("adventure"))
//   .map((book) => book.title);
// adventureBooks;

// //reduce array :
// // reduce will be taking a callback function which will be executed for each element in an array,
// //  and as a second argument it also takes in a starter value
// // The goal of reduce is to reduce the entire array to the one value, to boil it down
// // The callback function will not only be called with the current element but also with the current value of the accumulator which starts at 0

// const pagesOfAllBooks = books.reduce((acc, book) => acc + book.pages, 0);
// pagesOfAllBooks;

// //sort : mutates the original array
// //use slice() method to stop mutating the original array befoore using sort()

// const arr = [6, 2, 4, 1, 3];
// const sortedAscending = arr.slice().sort((a, b) => a - b);
// sortedAscending;
// arr;

// const sortedBookByPages = books
//   .slice()
//   .sort((no, book) => no.pages - book.pages);
// sortedBookByPages;

// //1) Add a book object to the array
// const newBook = {
//   id: 6,
//   title: "Harry Potter and Chamber of Secrets",
//   author: "J. K. Rowling",
// };
// const booksAfterAdd = [...books, newBook];
// booksAfterAdd;

// //2) Delete the book object in the array
// const booksAfterDelete = booksAfterAdd.filter((book) => book.id !== 3);
// booksAfterDelete;

// //3) Update a book object in the array
// const booksAfterUpdate = booksAfterDelete.map((book) =>
//   book.id === 1 ? {} : book
// );
// booksAfterUpdate;

//*** Asynchronous Javascript : Promises***//

//fetch() function is used to fetch the data from the api into the browser
//fetch() function returns a promise, it doesn't wait for the data to be processed as soon as it is called it returns the data and moves to the next step
//pending, rejected,fulfilled are the states of the promise
//pending is one of the state of the promise which states the function is performing some background operation
// console.log(fetch("https://jsonplaceholder.typicode.com/todos"));

// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((res) => res.json())
//   .then((data) => console.log(data));
// console.log("jonas");

//*
//*
//*
//*
//*
//*
//*
//*
//*

//*** Asynchronous Javascript : Async/Await ***/

//javascript will not move onto the next line with async/await.
//It will wait for all the data to be loaded first then will move to the next step
//this is normal Synchronous Javascript code
// the result value of the async() function is always just a promise

async function getTodos() {
  const res = await fetch(" https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  console.log(data);

  return data;
}

const todos = getTodos();
console.log(todos);
