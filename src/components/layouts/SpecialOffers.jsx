import React, { useEffect, useState } from "react";
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
import axios from "axios";

const SpecialOffers = () => {
  let [allData, setAllData] = useState([]);
  useEffect(() => {
    async function alldatas() {
      let data = await axios.get("https://dummyjson.com/products");
      setAllData(data.data.products);
    }
    alldatas();
  },[]);
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
        <div className="grid grid-cols-4 gap-6">
          {/* <Slider {...settings} className={"-mx-3"}> */}
          {allData.slice(0,4).map((item) => (
              <Products
                productsImg={item.thumbnail}
                badgeText={item.brand}
                productName={item.title}
                productPrice={item.price}
              />
          ))}
          {allData.slice(5,9).map((item) => (
              <Products
                productsImg={item.thumbnail}
                badgeText={item.brand}
                productName={item.title}
                productPrice={item.price}
              />
          ))}
        </div>
        {/* </Slider> */}
      </Container>
    </>
  );
};

export default SpecialOffers;
