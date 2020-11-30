import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { GlobalStyle } from "./globalStyles";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./components/Home";
import { productData, productDataTwo } from "./components/Products/data";
import Products from "./components/Products";
import Feature from "./components/Feature";
import Footer from "./components/Footer";

export default class App extends React.Component {
  componentDidMount() {}
  render() {
    return (
      <Router>
        <GlobalStyle />
        <Home />
        <Products heading="Recomended Items for You" data={productData} />
        <Feature />
        <Products heading="Fiesty Treat for you" data={productDataTwo} />
        <Footer />
      </Router>
    );
  }
}
