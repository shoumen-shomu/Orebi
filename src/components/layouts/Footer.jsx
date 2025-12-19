import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import { Link } from "react-router-dom";
import Image from "../Image";
import footerlogo from "/src/assets/footerlogo.png";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="py-[55px] bg-[#F5F5F3]">
      <Container>
        <Flex className={"justify-between items-start pb-[60px]"}>
          <div className="">
            <h5 className="font-sans font-bold text-base text-[#262626] leading-[23px] pb-4 ">
              Menu
            </h5>
            <ul className="gap-y-4">
              <li>
                <Link
                  className={
                    "font-sans font-normal text-sm text-[#6D6D6D] hover:text-black hover:duration-500"
                  }
                  to={"/"}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className={
                    "font-sans font-normal text-sm text-[#6D6D6D] hover:text-black hover:duration-500"
                  }
                  to={"/"}
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  className={
                    "font-sans font-normal text-sm text-[#6D6D6D] hover:text-black hover:duration-500"
                  }
                  to={"/"}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className={
                    "font-sans font-normal text-sm text-[#6D6D6D] hover:text-black  hover:duration-500"
                  }
                  to={"/"}
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  className={
                    "font-sans font-normal text-sm text-[#6D6D6D] hover:text-black hover:duration-500"
                  }
                  to={"/"}
                >
                  Journal
                </Link>
              </li>
            </ul>
          </div>
          <div className="">
            <h5 className="font-sans font-bold text-base text-[#262626] leading-[23px] pb-4 ">
              SHOP
            </h5>
            <ul className="gap-y-4">
              <li>
                <Link
                  className={
                    "font-sans font-normal text-sm text-[#6D6D6D] hover:text-black hover:duration-500"
                  }
                  to={"/"}
                >
                  Category 1
                </Link>
              </li>
              <li>
                <Link
                  className={
                    "font-sans font-normal text-sm text-[#6D6D6D] hover:text-black hover:duration-500"
                  }
                  to={"/"}
                >
                  Category 2
                </Link>
              </li>
              <li>
                <Link
                  className={
                    "font-sans font-normal text-sm text-[#6D6D6D] hover:text-black hover:duration-500"
                  }
                  to={"/"}
                >
                  Category 3
                </Link>
              </li>
              <li>
                <Link
                  className={
                    "font-sans font-normal text-sm text-[#6D6D6D] hover:text-black hover:duration-500"
                  }
                  to={"/"}
                >
                  Category 4
                </Link>
              </li>
              <li>
                <Link
                  className={
                    "font-sans font-normal text-sm text-[#6D6D6D] hover:text-black hover:duration-500"
                  }
                  to={"/"}
                >
                  Category 5
                </Link>
              </li>
            </ul>
          </div>
          <div className="">
            <h5 className="font-sans font-bold text-base text-[#262626] leading-[23px] pb-4 ">
              HELP
            </h5>
            <ul className="gap-y-4">
              <li>
                <Link
                  className={
                    "font-sans font-normal text-sm text-[#6D6D6D] hover:text-black hover:duration-500"
                  }
                  to={"/"}
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  className={
                    "font-sans font-normal text-sm text-[#6D6D6D] hover:text-black hover:duration-500"
                  }
                  to={"/"}
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  className={
                    "font-sans font-normal text-sm text-[#6D6D6D] hover:text-black hover:duration-500"
                  }
                  to={"/"}
                >
                  Special E-shop
                </Link>
              </li>
              <li>
                <Link
                  className={
                    "font-sans font-normal text-sm text-[#6D6D6D] hover:text-blackhover:duration-500"
                  }
                  to={"/"}
                >
                  Shipping
                </Link>
              </li>
              <li>
                <Link
                  className={
                    "font-sans font-normal text-sm text-[#6D6D6D] hover:text-black hover:duration-500"
                  }
                  to={"/"}
                >
                  Secure Payments
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-sans font-bold text-[16px] leading-[23px] text-primary">
              (052) 611-5711
            </p>
            <p className="font-sans font-bold text-[16px] leading-[23px] text-primary">
              company@domain.com
            </p>
            <p className="font-sans font-normal text-sm text-[#6D6D6D] leading-6 pt-4">
              575 Crescent Ave. Quakertown, PA 18951
            </p>
          </div>
          <div className="">
            <Image src={footerlogo} />
          </div>
        </Flex>
        <Flex className={"justify-between"}>
          <div className="flex items-center gap-x-7">
            <FaFacebookF />
            <FaLinkedinIn />
            <FaInstagram />
          </div>
          <div className="font-sans font-normal text-sm text-[#6D6D6D]">
            <p>2020 Orebi Minimal eCommerce Figma Template by Adveits</p>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Footer;
