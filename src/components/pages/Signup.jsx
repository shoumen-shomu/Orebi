import React from "react";
import Container from "../Container";
import SubHeading from "../SubHeading";
import Button from "../Button";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div>
      <div className="pt-[124px] pb-[131px]">
        <Container>
          <SubHeading className={"pb-3"} text={"Sign up"} />
          <p className="font-sans font-normal text-[12px] text-[#767676] pb-[127px]">
            Home > Sign up
          </p>
          <p className="w-[644px] font-sans font-normal text-base text-[#767676] leading-[30px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the.
          </p>
          <div className="bg-[#F0F0F0] h-px mt-[62px] mb-[57px]"></div>
          <div className="personalDetails">
            <h2 className="font-sans font-bold text-[39px] text-[#262626] pb-[42px]">
              Your Personal Details
            </h2>
            <div className="flex gap-x-10">
              <div className="w-[508px] border-b border-[#F0F0F0]">
                <h4 className="font-sans font-bold text-base text-[#262626] leading-[23px]">
                  First Name
                </h4>
                <input
                  className="w-full outline-none pt-[10px] pb-4 placeholder:font-sans font-normal text-[14px] text-[#767676]"
                  type="text"
                  placeholder="First Name"
                />
              </div>
              <div className="w-[508px] border-b border-[#F0F0F0]">
                <h4 className="font-sans font-bold text-base text-[#262626] leading-[23px]">
                  Last Name
                </h4>
                <input
                  className="w-full outline-none pt-[10px] pb-4 placeholder:font-sans font-normal text-[14px] text-[#767676]"
                  type="text"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className="flex gap-x-10 mt-7">
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
                  Telephone
                </h4>
                <input
                  className="w-full outline-none pt-[10px] pb-4 placeholder:font-sans font-normal text-[14px] text-[#767676]"
                  type="number"
                  placeholder="Your phone number"
                />
              </div>
            </div>
          </div>
          <div className="bg-[#F0F0F0] h-px mt-[62px] mb-[57px]"></div>
          <div className="newCustomer">
            <h2 className="font-sans font-bold text-[39px] text-[#262626] pb-[42px]">
              New Customer
            </h2>
            <div className="flex gap-x-10">
              <div className="w-[508px] border-b border-[#F0F0F0]">
                <h4 className="font-sans font-bold text-base text-[#262626] leading-[23px]">
                  Address 1
                </h4>
                <input
                  className="w-full outline-none pt-[10px] pb-4 placeholder:font-sans font-normal text-[14px] text-[#767676]"
                  type="text"
                  placeholder="Your Address"
                />
              </div>
              <div className="w-[508px] border-b border-[#F0F0F0]">
                <h4 className="font-sans font-bold text-base text-[#262626] leading-[23px]">
                  Address 2
                </h4>
                <input
                  className="w-full outline-none pt-[10px] pb-4 placeholder:font-sans font-normal text-[14px] text-[#767676]"
                  type="text"
                  placeholder="-"
                />
              </div>
            </div>
            <div className="flex gap-x-10 mt-7">
              <div className="w-[508px] border-b border-[#F0F0F0]">
                <h4 className="font-sans font-bold text-base text-[#262626] leading-[23px]">
                  City
                </h4>
                <input
                  className="w-full outline-none pt-[10px] pb-4 placeholder:font-sans font-normal text-[14px] text-[#767676]"
                  type="mail"
                  placeholder="Your City"
                />
              </div>
              <div className="w-[508px] border-b border-[#F0F0F0]">
                <h4 className="font-sans font-bold text-base text-[#262626] leading-[23px]">
                  Post Code
                </h4>
                <input
                  className="w-full outline-none pt-[10px] pb-4 placeholder:font-sans font-normal text-[14px] text-[#767676]"
                  type="number"
                  placeholder="Post Code"
                />
              </div>
            </div>
            <div className="flex gap-x-10 mt-7">
              <div className="w-[508px] border-b border-[#F0F0F0]">
                <h4 className="font-sans font-bold text-base text-[#262626] leading-[23px]">
                  Country
                </h4>
                <select className="w-full outline-none pt-[10px] pb-4 placeholder:font-sans font-normal text-[14px] text-[#767676]">
                  <option
                    clasname={
                      "font-sans font-normal text-[14px] text-[#767676]"
                    }
                    value=""
                  >
                    Please select
                  </option>
                  <option
                    clasname={
                      "font-sans font-normal text-[14px] text-[#767676]"
                    }
                    value=""
                  >
                    Bangladesh
                  </option>
                  <option
                    clasname={
                      "font-sans font-normal text-[14px] text-[#767676]"
                    }
                    value=""
                  >
                    India
                  </option>
                  <option
                    clasname={
                      "font-sans font-normal text-[14px] text-[#767676]"
                    }
                    value=""
                  >
                    Nepal
                  </option>
                  <option
                    clasname={
                      "font-sans font-normal text-[14px] text-[#767676]"
                    }
                    value=""
                  >
                    Bhutan
                  </option>
                  <option
                    clasname={
                      "font-sans font-normal text-[14px] text-[#767676]"
                    }
                    value=""
                  >
                    Srilanka
                  </option>
                </select>
              </div>
              <div className="w-[508px] border-b border-[#F0F0F0]">
                <h4 className="font-sans font-bold text-base text-[#262626] leading-[23px]">
                  Region/State
                </h4>
                <select className="w-full outline-none pt-[10px] pb-4 placeholder:font-sans font-normal text-[14px] text-[#767676]">
                  <option
                    clasname={
                      "font-sans font-normal text-[14px] text-[#767676]"
                    }
                    value=""
                  >
                    Please select
                  </option>
                  <option
                    clasname={
                      "font-sans font-normal text-[14px] text-[#767676]"
                    }
                    value=""
                  >
                    Bangladesh
                  </option>
                  <option
                    clasname={
                      "font-sans font-normal text-[14px] text-[#767676]"
                    }
                    value=""
                  >
                    India
                  </option>
                  <option
                    clasname={
                      "font-sans font-normal text-[14px] text-[#767676]"
                    }
                    value=""
                  >
                    Nepal
                  </option>
                  <option
                    clasname={
                      "font-sans font-normal text-[14px] text-[#767676]"
                    }
                    value=""
                  >
                    Bhutan
                  </option>
                  <option
                    clasname={
                      "font-sans font-normal text-[14px] text-[#767676]"
                    }
                    value=""
                  >
                    Srilanka
                  </option>
                </select>
              </div>
            </div>
          </div>
          <div className="bg-[#F0F0F0] h-px mt-[62px] mb-[57px]"></div>
          <div className="password">
            <h2 className="font-sans font-bold text-[39px] text-[#262626] pb-[42px]">
              Your Password
            </h2>
            <div className="flex gap-x-10">
              <div className="w-[508px] border-b border-[#F0F0F0]">
                <h4 className="font-sans font-bold text-base text-[#262626] leading-[23px]">
                  Password
                </h4>
                <input
                  className="w-full outline-none pt-[10px] pb-4 placeholder:font-sans font-normal text-[14px] text-[#767676]"
                  type="password"
                  placeholder="Password"
                />
              </div>
              <div className="w-[508px] border-b border-[#F0F0F0]">
                <h4 className="font-sans font-bold text-base text-[#262626] leading-[23px]">
                  Repeat Password
                </h4>
                <input
                  className="w-full outline-none pt-[10px] pb-4 placeholder:font-sans font-normal text-[14px] text-[#767676]"
                  type="password"
                  placeholder="Repeat password"
                />
              </div>
            </div>
          </div>
          <div className="bg-[#F0F0F0] h-px mt-[62px] mb-[65px]"></div>
          <div className="flex gap-x-4 mb-[23px]">
            <input type="checkbox" />
            <p className="font-sans font-normal text-[14px] text-[#767676]">
              I have read and agree to the Privacy Policy
            </p>
          </div>
          <div className="flex items-center gap-x-4">
            <p className="font-sans font-normal text-[14px] text-[#767676]">
              Subscribe Newsletter
            </p>
            <div className="">
              <label className="mr-8">
                <input type="radio" name="Subscribe Newsletter" />
                <span className="font-sans font-normal text-[14px] text-[#767676] pl-1.5">Yes</span>
              </label>
              <label className="">
                <input type="radio" name="Subscribe Newsletter" />
                <span className="font-sans font-normal text-[14px] text-[#767676] pl-1.5">No</span>
              </label>
            </div>
          </div>
          <Link to={"/"}>
          <Button
              className={"inline-block py-4 px-[77px] mt-[27px]"}
              btnText={"Log in"}
            />
          </Link>
        </Container>
      </div>
    </div>
  );
};

export default Signup;
