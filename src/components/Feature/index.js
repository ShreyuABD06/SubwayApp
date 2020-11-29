import React from "react";
import { FeatureContainer, FeatureButton } from "./FeatureElements";

export default class Feature extends React.Component {
  componentDidMount() {}
  render() {
    return (
      <FeatureContainer>
        <h1>Subway Special Offer</h1>
        <p>20 % Discount on all Orders above Rs. 200</p>
        <FeatureButton>Order Now</FeatureButton>
      </FeatureContainer>
    );
  }
}
