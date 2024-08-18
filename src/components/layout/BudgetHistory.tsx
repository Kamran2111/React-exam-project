import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../store/store";
import { fetchBudgetInfo } from "../store/operations";

const BudgetHistory: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { budget, isLoading, error } = useSelector(
    (state: RootState) => state.budget
  );

  useEffect(() => {
    dispatch(fetchBudgetInfo());
  }, [dispatch]);

  return (
    <section className="bg-backgroundColor mt-[16px] mr-[16px] ml-[16px] mb-[140px]">
      <div className="bg-white pt-[24px] pl-[20px] pr-[76px] pb-[80px]">
        {isLoading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}

        <h4 className="text-[20px] leading-[27px] font-extrabold">
          Budget History
        </h4>
        <div className="grid grid-cols-[1fr_2fr_3fr_2fr_2fr_2fr_2fr] ">
          <p className="text-xs font-extrabold text-gray-700 mt-[32px] mb-[24px]">
            S/N
          </p>
          <p className="text-xs font-extrabold text-gray-700 mt-[32px] mb-[24px]">
            Budget No.
          </p>
          <p className="text-xs font-extrabold text-gray-700 mt-[32px] mb-[24px]">
            Budget Description
          </p>
          <p className="text-xs font-extrabold text-gray-700 mt-[32px] mb-[24px]">
            Budgeted Amunt (₦){" "}
          </p>
          <p className="text-xs font-extrabold text-gray-700 mt-[32px] mb-[24px]">
            Actual Amount (₦)
          </p>
          <p className="text-xs font-extrabold text-gray-700 mt-[32px] mb-[24px]">
            Variance (₦)
          </p>
          <p className="text-xs font-extrabold text-gray-700 mt-[32px] mb-[24px]">
            Date
          </p>
        </div>
        {!isLoading && !error && (
          <ul>
            {budget.length > 0 ? (
              budget.map((item) => (
                <li
                  className="grid grid-cols-[1fr_2fr_3fr_2fr_2fr_2fr_2fr] gap-4 border-b border-gray-300 py-2"
                  key={item.id}
                >
                  <span className="text-[14px] leading-[24px] font-normal text-gray-700  ">
                    {item.SN}
                  </span>
                  <span className="text-[14px] leading-[24px] font-normal text-gray-700  ">
                    {item.BudgetNo}
                  </span>
                  <span className="text-[14px] leading-[24px] font-normal text-gray-700  ">
                    {item.BudgetDescription}
                  </span>
                  <span className="text-[14px] leading-[24px] font-normal text-gray-700  ">
                    {item.BudgetedAmount}
                  </span>
                  <span className="text-[14px] leading-[24px] font-normal text-gray-700 ">
                    {item.ActualAmount}
                  </span>
                  <span className="text-[14px] leading-[24px] font-normal text-gray-700  ">
                    {item.Variance}
                  </span>
                  <span className="text-[14px] leading-[24px] font-normal text-gray-700 ">
                    {new Date(item.Date).toLocaleDateString()}
                  </span>
                </li>
              ))
            ) : (
              <li className="text-25px leading-25px text-black">
                No budget data available
              </li>
            )}
          </ul>
        )}
      </div>
    </section>
  );
};

export default BudgetHistory;
