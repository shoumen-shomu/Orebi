import React from "react";
import Products from "../Products";
import SubHeading from "../SubHeading";
import Container from "../Container";
import bestOne from "/src/assets/bestOne.png";
import bestTwo from "/src/assets/bestTwo.png";
import bestThree from "/src/assets/bestThree.png";
import bestFour from "/src/assets/bestFour.png";

import Flex from "../Flex";

const OurBestsellers = () => {
  return (
    <>
      <Container>
        <SubHeading className={"pb-12"} text={"Our Bestsellers"} />
        <Flex className={"gap-x-7"}>
          <div className="w-1/4">
            <Products
              productsImg={bestOne}
              badgeText={"New"}
              productName={"Basic Crew Neck Tee"}
              productPrice={"$44.00"}
            />
          </div>
          <div className="w-1/4">
            <Products
              productsImg={bestTwo}
              badgeText={"Sold"}
              productName={"Basic Crew Neck Tee"}
              productPrice={"$44.00"}
            />
          </div>
          <div className="w-1/4">
            <Products
              productsImg={bestThree}
              badgeText={"New"}
              productName={"Basic Crew Neck Tee"}
              productPrice={"$44.00"}
            />
          </div>
          <div className="w-1/4">
            <Products
              productsImg={bestFour}
              badgeText={"New"}
              productName={"Basic Crew Neck Tee"}
              productPrice={"$44.00"}
            />
          </div>
        </Flex>
      </Container>
    </>
  );
};

export default OurBestsellers;
