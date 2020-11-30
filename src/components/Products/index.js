import React from "react";
import { connect } from "react-redux";
import * as Actions from "../../redux/Actions/Products/ProductsActions";
import {
  ProductsContainer,
  ProductsHeading,
  ProductWrapper,
  ProductCard,
  ProductImg,
  ProductInfo,
  ProductTitle,
  ProductDesc,
  ProductPrice,
  ProductButton,
  ModalContent,
  ModalImg,
  ModalWrapper,
  CloseModalButton,
  Background
} from "./ProductsElements";
import FoodOptionsModal from "./FoodOptionsModal";

class Products extends React.Component {
  componentDidMount() {}
  viewProductModal = id => {
    var data = this.props.openProductModal(id);
  };

  closeModal = e => {
    this.props.closeModal();
  };

  addToCart() {}

  render() {
    return (
      <ProductsContainer>
        <ProductsHeading>{this.props.heading}</ProductsHeading>
        <ProductWrapper>
          {this.props.data.map((product, index) => {
            return (
              <ProductCard key={index}>
                <ProductImg src={product.img} alt={product.alt} />
                <ProductInfo>
                  <ProductTitle>{product.name}</ProductTitle>
                  <ProductDesc>{product.desc}</ProductDesc>
                  <ProductPrice>{product.price}</ProductPrice>
                  <ProductButton
                    id={product.id}
                    onClick={() => this.viewProductModal(product.id)}
                  >
                    {product.button}
                  </ProductButton>
                </ProductInfo>
                <FoodOptionsModal
                  data={product}
                  onClose={this.closeModal}
                  save={this.addToCart}
                  showModal={this.props.showModal === product.id}
                />
              </ProductCard>
            );
          })}
        </ProductWrapper>
      </ProductsContainer>
    );
  }
}
const mapStateToProps = state => ({
  showModal: state.productsReducerState.showModal
});

export default connect(
  mapStateToProps,
  {
    ...Actions
  }
)(Products);
