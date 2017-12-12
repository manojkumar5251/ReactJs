export function booksReducers(
  state = {
    books: [
      { _id: 1, name: "Da vince code", author: "Dan Brown", price: 10 },
      { _id: 2, name: "Digital code", author: "Dan Brown", price: 20 }
    ]
  },
  action
) {
  switch (action.type) {
    case "get_book":
      return { books: [...state.books] };
      break;

    case "post_book":
      return { books: [...state.books, ...action.payload] };
      break;

    case "delete_book":
      const book2del = [...state.books];
      const indextodel = book2del.findIndex(function(book) {
        return book._id === action.payload._id;
      });
      return {
        books: [
          ...book2del.slice(0, indextodel),
          ...book2del.slice(indextodel + 1)
        ]
      };
      break;

    case "update_book":
      const book2upt = [...state.books];
      const indextoupt = book2upt.findIndex(function(book) {
        return book._id === action.payload._id;
      });
      const newbook = { ...book2upt[indextoupt], name: action.payload.name };
      console.log(newbook);
      return {
        books: [
          ...book2upt.slice(0, indextoupt),
          newbook,
          ...book2upt.slice(indextoupt + 1)
        ]
      };
      break;
  }
  return state;
}
