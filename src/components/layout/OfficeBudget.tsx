import React from "react";
import imgArrow from "../../assets/images/shape (1).png";
import imgBudget1 from "../../assets/images/Budget.png";
import imgBudget2 from "../../assets/images/Budget-2.png";
import imgBudget3 from "../../assets/images/budget-3.png";
import imgBudget4 from "../../assets/images/budget-4.png";
import CreateBudget from "./CreateBudget";

const OfficeBudget = () => {
  return (
    <section className="bg-backgroundColor">
      <div>
        <div className="flex items-center justify-center gap-5">
          {/*  */}
          <div className="flex items-center justify-center rounded-[20px] bg-white pt-[24px] pr-[20px] pb-[25px] pl-[20px]">
            <div className="mr-[30px]">
              <p className="text-2xl font-extrabold mr-2">₦23,000,000</p>
              <p className="text-base font-normal mr-2 mb-[20px]">
                Total annual budget
              </p>
              <img className="inline-block" src={imgArrow} alt="Arrow" />
              <span className="text-sm font-normal">
                5% more than last year
              </span>
            </div>
            <div className="w-[40px] h-[40px] bg-blue-100 rounded-full flex items-center justify-center">
              <img
                className="w-[35px] h-[35px] rounded-full"
                src={imgBudget1}
                alt="IMAGE"
              />
            </div>
          </div>

          {/*  */}

          <div className="flex items-center justify-center  gap-5 bg-white pt-[24px] pr-[20px] pb-[60px] pl-[20px] rounded-[20px]">
            <div className="mr-[30px]">
              <p className="text-2xl font-extrabold mr-2">₦10,000,000</p>
              <p className="text-base font-normal mr-2 mb-[20px]">
                Amount used, YTD
              </p>
            </div>
            <div className="w-[40px] h-[40px] bg-orange-200 rounded-full flex items-center justify-center">
              <img
                className="w-[35px] h-[35px] rounded-full"
                src={imgBudget2}
                alt="IMAGE"
              />
            </div>
          </div>
          {/*  */}

          <div className="flex items-center justify-center  gap-5  bg-white pt-[24px] pr-[20px] pb-[60px] pl-[20px] rounded-[20px]">
            <div>
              <p className="text-2xl font-extrabold mr-2">₦13,000,000</p>
              <p className="text-base font-normal mr-2 mb-[20px]">
                Total budget balance
              </p>
            </div>
            <div className="w-[40px] h-[40px] bg-purple-200 rounded-full flex items-center justify-center">
              <img
                className="w-[25px] h-[25px] rounded-full"
                src={imgBudget3}
                alt="IMAGE"
              />
            </div>
          </div>
          {/*  */}

          <div className="flex items-center justify-center gap-5  bg-white pt-[24px] pr-[20px] pb-[60px] pl-[20px] rounded-[20px] ">
            <div>
              <p className="text-2xl font-extrabold mr-2">48%</p>
              <p className="text-base font-normal mr-2 mb-[20px]">
                Budget % used
              </p>
            </div>
            <div className="w-[40px] h-[40px] bg-green-200 rounded-full flex items-center justify-center">
              <img
                className="w-[25px] h-[25px] rounded-full"
                src={imgBudget4}
                alt="IMAGE"
              />
            </div>
          </div>
        </div>
      </div>
      <CreateBudget />
    </section>
  );
};

export default OfficeBudget;
