import { FaLongArrowAltRight } from "react-icons/fa";

const NextArrows = (props) => {
  const { onClick } = props;
  return (
    <div className="w-16 h-16 rounded-[50%] bg-[#c7c7c7] absolute top-1/2 -translate-y-1/2 right-3  " onClick={onClick}>
      <FaLongArrowAltRight className="text-2xl text-white absolute top-1/2 left-5 -translate-y-1/2 " />
    </div>
  );
};

export default NextArrows;
