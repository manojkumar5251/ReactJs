import React from "react";
import Menu from "./components/menu";
import Footer from "./components/footer";
import { connect } from "react-redux";

class Main extends React.Component {
  render() {
    return (
      <div>
        <Menu cartitemno={this.props.totalqty} />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { totalqty: state.cart.totalqty };
}
export default connect(mapStateToProps)(Main);
