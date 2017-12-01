export function getbook() {
  return {
    type: "get_book"
  };
}

export function deletebook(id) {
  return {
    type: "delete_book",
    payload: id
  };
}

export function updatebook(book) {
  return {
    type: "update_book",
    payload: book
  };
}
