import Container from "../Container";
import Flex from "../Flex";
import { AiOutlineAlignLeft } from "react-icons/ai";
import { TiArrowSortedDown } from "react-icons/ti";
import { FaUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Searchbar = () => {
  return (
    <div className="">
      <div className="py-[15px] bg-[#F5F5F3]">
        <Container>
          <Flex className={"justify-between"}>
            <div className="">
              <Link to={"/"} className={"flex items-center"}>
                <AiOutlineAlignLeft />
                <h5 className="pl-2.5 font-sans font-normal text-[14px] color-[#262626]">
                  Shop by Category
                </h5>
              </Link>
            </div>
            <div className="flex py-4 pl-[20px] w-[400px] bg-white">
              <input
                className="border-0 outline-0 w-[85%] placeholder:text-[##C4C4C4] text-[14px]"
                type="text"
                placeholder="Search Products"
              />{" "}
              <FaSearch className="w-[15%]" />
            </div>
            <div className="flex items-center">
              <div className="">
                <Link to={"/"}>
                  <FaUser />
                </Link>
              </div>
              <div className="pr-[40px] pl-[10px]">
                <Link to={"/"}>
                  <TiArrowSortedDown />
                </Link>
              </div>
              <div>
                <Link to={"/"}>
                  <FaCartShopping />
                </Link>
              </div>
            </div>
          </Flex>
        </Container>
      </div>
      <div className="h-[1px] bg-[#979797]"></div>
    </div>
  );
};

export default Searchbar;
