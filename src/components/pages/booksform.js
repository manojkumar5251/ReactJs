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
import { postbook } from "../../actions/booksactions";

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
  render() {
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
      </Well>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ postbook }, dispatch);
}
export default connect(null, mapDispatchToProps)(BooksForm);
