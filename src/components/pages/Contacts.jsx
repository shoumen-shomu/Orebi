import React from "react";
import SubHeading from "../SubHeading";
import Container from "../Container";
import Button from "../Button";
import { Link } from "react-router-dom";

const Contacts = () => {
  return (
    <div>
      <div className="pt-[124px] pb-[131px]">
        <Container>
          <SubHeading className={"pb-3"} text={"Contacts"} />
          <p className="font-sans font-normal text-[12px] text-[#767676] pb-[125px]">
            Home > Contacts
          </p>
          <div className="">
            <h2 className="font-sans font-bold text-[39px] text-[#262626] ">
              Fill up a Form
            </h2>
            <div className="contactsFrom mt-[42px]">
              <div className=" w-[780px] mb-[23px] border-b border-[#F0F0F0]">
                <p className="font-sans font-bold text-base text-[#262626] leading-[23px]">
                  Name
                </p>
                <input
                  className="w-full outline-none pt-[11px] pb-4"
                  type="text"
                  placeholder="Your name here"
                />
              </div>
              <div className=" w-[780px] mb-[23px] border-b border-[#F0F0F0]">
                <p className="font-sans font-bold text-base text-[#262626] leading-[23px]">
                  Email
                </p>
                <input
                  className="w-full outline-none pt-[11px] pb-4"
                  type="mail"
                  placeholder="Your email here"
                />
              </div>
              <div className=" w-[780px] border-b border-[#F0F0F0]">
                <p className="font-sans font-bold text-base text-[#262626] leading-[23px]">
                  Message
                </p>
                <textarea
                  className="w-full outline-none pt-[11px] min-h-[120px]"
                  type="text"
                  placeholder="Your message here"
                />
              </div>
              <Link to={"/"}>
                <Button
                  className={"inline-block py-4 px-[84px] mt-[30px]"}
                  btnText={"Post"}
                />
              </Link>
            </div>
            <iframe className="mt-[140px]"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29215.900364434907!2d90.35314669126258!3d23.747823533928788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b7a55cd36f%3A0xfcc5b021faff43ea!2sCreative%20IT%20Institute!5e0!3m2!1sen!2sbd!4v1767902359438!5m2!1sen!2sbd"
              width="1320"
              height="572"
            ></iframe>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Contacts;
