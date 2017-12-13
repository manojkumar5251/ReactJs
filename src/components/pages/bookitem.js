import React from "react";
import { Row, Col, Well, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addtocart, updatecart } from "../../actions/cartactions";

class BookItem extends React.Component {
  handleCart() {
    const book = [
      ...this.props.cart,
      {
        _id: this.props._id,
        name: this.props.name,
        author: this.props.author,
        price: this.props.price,
        quantity: 1
      }
    ];

    if (this.props.cart.length > 0) {
      let _id = this.props._id;

      let cartindex = this.props.cart.findIndex(function(cart) {
        return cart._id === _id;
      });

      if (cartindex === -1) {
        this.props.addtocart(book);
      } else {
        this.props.updatecart(_id, 1);
      }
    } else {
      this.props.addtocart(book);
    }
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
  return bindActionCreators({ addtocart, updatecart }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(BookItem);
