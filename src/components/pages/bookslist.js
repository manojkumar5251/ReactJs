import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Grid, Col, Row, Button } from "react-bootstrap";
import { getbook } from "../../actions/booksactions";

import BookItem from "./bookitem";
import BooksForm from "./booksform";

class BooksList extends React.Component {
  componentDidMount() {
    this.props.getbook();
  }
  render() {
    const booksList = this.props.books.map(function(bookarr) {
      return (
        <Col xs={12} sm={6} md={4} key={bookarr.id}>
          <BookItem
            id={bookarr.id}
            name={bookarr.name}
            author={bookarr.author}
            price={bookarr.price}
          />
        </Col>
      );
    });

    return (
      <Grid>
        <Row style={{ marginTop: "15px" }}>
          <Col xs={12} sm={6}>
            <BooksForm />
          </Col>
          {booksList}
        </Row>
      </Grid>
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
