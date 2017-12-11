import React from "react";
import { Row, Col, Well, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addtocart } from "../../actions/cartactions";

class BookItem extends React.Component {
  handleCart() {
    const book = [
      // ...this.props.cart,
      {
        id: this.props.id,
        name: this.props.name,
        author: this.props.author,
        price: this.props.price
      }
    ];

    this.props.addtocart(book);
  }

  render() {
    return (
      <Well>
        <Row>
          <Col xs={12}>
            <h6>{this.props.name}</h6>
            <p>{this.props.author}</p>
            <h6>RS . {this.props.price}</h6>
            <Button onClick={this.handleCart.bind(this)} bsStyle="primary">
              Buy Now
            </Button>
          </Col>
        </Row>
      </Well>
    );
  }
}

function mapStateToProps(state) {
  return { cart: state.cart.cart };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addtocart: addtocart }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(BookItem);
