import React from "react";
import { RxCross1 } from "react-icons/rx";
import { MdCheck } from "react-icons/md";

const MainPrice = ({ feature }) => {
  return (
    <div className="w-full m-auto bg-gradient-to-b from-green-100 via-white to-green-50 rounded-lg shadow-lg overflow-hidden">
      <div className="flex sm:flex-row md:flex-row">
        {/* Left Column */}
        <div className="flex flex-col w-full md:w-1/4 mb-12 border-r border-green-300">
          <div className="h-20 flex justify-center items-center bg-gradient-to-r from-green-500 to-green-600">
            <h1 className="text-2xl text-white font-bold uppercase tracking-wide">
              Features
            </h1>
          </div>
          <div className="flex flex-col text-center text-lg text-green-800">
            {feature?.length > 0 &&
              feature.map((item, index) => (
                <div
                  key={index}
                  className="h-20 flex justify-center items-center border-b border-green-300 bg-white hover:bg-green-50 transition-all duration-300"
                >
                  <h1>{item.title}</h1>
                </div>
              ))}
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full md:w-3/4 overflow-x-auto">
          <table className="w-full text-center border-collapse border border-green-300">
            <thead>
              <tr className="bg-gradient-to-r from-green-500 text-center to-green-600 text-white text-xl h-20 font-bold">
                <th className="px-4 py-2">Basic</th>
                <th className="px-4 py-2">Standard</th>
                <th className="px-4 py-2">Premium</th>
              </tr>
            </thead>
            <tbody>
              {feature.map((item, index) => (
                <tr
                  key={index}
                  className="h-20 border-b border-green-300 hover:bg-green-100 transition-all duration-300"
                >
                  {item?.features?.length > 0 &&
                    item.features.map((pkg, pkgIndex) => (
                      <td
                        key={pkgIndex}
                        className="text-center text-lg font-medium px-4 py-2"
                      >
                        {pkg === false ? (
                          <RxCross1 className="inline-block text-red-500 font-bold text-2xl" />
                        ) : (
                          <MdCheck className="inline-block text-green-500 font-bold text-2xl" />
                        )}
                      </td>
                    ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MainPrice;
