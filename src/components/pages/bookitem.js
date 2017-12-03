import React from "react";
import { Row, Col, Well, Button } from "react-bootstrap";
import { connect } from "react-redux";

class BookItem extends React.Component {
  render() {
    return (
      <Well>
        <Row>
          <Col xs={12}>
            <h6>{this.props.name}</h6>
            <p>{this.props.author}</p>
            <h6>RS . {this.props.price}</h6>
            <Button bsStyle="primary">Buy Now</Button>
          </Col>
        </Row>
      </Well>
    );
  }
}

export default BookItem;
