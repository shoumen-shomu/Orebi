import React from "react";
import Container from "../Container";
import SubHeading from "../SubHeading";
import Button from "../Button";

const Login = () => {
  return (
    <div>
      <div className="pt-[124px] pb-[131px]">
        <Container>
          <SubHeading className={"pb-3"} text={"Login"} />
          <p className="font-sans font-normal text-[12px] text-[#767676] pb-[127px]">
            Home > Login
          </p>
          <p className="w-[644px] font-sans font-normal text-base text-[#767676] leading-[30px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the.
          </p>
          <div className="bg-[#F0F0F0] h-px mt-[62px] mb-[57px]"></div>
          <div className="loginForm">
            <h2 className="font-sans font-bold text-[39px] text-[#262626] pb-[42px]">
              Returning Customer
            </h2>
            <div className="flex gap-x-10">
              <div className="w-[508px] border-b border-[#F0F0F0]">
                <h4 className="font-sans font-bold text-base text-[#262626] leading-[23px]">
                  Email address
                </h4>
                <input
                  className="w-full outline-none pt-[10px] pb-4 placeholder:font-sans font-normal text-[14px] text-[#767676]"
                  type="mail"
                  placeholder="company@domain.com"
                />
              </div>
              <div className="w-[508px] border-b border-[#F0F0F0]">
                <h4 className="font-sans font-bold text-base text-[#262626] leading-[23px]">
                  Password
                </h4>
                <input
                  className="w-full outline-none pt-[10px] pb-4 placeholder:font-sans font-normal text-[14px] text-[#767676]"
                  type="password"
                  placeholder=""
                />
              </div>
            </div>
            <Button
              className={
                "inline-block py-4 px-[77px] border-2 border-black mt-[29px] mb-[70px] hover:bg-transparent hover:text-black duration-300"
              }
              btnText={"Log in"}
            />
          </div>
          <div className="bg-[#F0F0F0] h-px mt-[62px] mb-[57px]"></div>
          <div className="">
            <h2 className="font-sans font-bold text-[39px] text-[#262626]">
              New Customer
            </h2>
            <p className="w-[644px] pt-[38px] pb-[51px] font-sans font-normal text-base text-[#767676] leading-[30px] ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the.
            </p>
            <Button
              className={"inline-block py-4 px-[77px] "}
              btnText={"Continue"}
            />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Login;
