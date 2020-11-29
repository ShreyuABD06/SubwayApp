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
//import Modal from "react-modal";

class Products extends React.Component {
  componentDidMount() {}
  SayHello = id => {
    var data = this.props.sayReduxWorking(id);
  };

  closeModal = e => {
    this.props.closeModal();
    // this.setState({
    //   show: !this.state.show
    // });
  };

  addToCart() {}

  render() {
    // if(this.props.showModal ! =0){
    //   document.body.className+='blockScroll';
    // }
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
                  {/* <ProductButton onClick={this.SayHello.bind(this)}>
                    {product.button}
                  </ProductButton> */}
                  <ProductButton
                    id={product.id}
                    onClick={() => this.SayHello(product.id)}
                  >
                    {product.button}
                  </ProductButton>
                </ProductInfo>
                {/* <Modal
                  showModal={this.props.showModal === product.id}
                  setShowModal={this.closeModal}
                /> */}
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
        {/* <Button onClick={openModal}>I'm a modal</Button>
        <Modal showModal={showModal} setShowModal={setShowModal} /> */}
      </ProductsContainer>
    );
  }
}
const mapStateToProps = state => ({
  newMessage: state.productsReducerState.myMessage,
  showModal: state.productsReducerState.showModal
});

export default connect(
  mapStateToProps,
  {
    ...Actions
  }
)(Products);
