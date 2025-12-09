import { Link } from "react-router-dom";
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import logo from "/src/assets/logo.png";


const Header = () => {
  return (
   <div className="">
     <div className="py-8">
      <Container>
        <Flex>
          <div className="w-[40%]">
            <Link to={"/"}>
              <Image src={logo} />
            </Link>
          </div>
          <div className="w-[60%]">
            <ul className="flex items-center gap-x-8 ">
              <li className="">
                <Link className="font-sans font-normal text-[14px] text-secendary hover:text-primary hover:font-extrabold duration-500" to={"/"}>Home</Link>
              </li>
              <li>
                <Link className="font-sans font-normal text-[14px] text-secendary hover:text-primary hover:font-extrabold duration-500" to={"/shop"}>Shop</Link>
              </li>
              <li>
                <Link className="font-sans font-normal text-[14px] text-secendary hover:text-primary hover:font-extrabold duration-500" to={"/about"}>About</Link>
              </li>
              <li>
                <Link className="font-sans font-normal text-[14px] text-secendary hover:text-primary hover:font-extrabold duration-500" to={"/contacts"}>Contacts</Link>
              </li>
            </ul>
          </div>
        </Flex>
      </Container>
    </div>
    <div className="h-[1px] bg-[#979797]"></div>
   </div>
  );
};

export default Header;
