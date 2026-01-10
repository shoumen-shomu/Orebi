import Container from "../Container";
import Flex from "../Flex";
import { TiArrowSortedDown } from "react-icons/ti";
import { FaUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { VscThreeBars } from "react-icons/vsc";
import { useState } from "react";

const Searchbar = () => {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(false);
  return (
    <div className="">
      <div className="py-[15px] bg-[#F5F5F3]">
        <Container>
          <Flex className={"justify-between"}>
            <div className="relative ">
              <Link
                to={"/"}
                className={"flex items-center"}
                onClick={() => setOpen(!open)}
              >
                <VscThreeBars />
                <h5 className="pl-2.5 font-sans font-normal text-[14px] color-[#262626]">
                  Shop by Category
                </h5>
              </Link>

              {open && (
                <div
                  className="fixed inset-0 z-10"
                  onClick={() => setOpen(false)}
                ></div>
              )}
              <div
                className={`w-[265px] bg-[#262626] absolute left-0 top-7 z-20
      transition-all duration-300 ease-in-out
      ${
        open
          ? "opacity-100 visible translate-y-0"
          : "opacity-0 invisible -translate-y-3"
      }`}
              >
                <ul>
                  <li className="font-sans font-normal text-[16px] text-[#c9c3c3] py-4 px-5 border-b border-b-[#424040] hover:text-white hover:ml-2 hover:font-semibold duration-300">
                    <Link to={"/"}>Accesories</Link>
                  </li>
                  <li className="font-sans font-normal text-[16px] text-[#c9c3c3] py-4 px-5 border-b border-b-[#424040] hover:text-white hover:ml-2 hover:font-semibold duration-300">
                    <Link to={"/"}>Furniture</Link>
                  </li>
                  <li className="font-sans font-normal text-[16px] text-[#c9c3c3] py-4 px-5 border-b border-b-[#424040] hover:text-white hover:ml-2 hover:font-semibold duration-300">
                    <Link to={"/"}>Electronics</Link>
                  </li>
                  <li className="font-sans font-normal text-[16px] text-[#c9c3c3] py-4 px-5 border-b border-b-[#424040] hover:text-white hover:ml-2 hover:font-semibold duration-300">
                    <Link to={"/"}>Clothes</Link>
                  </li>
                  <li className="font-sans font-normal text-[16px] text-[#c9c3c3] py-4 px-5 border-b border-b-[#424040] hover:text-white hover:ml-2 hover:font-semibold duration-300">
                    <Link to={"/"}>Bags</Link>
                  </li>
                  <li className="font-sans font-normal text-[16px] text-[#c9c3c3] py-4 px-5 border-b border-b-[#424040] hover:text-white hover:ml-2 hover:font-semibold duration-300">
                    <Link to={"/"}>Home Appliances</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex py-4 pl-5 w-[400px] bg-white">
              <input
                className="border-0 outline-0 w-[85%] placeholder:text-[##C4C4C4] text-[14px]"
                type="text"
                placeholder="Search Products"
              />{" "}
              <FaSearch className="w-[15%]" />
            </div>
            <div className="flex items-center relative">
              <div className="">
                <Link
                  to={"/"}
                  className="flex items-center"
                  onClick={() => setUser(!user)}
                >
                  {" "}
                  <div className="">
                    <FaUser />
                  </div>
                  <div className="pr-10 pl-2.5">
                    <TiArrowSortedDown />
                  </div>
                </Link>
                {user && (
                  <>
                    {/* dropdown korar por scrren er jekono jaigay click korle dropdown close hoye jabe */}
                    <div
                      className="fixed inset-0 z-10"
                      onClick={() => setUser(false)}
                    ></div>
                    {/* -------------- */}

                    <div className="w-[200px] bg-white text-center absolute left-0 top-7 translate-x-[-50%] z-20 transition-all">
                      <ul>
                        <li className="font-sans font-normal text-sm text-[#262626] py-[15px] hover:bg-black hover:w-full hover:text-white hover:font-bold duration-300">
                          <Link to={"/signup"}>Sign UP</Link>
                        </li>
                        <li className="font-sans font-normal text-sm text-[#262626] py-[15px] hover:bg-black hover:w-full hover:text-white hover:font-bold duration-300">
                          <Link to={"/login"}>Log In</Link>
                        </li>
                        <li className="font-sans font-normal text-sm text-[#262626] py-[15px] hover:bg-black hover:w-full hover:text-white hover:font-bold duration-300">
                          <Link to={"/myaccount"}>My Account</Link>
                        </li>
                      </ul>
                    </div>
                  </>
                )}
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
      <div className="h-px bg-[#979797]"></div>
    </div>
  );
};

export default Searchbar;
