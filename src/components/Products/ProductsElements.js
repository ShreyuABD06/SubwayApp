import styled from "styled-components";
import { MdClose } from "react-icons/md";
import Modal from "styled-react-modal";
import { NavLink as Link } from "react-router-dom";

export const ProductsContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  padding: 5rem calc((100vw-1300px) / 2);
  background: #101522;
  color: #fff;
`;

export const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
`;

export const ProductCard = styled.div`
  margin: 0 2rem;
  line-height: 2;
  width: 300px;
`;

export const ProductImg = styled.img`
  height: 300px;
  min-width: 300px;
  max-width: 100%;
  box-shadow: 8px 8px #fdc500;
  &:hover {
    transition: transform 0.5s cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: scale(1.05);
  }
`;

export const ProductsHeading = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
`;

export const ProductTitle = styled.h2`
  font-weight: 400;
  font-size: 1.5rem;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
`;

export const ProductDesc = styled.p`
  margin-bottom: 1rem;
`;

export const ProductPrice = styled.p`
  margin-bottom: 1rem;
  font-size: 2rem;

  &:before {
    content: "Rs. ";
  }
`;
// "\20B9";
export const ProductButton = styled.button`
  font-size: 1rem;
  padding: 1rem 4rem;
  border: none;
  background: #e31837;
  color: #fff;
  transition: 0.2s ease-out;

  &:hover {
    background: #ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;

export const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// export const ModalWrapper = Modal.styled`
//   width: 800px;
//   height: 500px;
//   box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
//   background: #fff;
//   color: #000;
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   position: relative;
//   z-index: 10;
//   border-radius: 10px;
// `;
export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center;
  align-items: center; */
  /* line-height: 1.8;
  color: #141414; */
  flex-flow: column;
  max-height: 80vh;
  width: 600px;
  @media screen and (max-width: 850px) {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  /* p {
    margin-bottom: 1rem;
  }

  button {
    padding: 5px 12px;
    background: #60b246;
    color: white;
    border: none;
  }

  span.sp1 {
    align-items: left;
    text-align: left;
  }
  span.sp2 {
    align-items: right;
    text-align: right;
  } */
`;

export const ModalImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px 0 0 10px;
  background: #000;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center;
  align-items: center; */
  /* line-height: 1.8;
  color: #141414; */
  flex-flow: column;
  max-height: 80vh;
  width: 600px;
  /* p {
    margin-bottom: 1rem;
  }

  button {
    padding: 5px 12px;
    background: #60b246;
    color: white;
    border: none;
  }

  span.sp1 {
    align-items: left;
    text-align: left;
  }
  span.sp2 {
    align-items: right;
    text-align: right;
  } */
`;

export const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

export const ModalHead = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 0;
  flex-shrink: 0;
  padding: 26px 0 0 30px;
  width: 100%;
`;

export const ModalHeadContainer = styled.div`
  margin-left: 10px;
  padding-bottom: 20px;
  padding-right: 14px;
  width: 100%;
  display: flex;
  font-family: Arial, sans-serif;
`;

export const ModalHeadContent = styled.div`
  flex-grow: 1;
  width: 100%;
`;

export const ModalDataContainer = styled.div`
  flex-grow: 1;
  display: flex;
  overflow-x: hidden;
`;

export const ModalDataBox = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const ModalDataMenu = styled.div`
  padding-left: 50px;
  /* padding-right: 50px; */
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: #fff;

  @media screen and (max-width: 850px) {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`;

export const DataMenuWrapper = styled.div`
  padding: 16px 20px 14px 0;
  border-top: 1px dashed #bebfc5;
`;

export const DataMenuLink = styled(Link)`
  /* color: #fff;
  font-size: 2rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer; */

  display: inline-block;
  color: #93959f;
  font-size: 12px;
  margin-right: 22px;
  cursor: pointer;
  position: relative;
  padding-bottom: 7px;

  @media screen and (max-width: 400px) {
    position: absolute;
    top: 10px;
    left: 25px;
  }

  &:after {
    content: "";
    right: -12px;
    position: absolute;
    background-image: linear-gradient(90deg, #a9abb2 100%, #a9abb2 0);
    background-position: right 0.5em;
    background-size: 2px 2px;
    background-repeat: no-repeat;
    display: inline-block;
    width: 1px;
    padding-left: 12px;
    height: 1em;
  }
`;

export const ModalDataWrapper = styled.div`
  display: flex;
  position: relative;
  overflow-y: auto;
`;

export const ModalBox = styled.div`
  display: block;
  z-index: 1;
  position: absolute;
  top: -10px;
  width: 100%;
  box-shadow: 0 2px 4px 0 rgba(40, 44, 63, 0.1);
  height: 10px;
  /* display: none; */
`;

export const ModalChoicesList = styled.div`
  position: relative;
  flex-direction: column;
  /* overflow-y: auto; */
  overflow-x: hidden;
  flex-grow: 1;
  padding-top: 1px;
  padding-bottom: 20px;
  /* height: 250px; */
`;

export const ModalChoicesWrapper = styled.div`
  padding: 1px;
  display: flex;
  flex-direction: column;
`;

export const ModalChoice = styled.div`
  margin-top: 16;
`;

export const ChoiceName = styled.div`
  color: #282c3f;
  font-size: 20px;
  font-weight: 600;
  padding: 20px 0 10px 50px;
  position: relative;
`;

export const ChoiceOptions = styled.div`
  padding: 1rem 0 0.7rem 3rem;
`;

export const ModalFooter = styled.div`
  padding: 30px;
  position: relative;
  background-color: #fff;
  color: #282c3f;
  font-family: Arial, sans-serif;
  @media screen and (max-width: 850px) {
    width:100%
`;

export const ModalSelectedItemsWrapper = styled.div`
  padding-bottom: 12px;
`;

export const ModalSelectedItems = styled.div`
  font-size: 11px;
  font-weight: 400;
`;

export const SelectedAddonsCount = styled.div`
  color: #282c3f;
  font-size: 13px;
  width: 70px;
  float: right;
  text-align: right;
  cursor: pointer;
  &:before {
    content: "+";
  }
  &:after {
    content: " ADD ON";
  }
`;

export const SelectedItems = styled.div`
  display: block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-right: 80px;
  color: #7e808c;
  font-size: 13px;
`;

export const AddItemsBtnWrap = styled.div`
  padding: 11px 16px;
  background-color: #60b246;
  color: #fff;
  position: relative;
  font-weight: 600;
  font-size: 15px;
  cursor: pointer;

  /* @media screen and (max-width: 450px) {
    padding: 6px 11px;
    font-weight: 300;
    font-size: 10px;
  } */
`;

export const RadioContainer = styled.div`
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }
`;

export const Label = styled.label`
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 8px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  &:hover {
    font-weight: 700;
  }

  input:checked ~ .checkmark {
    background-color: white;
    border: 1px solid #60b246;
  }

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }

  /* Create a custom radio button */
  .checkmark {
    position: absolute;
    top: 3px;
    left: 0;
    height: 1rem;
    width: 1rem;
    background-color: #eee;
    border-radius: 50%;
    border: 1px solid;
  }
  &:hover input ~ .checkmark {
    background-color: #ccc;
    transition: transform 0.5s cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: scale(1.05);
    font-weight: 700px;
  }

  /* When the radio button is checked, add a blue background */
  input:checked ~ .checkmark {
    background-color: white;
    border: 1px solid #60b246;
  }

  /* Create the indicator (the dot/circle - hidden when not checked) */
  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
    transform: scale(0.5);
    background-color: #60b246;
  }

  /* Show the indicator (dot/circle) when checked */
  input:checked ~ .checkmark:after {
    display: block;
  }

  /* Style the indicator (dot/circle) */
  .checkmark:after {
    top: -1px;
    left: -1px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #60b246;
  }
`;

export const LabelName = styled.span`
  margin-right: 9px;
  font-size: 17px;
`;

export const CheckBoxLabel = styled.label`
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  &:hover {
    font-weight: 700;
  }

  input:checked ~ .checkmark {
    /* background-color: white; */
    border: 1px solid #60b246;
    background-color: #60b246;
  }

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .checkmark {
    position: absolute;
    top: 3px;
    left: 0;
    height: 1rem;
    width: 1rem;
    background-color: #eee;
    border: 1px solid;
  }

  &:hover input ~ .checkmark {
    transition: transform 0.5s cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: scale(1.05);
    font-weight: 700px;
  }

  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
    /* transform: scale(0.5);
    background-color: #60b246; */
  }

  input:checked ~ .checkmark:after {
    display: block;
  }

  .checkmark:after {
    left: 4px;
    top: 1px;
    width: 7px;
    height: 11px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;
