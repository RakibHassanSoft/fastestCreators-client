import React from "react";
import { RxCross1 } from "react-icons/rx";
import { MdCheck } from "react-icons/md";

const MainPrice = ({ feature }) => {
  return (
    <div className="w-full mx-auto bg-gradient-to-b from-[#042a0f] via-[#064213] to-[#0a5e1c] rounded-lg shadow-lg overflow-x-auto">
     
      <table className="min-w-[700px] w-full text-center border-collapse border border-green-700 rounded-md">
        <thead>
          <tr className="bg-gradient-to-r from-green-800 to-green-900 text-white text-xl h-20 font-bold">
            <th className="sticky left-0 bg-green-900 z-20 px-6 py-3 text-left rounded-l-md">
              Features
            </th>
            <th className="px-6 py-3">Basic</th>
            <th className="px-6 py-3">Standard</th>
            <th className="px-6 py-3 rounded-r-md">Premium</th>
          </tr>
        </thead>
        <tbody>
          {feature?.map((item, idx) => (
            <tr
              key={idx}
              className="
                border-t border-green-700 
                hover:bg-black hover:text-white 
                group
                transition-colors duration-300
              "
            >
              <td
                className="
                  sticky left-0 bg-green-900 text-left text-green-300 font-semibold px-6 py-4 whitespace-nowrap z-10
                  group-hover:bg-black group-hover:text-white
                  transition-colors duration-300
                "
              >
                {item.title}
              </td>
              {item.features?.map((hasFeature, i) => (
                <td
                  key={i}
                  className="px-6 py-4 text-lg font-medium"
                >
                  {hasFeature ? (
                    <MdCheck className="mx-auto text-green-400 group-hover:text-white text-2xl transition-colors duration-300" />
                  ) : (
                    <RxCross1 className="mx-auto text-red-500 group-hover:text-white text-2xl transition-colors duration-300" />
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MainPrice;
