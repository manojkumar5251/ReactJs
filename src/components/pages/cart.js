import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { deletecartitem, updatecart } from "../../actions/cartactions";
import {
  Panel,
  Col,
  Row,
  Well,
  Button,
  ButtonGroup,
  Label,
  Modal
} from "react-bootstrap";

class Cart extends React.Component {
  onDelete(_id) {
    const book2del = this.props.cart;
    const indextodel = book2del.findIndex(function(cart) {
      return cart._id === _id;
    });
    let cartafterdelete = [
      ...book2del.slice(0, indextodel),
      ...book2del.slice(indextodel + 1)
    ];

    this.props.deletecartitem(cartafterdelete);
  }

  onIncrement(_id) {
    this.props.updatecart(_id, 1);
  }

  onDecrement(_id, quantity) {
    if (quantity > 1) {
      this.props.updatecart(_id, -1);
    }
  }

  constructor() {
    super();
    this.state = { showModal: false };
  }

  open() {
    this.setState({ showModal: true });
  }

  close() {
    this.setState({ showModal: false });
  }

  render() {
    if (this.props.cart[0]) {
      return this.renderCart();
    } else {
      return this.renderEmpty();
    }
  }
  renderEmpty() {
    return <div />;
  }

  renderCart() {
    const cartItemsList = this.props.cart.map(function(cartarr) {
      return (
        <Panel key={cartarr._id}>
          <Row>
            <Col xs={12} sm={4}>
              <h6>{cartarr.name}</h6>
              <span> </span>
            </Col>
            <Col xs={12} sm={2}>
              <h6>Rs.{cartarr.price}</h6>
            </Col>
            <Col xs={12} sm={2}>
              <h6>
                Qty.<Label bsStyle="success">{cartarr.quantity}</Label>
              </h6>
            </Col>
            <Col xs={6} sm={4}>
              <ButtonGroup style={{ minWidth: "300px" }}>
                <Button
                  onClick={this.onDecrement.bind(
                    this,
                    cartarr._id,
                    cartarr.quantity
                  )}
                  bsStyle="default"
                  bsSize="small"
                >
                  -
                </Button>
                <Button
                  onClick={this.onIncrement.bind(this, cartarr._id)}
                  bsStyle="default"
                  bsSize="small"
                >
                  +
                </Button>
                <span> </span>
                <Button
                  onClick={this.onDelete.bind(this, cartarr._id)}
                  bsStyle="danger"
                  bsSize="small"
                >
                  DELETE
                </Button>
              </ButtonGroup>
            </Col>
          </Row>
        </Panel>
      );
    }, this);
    return (
      <Panel header="Cart" bsStyle="primary">
        {cartItemsList}
        <Row>
          <Col xs={12}>
            <h6>Total amount: {this.props.totalamount} </h6>
            <Button
              onClick={this.open.bind(this)}
              bsStyle="success"
              bsSize="small"
            >
              PROCEED TO CHECKOUT
            </Button>
          </Col>
        </Row>
        <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
          <Modal.Header closeButton>
            <Modal.Title> Thank You! </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h6>Your item has been saved </h6>
            <p>You will recieve an email confirmation</p>
          </Modal.Body>
          <Modal.Footer>
            <Col xs={6}>
              <h6>Total $: {this.props.totalamount}</h6>
            </Col>
            <Button onClick={this.close.bind(this)}>Close</Button>
          </Modal.Footer>
        </Modal>
      </Panel>
    );
  }
}

function mapStateToProps(state) {
  return { cart: state.cart.cart, totalamount: state.cart.totalamount };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ deletecartitem, updatecart }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
