import { useEffect, useState } from "react";

const HomeLoan = () => {
  const [loanAmt, setLoanAmt] = useState("5000000");
  const [loanRate, setLoanRate] = useState("9");
  const [loanTenure, setLoanTenure] = useState("20");
  const [emi, setEmi] = useState(0);
  const [totalInterestPayable, setTotalInterestPayable] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);

  const calculateEmi = () => {
    let p = Number(loanAmt);
    let r = Number(loanRate) / 12 / 100;
    let n = Number(loanTenure) * 12;

    const EMI = (p * r * (1 + r) ** n) / ((1 + r) ** n - 1);
    return EMI;
  };

  /** ---> calculating emi on value change */
  useEffect(() => {
    const emi = calculateEmi();

    setEmi(+emi.toFixed());
    const totalPayment = +emi * +loanTenure * 12;
    setTotalPayment(+totalPayment.toFixed());
    setTotalInterestPayable(+(totalPayment - +loanAmt).toFixed());
  }, [loanAmt, loanRate, loanTenure]);

  return (
    <div>
      <div className="p-10">
        <div className="w-full flex  gap-10 ">
          <span className="text-xl">Home Loan Amount</span>
          <input
            type="text"
            value={Number(loanAmt).toLocaleString("en-IN")}
            onChange={(e) => setLoanAmt(e.target.value)}
            className="border border-gray-500 px-5 py-1 rounded-sm"
          />
        </div>
        <div className="w-full mt-5">
          <input
            type="range"
            min={0}
            max={200}
            value={loanAmt ? +loanAmt / 100000 : 0}
            onChange={(e) =>
              setLoanAmt(String(Number(e.target.value) * 100000))
            }
            className="w-full"
          />
        </div>
        <div className="my-5" />
        <div className="w-full flex  gap-10">
          <span className="text-xl">Interest Rate</span>
          <input
            type="number"
            value={loanRate}
            onChange={(e) => setLoanRate(e.target.value)}
            className="border border-gray-500 px-5 py-1 rounded-sm"
          />
        </div>
        <div className="w-full mt-5">
          <input
            type="range"
            min={5}
            max={20}
            value={loanRate ? loanRate : 5}
            onChange={(e) => setLoanRate(e.target.value)}
            className="w-full"
          />
        </div>
        <div className="my-5" />
        <div className="w-full flex  gap-10">
          <span className="text-xl">Loan Tenure</span>
          <input
            type="number"
            value={loanTenure}
            onChange={(e) => setLoanTenure(e.target.value)}
            className="border border-gray-500 px-5 py-1 rounded-sm"
          />
        </div>
        <div className="w-full mt-5">
          <input
            type="range"
            min={0}
            max={30}
            value={loanTenure ? loanTenure : 0}
            onChange={(e) => setLoanTenure(e.target.value)}
            className="w-full"
          />
        </div>
      </div>

      <div className="w-full border-t border-gray-500 text-gray-600">
        <div className="w-full h-16 flex flex-col gap-1 justify-center items-center border-b border-dashed border-gray-500 ">
          <h3>Loan EMI</h3>
          <h3 className="font-semibold text-black text-xl">₹ {emi}</h3>
        </div>
        <div className="w-full h-16 flex flex-col gap-1 justify-center items-center border-b border-dashed border-gray-500 ">
          <h3>Total Interest Payable</h3>
          <h3 className="text-black font-semibold">₹ {totalInterestPayable}</h3>
        </div>
        <div className="w-full h-20 flex flex-col gap-1 justify-center items-center text-center">
          <h3>
            Total Payment <br /> (Principal + Interest)
          </h3>
          <h3 className="text-black font-semibold">₹ {totalPayment}</h3>
        </div>
      </div>
    </div>
  );
};

export default HomeLoan;
