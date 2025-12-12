import Products from "../Products";
import Container from "../Container";
import SubHeading from "../SubHeading";
import Flex from "../Flex";
import productOne from '/src/assets/productOne.png'
import productTwo from '/src/assets/productTwo.png'
import productThree from '/src/assets/productThree.png'
import productFour from '/src/assets/productFour.png'



const NewArrival = () => {
  return (
    <>
      <Container className={"pb-[118px]"}>
        <SubHeading className={"pb-[75px]"} text={"New Arrivals"} />
        <Flex className={"gap-x-7"}>
          <div className="w-1/4">
          <Products productsImg={productOne} badgeText={"New"} productName={"Basic Crew Neck Tee"} productPrice={"$44.00"} />
          </div>
          <div className="w-1/4">
          <Products productsImg={productTwo} badgeText={"Stock Out"} productName={"Basic Crew Neck Tee"} productPrice={"$44.00"}/>
          </div>
          <div className="w-1/4">
          <Products productsImg={productThree} badgeText={"New"} productName={"Basic Crew Neck Tee"} productPrice={"$44.00"}/>
          </div>
          <div className="w-1/4">
          <Products productsImg={productFour} badgeText={"New"} productName={"Basic Crew Neck Tee"} productPrice={"$44.00"}/>
          </div>
        </Flex>
      </Container>
    </>
  );
};

export default NewArrival;
