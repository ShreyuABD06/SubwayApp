import React from "react";
import { connect } from "react-redux";
import * as Actions from "../../redux/Actions/Cart/CartActions";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from "react-scroll";

import {
  ModalContent,
  ModalImg,
  ModalWrapper,
  CloseModalButton,
  Background,
  ModalHead,
  ModalHeadContainer,
  ModalHeadContent,
  ModalDataContainer,
  ModalDataBox,
  ModalDataMenu,
  DataMenuWrapper,
  DataMenuLink,
  ModalDataWrapper,
  ModalBox,
  ModalChoicesList,
  ModalChoicesWrapper,
  ModalChoice,
  ChoiceName,
  ChoiceOptions,
  ModalFooter,
  ModalSelectedItemsWrapper,
  ModalSelectedItems,
  SelectedAddonsCount,
  SelectedItems,
  AddItemsBtnWrap,
  RadioContainer,
  LabelName,
  Label,
  CheckBoxLabel
} from "./ProductsElements";
import Modal from "react-modal";
import FoodOptionsModalStyles from "./FoodOptionsModal.css";

class FoodOptionsModal extends React.Component {
  constructor() {
    super();
    // this.state = {
    //   cheeseType: "",
    //   chipsType: "",
    //   vegType: "",
    //   totalCost: 0,
    //   addonCost: 0,
    //   addons: [],
    //   options: []
    // };
    this.onChangeValue = this.onChangeValue.bind(this);
  }

  componentDidMount() {
    let cheeseInitial = this.props.data.options.cheese.filter(x => {
      debugger;
      return x.selected == true;
    });
    let chipsInitial = this.props.data.options.chips.filter(x => {
      return x.selected == true;
    });
    let vegInitial = this.props.data.options.vegetables.filter(x => {
      return x.selected == true;
    });
    this.props.setInitalState(
      cheeseInitial[0].name,
      vegInitial[0].name,
      chipsInitial[0].name,
      this.props.data.price
    );

    // this.setState({ cheeseType: cheeseInitial[0].name });
    // this.setState({ chipsType: chipsInitial[0].name });
    // this.setState({ vegType: vegInitial[0].name });
    // this.setState({ totalCost: this.props.data.price });
  }

  // this.props.data.options.cheese[0].name
  onChangeValue(event) {
    //console.log(event.target.value);
    this.props.onRadioValueChange(event.target.name, event.target.value);
    //this.setState({ [event.target.name]: event.target.value }); //Using props for all events
  }

  // onChipsChangeValue(event) {
  //   console.log(event.target.value);
  //   this.setState({ chipsType: event.target.value });
  // }

  // onVegChangeValue(event) {
  //   console.log(event.target.value);
  //   this.setState({ vegType: event.target.value });
  // }

  onClose = e => {
    this.props.onClose && this.props.onClose(e);
  };

  // onCheckboxChange(event) {
  //   debugger;
  //   console.log(event.target.checked);
  // }

  AddNewItem(data) {
    debugger;
    var cartObj = this.props.cart;
    var findValue = cartObj.find(x => (x.id = data.id));
    var totalCost = parseInt(data.price) + parseInt(this.props.addonCost);
    debugger;
    var selectedOptions = {
      cheeseType: this.props.cheeseType,
      vegType: this.props.vegType,
      chipsType: this.props.chipsType,
      addons: this.props.addons,
      options: this.props.options
    };
    var newItem = {
      cartId: Date.now(),
      id: data.id,
      name: data.name,
      price: data.price,
      options: selectedOptions,
      count: 1,
      addonCost: this.props.addonCost,
      totalCost: totalCost
    };
    cartObj.push(newItem);
    this.props.addToCart(cartObj);
    debugger;
  }

  // onAddonChange(val) {
  //   debugger;
  //   console.log(val);
  //   var checkboxes = document.getElementsByName("addonCheckbox");
  //   var numberOfCheckedItems = 0;
  //   var cc = 0;
  //   this.setState({ addons: [] });
  //   var addonSelected = [];
  //   for (var i = 0; i < checkboxes.length; i++) {
  //     if (checkboxes[i].checked) {
  //       debugger;
  //       addonSelected.push(val);
  //       cc = cc + val.price;
  //       debugger;
  //       numberOfCheckedItems++;
  //     }
  //   }
  //   //1. When added should be added to state(with existing data)
  //   //2. When unchecked shoud be removed from state
  //   console.log(addonSelected);
  //   //[...state.addons, val]
  //   this.setState({ addonCost: cc, addons: addonSelected });

  //   debugger;
  //   // console.log(addonSelected);
  //   // if (numberOfCheckedItems > 3) {
  //   //   alert("You can't select more than three favorite sauce!");
  //   //   return false;
  //   // }
  // }

  onAddonChange(val) {
    debugger;
    var currentAddons = this.props.addons;
    var currentTotal = this.props.addonCost;
    var checkboxes = document.getElementsByName("addonCheckbox");
    var numberOfCheckedItems = 0;
    var optionSelected = [];
    for (var i = 0; i < checkboxes.length; i++) {
      console.log(this.props.addons);
      console.log(checkboxes[i].id);
      var index = currentAddons.findIndex(x => x.id == checkboxes[i].id);
      if (index == -1 && checkboxes[i].checked == true) {
        currentTotal += val.price;
        var joined = currentAddons.push(val);
        console.log(joined);
        this.props.onAddonItemsChange(currentAddons);
        // this.setState({ addons: some });
        // this.setState(prevState => ({
        //   options: [...prevState.options, joined]
        // }));
      } else if (index >= 0 && checkboxes[i].checked == false) {
        currentAddons.splice(index, 1);
        currentTotal -= val.price;
        this.props.onAddonItemsChange(currentAddons);
        // this.setState({ addons: some });
      }
      // this.setState({ addonCost: currentTotal });
    }
    var addonItems = [];
    this.props.addons.forEach(element => {
      addonItems.push(element.name);
    });
    this.props.displayAddonItems(addonItems.join(","));
    this.props.setAddonCost(currentTotal);
  }

  onOptionalChange(val) {
    debugger;
    var currentOptions = this.props.options;
    var checkboxes = document.getElementsByName("optionCheckbox");
    var numberOfCheckedItems = 0;
    var optionSelected = [];
    for (var i = 0; i < checkboxes.length; i++) {
      console.log(this.props.options);
      console.log(checkboxes[i].id);
      var index = currentOptions.findIndex(x => x.id == checkboxes[i].id);
      if (index == -1 && checkboxes[i].checked == true) {
        if (currentOptions.length > 2) {
          debugger;
          console.log(checkboxes[i].id);
          console.log(val.id);
          document.getElementById(checkboxes[i].id).checked = false;
          alert("You can't select more than three favorite sauce!");
          this.props.onOptionalItemsChange(currentOptions);
        } else {
          currentOptions.push(val);
          this.props.onOptionalItemsChange(currentOptions);
        }

        // this.setState({ options: currentOptions });
        // this.setState(prevState => ({
        //   options: [...prevState.options, joined]
        // }));
      } else if (index >= 0 && checkboxes[i].checked == false) {
        currentOptions.splice(index, 1);
        this.props.onOptionalItemsChange(currentOptions);
        // this.setState({ options: some });
      }

      var optionItems = [];
      this.props.options.forEach(element => {
        optionItems.push(element.name);
      });
      this.props.displayOptionItems(optionItems.join(","));
    }

    // console.log(this.state.options);

    // this.setState({ options: optionSelected });
    debugger;
  }

  // onOptionalChange(val) {
  //   debugger;
  //   console.log(val);
  //   var checkboxes = document.getElementsByName("optionCheckbox");
  //   var numberOfCheckedItems = 0;
  //   var optionSelected = [];
  //   for (var i = 0; i < checkboxes.length; i++) {
  //     if (checkboxes[i].checked) {
  //       numberOfCheckedItems++;
  //       if (numberOfCheckedItems > 2) {
  //         document.getElementById(val.id).checked = false;
  //         alert("You can't select more than three favorite sauce!");
  //       } else {
  //         optionSelected.push(val);
  //       }
  //     }
  //   }
  //   console.log(optionSelected);
  //   this.setState({ options: optionSelected });
  //   debugger;
  // }

  render() {
    console.log(3 + this.props.addons.length + this.props.options.length);

    if (!this.props.showModal) {
      return null;
    }
    return (
      <Modal
        id={this.props.data.id}
        className="FoodModal"
        isOpen={this.props.showModal}
      >
        <ModalWrapper>
          <ModalHead>
            <ModalHeadContainer>
              <ModalHeadContent>
                <div className="HeadText">{this.props.data.name}</div>
                <div className="CostDiv">
                  <span className="CostSpan">
                    Total
                    <span className="rupees">{this.props.data.price}</span>
                  </span>
                </div>
                <CloseModalButton
                  onClick={this.onClose}
                  aria-label="Close Modal"
                />
              </ModalHeadContent>
            </ModalHeadContainer>
          </ModalHead>
          <ModalDataContainer>
            <ModalDataBox>
              <ModalDataMenu>
                <DataMenuWrapper>
                  <a href="#choice1" className="DataMenuLink">
                    <div className="OptionNameTops OptionNameTopsH">
                      Choice of Cheese
                    </div>
                  </a>
                  <a href="#choice2" className="DataMenuLink">
                    <div className="OptionNameTops">Choice of Chips</div>
                  </a>
                  <a href="#choice3" className="DataMenuLink">
                    <div className="OptionNameTops">
                      Choice of Sauce Any (3)
                    </div>
                  </a>
                  <a href="#choice4" className="DataMenuLink">
                    <div className="OptionNameTops">Choice of Vegetables</div>
                  </a>
                </DataMenuWrapper>
              </ModalDataMenu>
              <ModalDataWrapper>
                <ModalBox />
                <ModalChoicesList id="cust_groups">
                  <ModalChoicesWrapper>
                    <ModalChoice id="choice1">
                      <ChoiceName>Choice of Cheese</ChoiceName>
                      <ChoiceOptions>
                        {this.props.data.options.cheese.map((cheese, index) => {
                          return (
                            <Label>
                              <LabelName>{cheese.name}</LabelName>
                              <input
                                type="radio"
                                id={cheese.id}
                                value={cheese.name}
                                name="cheeseType"
                                onChange={this.onChangeValue}
                                checked={this.props.cheeseType === cheese.name}
                              />
                              <span className="checkmark"></span>
                            </Label>
                          );
                        })}
                      </ChoiceOptions>
                    </ModalChoice>
                    <ModalChoice id="choice2">
                      <ChoiceName>Choice of Chips</ChoiceName>
                      <ChoiceOptions>
                        {this.props.data.options.chips.map((chips, index) => {
                          return (
                            <Label>
                              <LabelName>{chips.name}</LabelName>
                              <input
                                type="radio"
                                id={chips.id}
                                value={chips.name}
                                name="chipsType"
                                onChange={this.onChangeValue}
                                checked={this.props.chipsType === chips.name}
                              />
                              <span className="checkmark"></span>
                            </Label>
                          );
                        })}
                      </ChoiceOptions>
                    </ModalChoice>
                    <ModalChoice id="choice3">
                      <ChoiceName>
                        Choice of Sauce Any (3)
                        <span className="optional">(optional)</span>
                      </ChoiceName>
                      <ChoiceOptions>
                        {this.props.data.options.sauce.map((sauce, index) => {
                          return (
                            <>
                              <CheckBoxLabel>
                                {sauce.name}
                                <input
                                  type="checkbox"
                                  name="optionCheckbox"
                                  id={sauce.id}
                                  onChange={this.onOptionalChange.bind(
                                    this,
                                    sauce
                                  )}
                                  value={sauce.name}
                                />
                                <span className="checkmark"></span>
                              </CheckBoxLabel>
                            </>
                          );
                        })}
                      </ChoiceOptions>
                    </ModalChoice>
                    <ModalChoice id="choice4">
                      <ChoiceName>Choice of Vegetables</ChoiceName>
                      <ChoiceOptions>
                        {this.props.data.options.vegetables.map(
                          (veg, index) => {
                            return (
                              <Label>
                                <LabelName>{veg.name}</LabelName>
                                <input
                                  id={veg.id}
                                  type="radio"
                                  value={veg.name}
                                  name="vegType"
                                  onChange={this.onChangeValue}
                                  checked={this.props.vegType === veg.name}
                                />
                                <span className="checkmark"></span>
                              </Label>
                            );
                          }
                        )}
                      </ChoiceOptions>
                    </ModalChoice>
                    <ModalChoice id="choice3">
                      <ChoiceName>Add On</ChoiceName>
                      <ChoiceOptions>
                        {this.props.data.options.addons.map((addon, index) => {
                          return (
                            <>
                              <CheckBoxLabel>
                                {addon.name} {"   "} {addon.price}
                                <input
                                  type="checkbox"
                                  name="addonCheckbox"
                                  id={addon.id}
                                  onChange={this.onAddonChange.bind(
                                    this,
                                    addon
                                  )}
                                  value={addon.name}
                                />
                                <span className="checkmark"></span>
                              </CheckBoxLabel>
                            </>
                          );
                        })}
                      </ChoiceOptions>
                    </ModalChoice>
                  </ModalChoicesWrapper>
                </ModalChoicesList>
              </ModalDataWrapper>
            </ModalDataBox>
          </ModalDataContainer>
          <ModalFooter>
            <ModalBox />
            <ModalSelectedItemsWrapper>
              <ModalSelectedItems>
                <SelectedAddonsCount>
                  {3 + this.props.options.length + this.props.addons.length}
                </SelectedAddonsCount>
                <SelectedItems>
                  {this.props.cheeseType}, {this.props.chipsType},
                  {this.props.vegType},{this.props.displayAddons},
                  {this.props.displayOptions}
                </SelectedItems>
              </ModalSelectedItems>
            </ModalSelectedItemsWrapper>
            <AddItemsBtnWrap
              onClick={this.AddNewItem.bind(this, this.props.data)}
            >
              <span className="price">
                Total
                <span className="rupees">
                  {parseInt(this.props.data.price) +
                    parseInt(this.props.addonCost)}
                </span>
              </span>
              <span className="addItem">ADD ITEM</span>
            </AddItemsBtnWrap>
          </ModalFooter>
        </ModalWrapper>
      </Modal>
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
  cart: state.cartReducerState.cart,
  displayAddons: state.cartReducerState.displayAddons,
  displayOptions: state.cartReducerState.displayOptions
});

const mapDispatchToProps = {
  ...Actions
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FoodOptionsModal);
