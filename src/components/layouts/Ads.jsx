import { ContactRoundIcon } from "lucide-react";
import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import adone from "/src/assets/adone.jpg"
import adtwo from "/src/assets/adtwo.png"
import adthree from "/src/assets/adthree.jpg"
import { Link } from "react-router-dom";

const Ads = () => {
  return (
    <div className="py-[130px]">
      <Container>
        <Flex>
            <div className="">
                <Link to={"/"}>
                <Image src={adone}/>
                </Link>
            </div>
            <div className="pl-[30px] flex flex-col gap-7">
                <Link to={"/"}>
                <Image src={adtwo}/>
                </Link>
                <Link to={"/"}>
                <Image src={adthree}/>
                </Link>
            </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Ads;
