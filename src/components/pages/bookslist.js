import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getbook } from "../../actions/booksactions";

class BooksList extends React.Component {
  componentDidMount() {
    this.props.getbook();
  }
  render() {
    const booksList = this.props.books.map(function(bookarr) {
      return (
        <div key={bookarr.id}>
          <h2>{bookarr.name}</h2>
          <h2>{bookarr.author}</h2>
          <h2>{bookarr.price}</h2>
        </div>
      );
    });

    return (
      <div>
        <h1>Hello React</h1>
        {booksList}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { books: state.books.books };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getbook }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
