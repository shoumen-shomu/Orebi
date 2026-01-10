import { Link } from "react-router-dom";
import Container from "../Container";
import SubHeading from "../SubHeading";

const MyAccount = () => {
  return (
    <div>
      <div className="pt-[124px] pb-[131px]">
        <Container>
          <SubHeading className={"pb-3"} text={"My Account"} />
          <p className="font-sans font-normal text-[12px] text-[#767676] pb-[127px]">
            Home > My Account
          </p>
          <div className="flex items-start gap-x-10">
            <div className="w-[234px]">
              <Link to={"/"}>
                <p className="pb-5 border-b border-[#F0F0F0] font-sans font-normal text-base text-[#767676] leading-[30px] hover:font-bold hover:text-[#262626] duration-300">
                  Dashboard
                </p>
              </Link>
              <Link to={"/"}>
                <p className="py-5 border-b border-[#F0F0F0] font-sans font-normal text-base text-[#767676] leading-[30px] hover:font-bold hover:text-[#262626] duration-300">
                  Others
                </p>
              </Link>
              <Link to={"/"}>
                <p className="py-5 border-b border-[#F0F0F0] font-sans font-normal text-base text-[#767676] leading-[30px] hover:font-bold hover:text-[#262626] duration-300">
                  Donwloads
                </p>
              </Link>
              <Link to={"/"}>
                <p className="py-5 border-b border-[#F0F0F0] font-sans font-normal text-base text-[#767676] leading-[30px] hover:font-bold hover:text-[#262626] duration-300">
                  Addresses
                </p>
              </Link>
              <Link to={"/"}>
                <p className="py-5 border-b border-[#F0F0F0] font-sans font-normal text-base text-[#767676] leading-[30px] hover:font-bold hover:text-[#262626] duration-300">
                  Account details
                </p>
              </Link>
              <Link to={"/login"}>
                <p className="py-5 border-b border-[#F0F0F0] font-sans font-normal text-base text-[#767676] leading-[30px] hover:font-bold hover:text-[#262626] duration-300">
                  Logout
                </p>
              </Link>
            </div>
            <div className="font-sans font-normal text-base text-[#767676] leading-[30px]">
              <p className="">
                Hello{" "}
                <span className="font-sans font-normal text-base text-[#262626] leading-[30px]">
                  admin
                </span>{" "}
                not{" "}
                <span className="font-sans font-normal text-base text-[#262626] leading-[30px]">
                  admin
                </span>
                ?{" "}
                <Link to={"/login"}>
                  <span className="font-sans font-normal text-base text-[#262626] leading-[30px]">
                    Log out
                  </span>
                </Link>
              </p>
              <p className="mt-10 font-sans font-normal text-base text-[#767676] leading-[30px]">
                From your account dashboard you can view your{" "}
                <span className="font-sans font-normal text-base text-[#262626] leading-[30px]">
                  recent orders
                </span>{" "}
                , manage your{" "}
                <span className="font-sans font-normal text-base text-[#262626] leading-[30px]">
                  shipping and billing addresses
                </span>
                , and{" "}
                <Link to={'/'}>
                  {" "}
                  <span className="font-sans font-normal text-base text-[#262626] leading-[30px]">
                    edit your password and account details.
                  </span>
                </Link>
              </p>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default MyAccount;
