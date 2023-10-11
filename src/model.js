const initialDB = [
  [
    'ID-1',
    {
      title: 'Harry Potter',
      author: 'J.K. Rowling'
    }
  ],
  [
    'ID-2',
    {
      title: 'Jurassic Park',
      author: 'Michael Crichton'
    }
  ]
];

const booksDB = new Map(initialDB);

export const getBooks = () => {
  const books = []

  booksDB.forEach((book, key) => {
    books.push({
      id: key,
      ...book,
    })
  });

  return books
}

export const getBookById = (id) => ({
  ...booksDB.get(id),
  id,
})

export const saveBook = (title, id, author) => {
  booksDB.set(id, { title, author })
  return getBookById(id)
}
