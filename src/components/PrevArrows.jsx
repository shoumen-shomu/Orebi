import { FaLongArrowAltLeft } from "react-icons/fa";

const PrevArrows = (props) => {
  const { onClick } = props;
  return (
    <div
      className="w-[64px] h-[64px] rounded-[50%] bg-[#c7c7c7] absolute top-1/2 -translate-y-1/2 left-3 z-10 "
      onClick={onClick}
    >
      <FaLongArrowAltLeft className="text-2xl text-white absolute top-1/2 left-5 -translate-y-1/2 " />
    </div>
  );
};

export default PrevArrows;
