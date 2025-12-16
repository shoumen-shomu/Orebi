import React from "react";
import SubHeading from "../SubHeading";
import Container from "../Container";
import Products from "../Products";
import offerOne from "/src/assets/offerOne.png";
import offerTwo from "/src/assets/offerTwo.png";
import offerThree from "/src/assets/offerThree.png";
import offerFour from "/src/assets/offerFour.png";
import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import NextArrows from "../NextArrows";
import PrevArrows from "../PrevArrows";
import Flex from "../Flex";

const SpecialOffers = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrows />,
    prevArrow: <PrevArrows />,
  };
  return (
    <>
      <Container className={"pb-[130px]"}>
        <SubHeading className={"pb-12"} text={"Special Offers"} />
        <Slider {...settings} className={"-mx-3"}>
          <div className="px-3">
            <Products
              productsImg={offerOne}
              badgeText={"-50%"}
              productName={"Basic Crew Neck Tee"}
              productPrice={"$44.00"}
            />
          </div>
          <div className="px-3">
            <Products
              productsImg={offerTwo}
              badgeText={"-20%"}
              productName={"Basic Crew Neck Tee"}
              productPrice={"$44.00"}
            />
          </div>
          <div className="px-3">
            <Products
              productsImg={offerThree}
              badgeText={"-40%"}
              productName={"Basic Crew Neck Tee"}
              productPrice={"$44.00"}
            />
          </div>
          <div className="px-3">
            <Products
              productsImg={offerFour}
              badgeText={"New"}
              productName={"Basic Crew Neck Tee"}
              productPrice={"$44.00"}
            />
          </div>
          <div className="px-3">
            <Products
              productsImg={offerFour}
              badgeText={"New"}
              productName={"Basic Crew Neck Tee"}
              productPrice={"$44.00"}
            />
          </div>
          <div className="px-3">
            <Products
              productsImg={offerFour}
              badgeText={"New"}
              productName={"Basic Crew Neck Tee"}
              productPrice={"$44.00"}
            />
          </div>
          <div className="px-3">
            <Products
              productsImg={offerFour}
              badgeText={"New"}
              productName={"Basic Crew Neck Tee"}
              productPrice={"$44.00"}
            />
          </div>
          <div className="px-3">
            <Products
              productsImg={offerFour}
              badgeText={"New"}
              productName={"Basic Crew Neck Tee"}
              productPrice={"$44.00"}
            />
          </div>
        </Slider>
      </Container>
    </>
  );
};

export default SpecialOffers;
