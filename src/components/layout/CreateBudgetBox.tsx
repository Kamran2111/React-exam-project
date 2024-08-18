import React from "react";
import CommonButton from "../common/Button";
import { useNavigate } from "react-router-dom";

const CreateBudget = () => {
  const navigate = useNavigate();
  const handleOpenCreateBudgetPage = () => {
    navigate("/budgetHistory", {
      replace: true,
    });
  };

  return (
    <section>
      <div className="flex items-center justify-between bg-white m-[16px] rounded-[10px]">
        <h4 className="text-[20px] leading-[27px] font-extrabold mt-[37px] mb-[36px] ml-[24px]">
          Create a Budget
        </h4>
        <CommonButton
          onClick={handleOpenCreateBudgetPage}
          className="text-[14px] text-white font-normal leading-[24px] mt-[27px] mr-[50px] mb-[27px] w-[250px] h-[46px] rounded-[10px]"
          label="Create Budget "
        />
      </div>
    </section>
  );
};

export default CreateBudget;
