import React from 'react';
import Button from "../Button/Button";
import QuestionMarkIcon from "../../assets/icons/Vector (1).png";

const Help = () => {
  return (
    <div className="bg-[#F5FAFF] px-3 pt-5 pb-5 space-y-3 mx-auto relative rounded-[10px]">
      <h4 className="text-md text-center font-bold pt-4">Help Center</h4>
      <p className="text-center text-[12px] text-[#667085] px-4">
        Getting trouble on Simplebook? Reach out and solve your problem
      </p>
      <Button
        styles={"bg-[#1570EF] w-full text-white"}
        content={"Consult Now"}
      />
      <div className="absolute  -top-[50px] left-[110px]  w-14 h-14 bg-white rounded-full flex  justify-center items-center shadow-lg">
        <img src={QuestionMarkIcon} alt="" />
      </div>
    </div>
  );
};

export default Help;
