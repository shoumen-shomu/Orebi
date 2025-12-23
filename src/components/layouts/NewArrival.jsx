import Products from "../Products";
import Container from "../Container";
import SubHeading from "../SubHeading";
// import Flex from "../Flex"; slider dile flex deya lage na
import productOne from "/src/assets/productOne.png";
import productTwo from "/src/assets/productTwo.png";
import productThree from "/src/assets/productThree.png";
import productFour from "/src/assets/productFour.png";
import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import NextArrows from "../NextArrows";
import PrevArrows from "../PrevArrows";
import { useEffect, useState } from "react";
import axios from "axios";

const NewArrival = () => {
  let [allData, setAllData] = useState([]);
  useEffect(() => {
    async function alldatas() {
      let data = await axios.get("https://dummyjson.com/products");
      setAllData(data.data.products);
    }
    alldatas();
  });
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
      <Container className={"pb-[118px]"}>
        <SubHeading className={"pb-[75px]"} text={"New Arrivals"} />
        <Slider {...settings} className={"-mx-3"}>
          {allData.map((item) => (
            <div className="px-3">
              <Products
                productsImg={item.thumbnail}
                badgeText={item.category}
                productName={item.title}
                productPrice={item.price}
              />
            </div>
          ))}
          {/* <div className="px-3">
            <Products
              productsImg={productTwo}
              badgeText={"Stock Out"}
              productName={"Basic Crew Neck Tee"}
              productPrice={"$44.00"}
            />
          </div>
          <div className="px-3">
            <Products
              productsImg={productThree}
              badgeText={"New"}
              productName={"Basic Crew Neck Tee"}
              productPrice={"$44.00"}
            />
          </div>
          <div className="px-3">
            <Products
              productsImg={productFour}
              badgeText={"New"}
              productName={"Basic Crew Neck Tee"}
              productPrice={"$44.00"}
            />
          </div>
          <div className="px-3">
            <Products
              productsImg={productFour}
              badgeText={"New"}
              productName={"Basic Crew Neck Tee"}
              productPrice={"$44.00"}
            />
          </div>
          <div className="px-3">
            <Products
              productsImg={productFour}
              badgeText={"New"}
              productName={"Basic Crew Neck Tee"}
              productPrice={"$44.00"}
            />
          </div> */}
        </Slider>
      </Container>
    </>
  );
};

export default NewArrival;
