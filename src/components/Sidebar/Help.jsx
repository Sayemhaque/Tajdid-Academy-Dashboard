import Button from "../Button/Button";
import QuestionMarkIcon from "../../assets/icons/Vector (1).png";
const Help = () => {
  return (
    <div className="bg-[#F5FAFF] px-3 py-12 space-y-3 mx-auto relative rounded-[10px]">
      <h4 className="text-md text-center font-bold pt-8">Help Center</h4>
      <p className="text-center text-[12px] text-[#667085] ">
        Getting trouble on Simplebook? Reach out and solve your problem
      </p>
      <Button
        styles={"bg-[#1570EF] w-full text-white"}
        content={"Consult Now"}
      />
      <div className="absolute  -top-[5px] left-[94px]  w-14 h-14 bg-white rounded-full flex  justify-center items-center shadow-lg">
        <img src={QuestionMarkIcon} alt="" />
      </div>
    </div>
  );
};

export default Help;

// 