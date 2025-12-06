import { Link } from "react-router-dom";
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import logo from "/src/assets/logo.png";

const Header = () => {
  return (
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
                <Link className={"hover:text-primary"} to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/shop"}>Shop</Link>
              </li>
              <li>
                <Link to={"/about"}>About</Link>
              </li>
              <li>
                <Link to={"/contact"}>Contact</Link>
              </li>
            </ul>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Header;
