import React from "react";
import CommonButton from "../common/Button";

const CreateBudget = () => {
  return (
    <section>
      <div className="flex items-center justify-between bg-white m-[16px]">
        <p className="text-[20px] leading-[27px] font-extrabold mt-[37px] mb-[36px] ml-[24px]">
          Create a Budget
        </p>
        <CommonButton
          className="text-[14px] font-normal leading-[24px] mt-[27px] mr-[50px] mb-[27px] w-[250px] h-[46px] rounded-[10px]"
          label="Create Budget "
        />
      </div>
    </section>
  );
};

export default CreateBudget;
