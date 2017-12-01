const reducer = function(state = { books: [] }, action) {
  switch (action.type) {
    case "post_book":
      return { books: [...state.books, ...action.payload] };
      break;

    case "delete_book":
      const book2del = [...state.books];
      const indextodel = book2del.findIndex(function(book) {
        return book.id === action.payload.id;
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
        return book.id === action.payload.id;
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
};
