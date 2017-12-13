import React from "react";
import {
  Well,
  Panel,
  FormControl,
  FormGroup,
  ControlLabel,
  Button
} from "react-bootstrap";
import { findDOMNode } from "react-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { postbook, deletebook } from "../../actions/booksactions";

class BooksForm extends React.Component {
  handleSubmit() {
    const book = [
      {
        name: findDOMNode(this.refs.name).value,
        author: findDOMNode(this.refs.author).value,
        price: findDOMNode(this.refs.price).value
      }
    ];
    this.props.postbook(book);
  }

  onDelete() {
    let bookId = findDOMNode(this.refs.delete).value;
    this.props.deletebook(bookId);
  }

  render() {
    const booklist = this.props.books.map(function(bookarr) {
      return <option key={bookarr._id}>{bookarr._id}</option>;
    });

    return (
      <Well>
        <Panel>
          <FormGroup controlId="name">
            <ControlLabel>Name</ControlLabel>
            <FormControl type="text" placeholder="Enter name" ref="name" />
          </FormGroup>
          <FormGroup controlId="author">
            <ControlLabel>Author</ControlLabel>
            <FormControl type="text" placeholder="Enter author" ref="author" />
          </FormGroup>
          <FormGroup controlId="price">
            <ControlLabel>Price</ControlLabel>
            <FormControl type="text" placeholder="Enter price" ref="price" />
          </FormGroup>
          <Button bsStyle="primary" onClick={this.handleSubmit.bind(this)}>
            Save Book
          </Button>
        </Panel>
        <Panel style={{ marginTop: "25px" }}>
          <FormGroup controlId="formControlsSelect">
            <ControlLabel>Select a book id to delete</ControlLabel>
            <FormControl
              ref="delete"
              componentClass="select"
              placeholder="select"
            >
              <option value="select">select</option>
              {booklist}
            </FormControl>
          </FormGroup>
          <Button onClick={this.onDelete.bind(this)} bsStyle="danger">
            Delete Book
          </Button>
        </Panel>
      </Well>
    );
  }
}

function mapStateToProps(state) {
  return { books: state.books.books };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ postbook, deletebook }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(BooksForm);
