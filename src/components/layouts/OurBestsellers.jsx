import React from "react";
import Products from "../Products";
import SubHeading from "../SubHeading";
import Container from "../Container";
import bestOne from "/src/assets/bestOne.png";
import bestTwo from "/src/assets/bestTwo.png";
import bestThree from "/src/assets/bestThree.png";
import bestFour from "/src/assets/bestFour.png";
import Flex from "../Flex";
import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import NextArrows from "../NextArrows";
import PrevArrows from "../PrevArrows";

const OurBestsellers = () => {
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
      <Container>
        <SubHeading className={"pb-12"} text={"Our Bestsellers"} />
        <Slider {...settings} className={"-mx-3"}>
          <div className="px-3">
            <Products
              productsImg={bestOne}
              badgeText={"New"}
              productName={"Basic Crew Neck Tee"}
              productPrice={"$44.00"}
            />
          </div>
          <div className="px-3">
            <Products
              productsImg={bestTwo}
              badgeText={"Sold"}
              productName={"Basic Crew Neck Tee"}
              productPrice={"$44.00"}
            />
          </div>
          <div className="px-3">
            <Products
              productsImg={bestThree}
              badgeText={"New"}
              productName={"Basic Crew Neck Tee"}
              productPrice={"$44.00"}
            />
          </div>
          <div className="px-3">
            <Products
              productsImg={bestFour}
              badgeText={"New"}
              productName={"Basic Crew Neck Tee"}
              productPrice={"$44.00"}
            />
          </div>
          <div className="px-3">
            <Products
              productsImg={bestFour}
              badgeText={"New"}
              productName={"Basic Crew Neck Tee"}
              productPrice={"$44.00"}
            />
          </div>
          <div className="px-3">
            <Products
              productsImg={bestFour}
              badgeText={"New"}
              productName={"Basic Crew Neck Tee"}
              productPrice={"$44.00"}
            />
          </div>
          <div className="px-3">
            <Products
              productsImg={bestFour}
              badgeText={"New"}
              productName={"Basic Crew Neck Tee"}
              productPrice={"$44.00"}
            />
          </div>
          <div className="px-3">
            <Products
              productsImg={bestFour}
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

export default OurBestsellers;
