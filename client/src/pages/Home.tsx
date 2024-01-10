import { useState } from "react";
import HomeLoan from "../components/HomeLoan";
import PersonalLoan from "../components/PersonalLoan";
import CarLoan from "../components/CarLoan";

const Home = () => {
  const [category, setCategory] = useState<"HOME" | "PERSONAL" | "CAR">("HOME");
  return (
    <div className="w-full flex justify-center ">
      <div className="w-[90%] md:w-[60%] border-[3px] border-dashed  border-gray-500  my-10 p-5">
        <div className="flex ">
          <div className=" h-10 flex   ">
            <div
              onClick={() => setCategory("HOME")}
              className={`w-32 h-full flex justify-center items-center bg-gray-200   cursor-pointer rounded-tl-md border border-gray-500 border-r-0 ${
                category === "HOME" && "border-b-0 bg-white"
              }`}
            >
              Home Loan
            </div>
            <div
              onClick={() => setCategory("PERSONAL")}
              className={`w-32 h-full flex justify-center items-center bg-gray-200   cursor-pointer  border border-gray-500 border-r-0 ${
                category === "PERSONAL" && "border-b-0 bg-white"
              }`}
            >
              Personal Loan
            </div>
            <div
              onClick={() => setCategory("CAR")}
              className={`w-32 h-full flex justify-center items-center bg-gray-200   cursor-pointer rounded-tr-md border border-gray-500  ${
                category === "CAR" && "border-b-0 bg-white"
              }`}
            >
              Car Loan
            </div>
          </div>
          <div className="w-full border-b border-gray-500 "></div>
        </div>
        <div className="w-full border border-t-0 border-gray-500">
          {category === "HOME" && <HomeLoan />}
          {category === "PERSONAL" && <PersonalLoan />}
          {category === "CAR" && <CarLoan />}
        </div>
      </div>
    </div>
  );
};

export default Home;
