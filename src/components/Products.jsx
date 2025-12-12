import Badge from "./Badge";
import Flex from "./Flex";
import Image from "./Image";
import { FaHeart } from "react-icons/fa6";
import { LuRefreshCw } from "react-icons/lu";
import { FaShoppingCart } from "react-icons/fa";

const Products = ({ productsImg, badgeText, productName, productPrice }) => {
  return (
    <div className="relative group">
      <Image src={productsImg} />
      <Badge className={"absolute top-5 left-5"} badgeText={badgeText} />
      {/* Hover Part Start */}
      <div className="p-5 bg-white absolute bottom-13 left-0 opacity-0 translate-y-5 group-hover:opacity-90 group-hover:translate-y-0 duration-500 w-full ">
        <Flex className={"justify-end-safe gap-x-3.5"}>
          <h5 className="font-sans font-normal text-4 text-secendary hover:text-primary duration-500 hover:font-bold">Add to Wish List</h5>
          <FaHeart /> 
        </Flex>
        <Flex className={"justify-end-safe gap-x-3.5 py-4"}>
          <h5 className="font-sans font-normal text-4 text-secendary hover:text-primary duration-500 hover:font-bold">Compare</h5>
        <LuRefreshCw />
        </Flex>
        <Flex className={"justify-end-safe gap-x-3.5"}>
          <h5 className="font-sans font-normal text-4 text-secendary hover:text-primary duration-500 hover:font-bold">Add to Cart</h5>
          <FaShoppingCart />
        </Flex>
      </div>
      {/* Hover Part End */}
      <Flex className={"justify-between pt-6"}>
        <h3 className="font-sans font-bold text-[20px] text-primary">
          {productName}
        </h3>
        <p className="font-sans font-normal text-4 text-secendary">
          {productPrice}
        </p>
      </Flex>
    </div>
  );
};

export default Products;
