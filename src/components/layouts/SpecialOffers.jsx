import React from "react";
import SubHeading from "../SubHeading";
import Container from "../Container";
import Products from "../Products";
import offerOne from "/src/assets/offerOne.png";
import offerTwo from "/src/assets/offerTwo.png";
import offerThree from "/src/assets/offerThree.png";
import offerFour from "/src/assets/offerFour.png";

import Flex from "../Flex";

const SpecialOffers = () => {
  return (
    <>
      <Container className={"pb-[130px]"}>
        <SubHeading className={"pb-12"} text={"Special Offers"} />
        <Flex className={"gap-x-7"}>
            <div className="w-1/4">
            <Products productsImg={offerOne} badgeText={"-50%"} productName={"Basic Crew Neck Tee"} productPrice={"$44.00"}/>
            </div>
            <div className="w-1/4">
            <Products productsImg={offerTwo} badgeText={"-20%"} productName={"Basic Crew Neck Tee"} productPrice={"$44.00"}/>
            </div>
            <div className="w-1/4">
            <Products productsImg={offerThree} badgeText={"-40%"} productName={"Basic Crew Neck Tee"} productPrice={"$44.00"}/>
            </div>
            <div className="w-1/4">
            <Products productsImg={offerFour} badgeText={"New"} productName={"Basic Crew Neck Tee"} productPrice={"$44.00"}/>
            </div>
        </Flex>
      </Container>
    </>
  );
};

export default SpecialOffers;
