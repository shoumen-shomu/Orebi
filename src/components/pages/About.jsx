import Container from "../Container";
import SubHeading from "../SubHeading";
import Flex from "../Flex";
import Image from "../Image";
import clock from "/src/assets/clock.png";
import busket from "/src/assets/busket.png";
import Button from "../Button";

const About = () => {
  // let [allData, setAllData] = useState([]);
  // // useEffect(() => {
  // //   async function alldatas() {
  // //     let data = await axios.get("https://dummyjson.com/products");
  // //     setAllData(data.data.products);
  // //   }
  // //   alldatas();
  // // }, []);
  return (
    <div className="pt-[124px] pb-[131px]">
      <Container>
        <SubHeading className={"pb-3"} text={"About"} />
        <p className="font-sans font-normal text-[12px] text-[#767676]">
          Home > About
        </p>
        <Flex className={"gap-x-10 pt-[136px] pb-[128px]"}>
          <div className="relative">
            <Image src={clock} />
            <Button
              className={
                "w-[280px] absolute left-[50%] bottom-13 -translate-x-1/2"
              }
              btnText={"Our Brands"}
            />
          </div>
          <div className="relative">
            <Image src={busket} />
            <Button
              className={
                "w-[280px] absolute left-[50%] bottom-8 -translate-x-1/2"
              }
              btnText={"Our Stores"}
            />
          </div>
        </Flex>
        <p className="font-sans font-normal text-[39px] text-[#262626] leading-[52px] w-[1602px] pb-[118px]">
          Orebi is one of the world’s leading ecommerce brands and is
          internationally recognized for celebrating the essence of classic
          Worldwide cool looking style.
        </p>
        <Flex className={"gap-x-10 items-start"}>
          <div className="">
            <h5 className="font-bold font-sans text-[36px] text-[#262626] leading-9 pb-[11px]">
              Our Vision
            </h5>
            <p className="font-normal font-sans text-base text-[#767676] leading-[30px] w-[506px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
          </div>
          <div className="">
            <h5 className="font-bold font-sans text-[36px] text-[#262626] leading-9 pb-[11px]">
              Our Story
            </h5>
            <p className="font-normal font-sans text-base text-[#767676] leading-[30px] w-[506px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic.
            </p>
          </div>
          <div className="">
            <h5 className="font-bold font-sans text-[36px] text-[#262626] leading-9 pb-[11px] ">
              Our Brands
            </h5>
            <p className="font-normal font-sans text-base text-[#767676] leading-[30px] w-[506px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley.
            </p>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default About;
