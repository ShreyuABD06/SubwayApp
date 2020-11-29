import React from "react";
import { connect } from "react-redux";
import * as Actions from "../../redux/Actions/Cart/CartActions";
import {
  CartContainer,
  Icon,
  CloseIcon,
  CartMenu,
  CartDataWrapper,
  CartItem,
  CartItemHeader,
  CartWrapper,
  CartHeader,
  CartHeading,
  CartBox,
  CartItemWrapper,
  CartItemBilling,
  Customize,
  CartItemData,
  CartEditItemCount,
  CartBillingData,
  CartDataContainer,
  CartBillingWrapper,
  CartItemAdd,
  Div1,
  Div2,
  Div3,
  Div4,
  Div5,
  TotalBillingDetails,
  TotalAmountWrapper,
  CheckoutDiv,
  TotalHeading,
  TotalAmount,
  TotalBillingWrapper,
  CartEmpty,
  CartEmptyImage
  // SidebarLink,
  // SideBtnWrap,
  // SidebarRoute
} from "./CartElements";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { emptyCart } from "./data";

class Cart extends React.Component {
  constructor() {
    super();
  }
  componentDidMount() {}

  ComputeTotal(cartData) {
    var data = cartData;
    var cartTotal = data.reduce(function(prev, cur) {
      return prev + cur.totalCost * cur.count;
    }, 0);

    debugger;
    return cartTotal;
  }

  render() {
    debugger;
    if (
      this.props.cart == null ||
      this.props.cart == null ||
      this.props.cart.length == 0
    ) {
      return (
        <CartContainer isOpen={this.props.isOpen}>
          <Icon onClick={this.props.toggle}>
            <CloseIcon />
          </Icon>
          <CartEmpty>
            <CartEmptyImage src={emptyCart} alt="Empty Cart" />
          </CartEmpty>
        </CartContainer>
      );
    }
    return (
      <CartContainer isOpen={this.props.isOpen}>
        <CartWrapper>
          <CartHeader>
            <CartHeading>Cart</CartHeading>
            <Icon onClick={this.props.toggle}>
              <CloseIcon />
            </Icon>
          </CartHeader>
          <CartBox />
          <CartMenu>
            <CartDataWrapper>
              {this.props.cart.map((cartItem, index) => {
                return (
                  <CartItem>
                    <CartItemWrapper>
                      <CartItemData>
                        <CartDataContainer>
                          {cartItem.name}
                          <button>Customize</button>
                        </CartDataContainer>
                      </CartItemData>
                      <CartBillingData>
                        <CartBillingWrapper>
                          <CartItemAdd>
                            <Div1>ADD</Div1>
                            <Div2>+</Div2>
                            <Div3>+</Div3>
                            <Div4></Div4>
                            <Div5>2</Div5>
                          </CartItemAdd>
                          <CartItemBilling>
                            <span className="amountSpan">
                              {"  "}Rs.{" "}
                              {parseInt(cartItem.price) +
                                parseInt(cartItem.addonCost)}
                            </span>
                          </CartItemBilling>
                        </CartBillingWrapper>
                      </CartBillingData>
                    </CartItemWrapper>
                  </CartItem>
                );
              })}
            </CartDataWrapper>
          </CartMenu>
          <TotalBillingWrapper>
            <TotalBillingDetails>
              <TotalAmountWrapper>
                <TotalHeading>Total</TotalHeading>
                <TotalAmount>
                  {this.ComputeTotal.bind(this, this.props.cart)}
                </TotalAmount>
              </TotalAmountWrapper>
              <CheckoutDiv>CHECKOUT</CheckoutDiv>
            </TotalBillingDetails>
          </TotalBillingWrapper>
        </CartWrapper>
      </CartContainer>
    );
  }
}

const mapStateToProps = state => ({
  //showModal: state.productsReducerState.showModal,
  cheeseType: state.cartReducerState.cheeseType,
  chipsType: state.cartReducerState.chipsType,
  vegType: state.cartReducerState.vegType,
  totalCost: state.cartReducerState.totalCost,
  addonCost: state.cartReducerState.addonCost,
  addons: state.cartReducerState.addons,
  options: state.cartReducerState.options,
  cart: state.cartReducerState.cart
});

const mapDispatchToProps = {
  ...Actions
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
