import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

export const CartContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 350px;
  height: 100%;
  background-color: #fff;
  box-shadow: 0 2px 20px 0 rgba(40, 44, 63, 0.15);
  animation: _1F-73 0.3s forwards;
  /* display: grid; */
  display: flex;
  /* align-items: center; */
  top: 0;
  transition: 0.3s ease-in-out;
  right: ${({ isOpen }) => (isOpen ? "0" : "-1000px")};

  @media screen and (max-width: 400px) {
    width: 100%;
  }
`;

export const CartEmpty = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

export const CartEmptyImage = styled.img`
  height: 250px;
  min-width: 250px;
  max-width: 100%;
  &:hover {
    transition: transform 0.5s cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: scale(1.05);
  }
`;

export const CartWrapper = styled.div`
  display: flex;
  /* align-items: center; */
  /* justify-content: center; */
  flex-direction: column;
  font-size: 1rem;
  transition: 0.2s ease-in-out;
  color: #000;
  cursor: pointer;

  /* &:hover {
    color: #e31837;
    transition: 0.2s ease-in-out;
  } */

  display: flex;
  flex-direction: column;
  /* justify-content: center;
  align-items: center; */
  /* line-height: 1.8;
  color: #141414; */
  flex-flow: column;
  max-height: 100%;
  width: 300px;
  /* @media screen and (max-width: 850px) {
    width: 100%;
    display: flex;
    justify-content: space-between;
  } */
`;

export const CartHeader = styled.div`
  display: block;
  border-bottom: 1px dotted #282c3f;
  padding-bottom: 24px;
  margin-bottom: 16px;
`;

export const CartBox = styled.div`
  display: block;
  z-index: 1;
  position: absolute;
  top: -10px;
  width: 100%;
  box-shadow: 0 2px 4px 0 rgba(40, 44, 63, 0.1);
  height: 10px;
`;

export const CartHeading = styled.div`
  position: relative;
  top: 1.2rem;
  left: 1.5rem;
  background: transparent;
  border: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const CloseIcon = styled(FaTimes)`
  color: #000;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  border: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

// export const CartMenu = styled.div`
//   display: flex;
//   top: 5rem;
//   left: 1.2rem;
//   grid-template-columns: 1fr;
//   grid-template-rows: repeat() (3, 80px);
//   text-align: center;

//   @media screen and (max-width: 480px) {
//     grid-template-rows: repeat(3, 60px);
//   }
// `;

export const CartMenu = styled.div`
  flex-grow: 1;
  display: flex;
  overflow-x: hidden;
  /* padding: 2rem 2rem; */
`;

export const TotalBillingWrapper = styled.div`
  padding: 2rem 2rem;
`;

export const CartItemWrapper = styled.div`
  padding: 10px 0;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
`;
export const CartItemData = styled.div`
  display: flex;
  -ms-flex-align: start;
  align-items: flex-start;
  flex-grow: 1;
`;

export const CartDataContainer = styled.div`
  font-size: 14px;
  font-weight: 400;
  margin-left: 10px;
  margin-right: 5px;
  flex-grow: 1;

  button {
    font-size: 11px;
    color: #686b78;
    font-weight: 500;
    margin-top: 2px;
    position: relative;
    display: block;
    padding: 0;
    background: transparent;
    border: none;
    cursor: pointer;
    outline: none;
    text-align: left;
  }
`;

export const CartEditItemCount = styled.div`
  /* padding-right: 16px; */

  width: 70px !important;
  font-size: 12px !important;
  display: block !important;
  display: inline-block;
  height: 30px;
  width: 83px;
  border: 1px solid #d4d5d9;
  color: #60b246;
  font-size: 0.9rem;
  font-weight: 600;
  line-height: 30px;
  position: relative;
  text-align: center;
  background-color: #fff;
`;

export const CartBillingWrapper = styled.div`
  float: right;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
`;
export const CartBillingData = styled.div`
  width: 120px;
  /* padding-left: 16px;
  align-items: center;
  justify-content: center; */
`;

export const CartItemHeader = styled.div``;

export const CartDataWrapper = styled.div`
  display: flex;
  /* align-items: center;
  justify-content: center; */
  flex-direction: column;
  font-size: 1rem;
  transition: 0.2s ease-in-out;
  color: #000;
  cursor: pointer;

  /* &:hover {
    color: #e31837;
    transition: 0.2s ease-in-out;
  } */
`;

export const CartItem = styled.div`
  padding: 1rem 0 1rem 1rem;
`;

export const CartItemAdd = styled.div`
  display: inline-block;
  height: 30px;
  width: 83px;
  border: 1px solid #d4d5d9;
  color: #60b246;
  font-size: 0.9rem;
  font-weight: 600;
  line-height: 30px;
  position: relative;
  text-align: center;
  background-color: #fff;
  width: 70px !important;
  font-size: 12px !important;
  display: block !important;
`;

export const CartItemBilling = styled.div`
  font-size: 13px;
  color: #535665;
  text-align: right;
  width: 45px;
`;

export const Div1 = styled.div`
  animation: _1yY_v 0.2s ease;
  opacity: 0;
  transform: translate3d(0, 7.5px, 0);
  color: #60b246;
  width: 100%;
  height: 100%;
  cursor: pointer;
  display: none !important;
`;
export const Div2 = styled.div`
  animation: _2H0Ek 0.2s ease;
  opacity: 0;
  -ms-transform: rotate(-30deg);
  transform: rotate(-30deg);
  position: absolute;
  right: 2px;
  top: -35%;
  -ms-transform-origin: -6px 6px;
  transform-origin: -6px 6px;
  -ms-transform: rotate(0);
  transform: rotate(0);
  cursor: pointer;
  display: none !important;
`;
export const Div3 = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 33.33333%;
  display: inline-block;
  opacity: 1;
  transform: translateZ(0);
  cursor: pointer;
  font-size: 150%;
  font-weight: 600;
`;
export const Div4 = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 33.33333%;
  display: inline-block;
  opacity: 1;
  transform: translateZ(0);
  cursor: pointer;
  font-weight: 600;
  font-size: 1.5rem;

  &::before {
    content: "";
    display: inline-block;
    height: 2px;
    width: 10px;
    background-color: #bebfc5;
    position: relative;
    top: -6px;
  }
`;

export const Div5 = styled.div`
  position: absolute;
  left: 33.33333%;
  top: 0;
  width: 33.33333%;
  display: inline-block;
  opacity: 1;
  transform: translateZ(0);
  cursor: pointer;
`;

export const TotalBillingDetails = styled.div`
  margin-top: 17px;
  min-height: 115px;
  width: 290px;
  left: 1.5rem;
  display: block;
`;

export const TotalAmountWrapper = styled.div`
  color: #3d4152;
  font-size: 15px;
  font-weight: 600;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
`;

export const TotalAmount = styled.div``;
export const TotalHeading = styled.div`
  font-size: 17px;
  -ms-flex: 1;
  flex: 1;
`;

export const CheckoutDiv = styled.div`
  height: 50px;
  background-color: #60b246;
  outline: 0;
  cursor: pointer;
  border: 0;
  color: #fff;
  margin-top: 28px;
  text-transform: uppercase;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 600;
`;

export const Customize = styled.div`
  cursor: pointer;

  &:hover {
    color: #e31837;
    transition: 0.2s ease-in-out;
  }
`;

export const SidebarLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: #000;
  cursor: pointer;

  &:hover {
    color: #e31837;
    transition: 0.2s ease-in-out;
  }
`;

export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const SidebarRoute = styled(Link)`
  background: #e31837;
  white-space: nowrap;
  padding: 16px 64px;
  color: #fff;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: 0.2s ease-in-out;
    background: ##fff;
    color: #010606;
  }
`;
