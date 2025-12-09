import { Link } from "react-router-dom";
import Container from "../Container";
import Flex from "../Flex";
import { PiNumberTwoBold } from "react-icons/pi";
import { MdLocalShipping } from "react-icons/md";
import ReturnIcon from "../../assets/icons/ReturnIcon";

const Intro = () => {
  return (
    <>
      <Link to={"/"}>
        <div class="bg-[url('/src/assets/banner.png')] py-[300px] bg-cover bg-center bg-no-repeat"></div>
      </Link>
      <div className="py-[22px]">
        <Container>
          <Flex className={"justify-between"}>
            <div className="flex items-center">
              <PiNumberTwoBold className={"text-4xl font-extrabold pr-1.5"} /> <p className="font-sans font-normal text-4 text-[#6D6D6D]">Two years warranty</p>
            </div>
            <div className="flex items-center">
              <MdLocalShipping className={"text-4xl font-extrabold pr-2.5"} /> <p className="font-sans font-normal text-4 text-[#6D6D6D]">Free shipping</p>
            </div>
            
            <div className="flex items-center">
              <ReturnIcon /><p className="font-sans font-normal text-4 text-[#6D6D6D] pl-2.5">Return policy in 30 days</p>
            </div>
            
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default Intro;
