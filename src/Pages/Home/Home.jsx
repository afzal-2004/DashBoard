import "./HomeModule.css";
import { PiHandDepositDuotone, PiHandWithdraw } from "react-icons/pi";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import Graph from "../../../public/Graph.svg";
const Home = () => {
  return (
    <>
      <section
        className=" bg-white sm:w-[90%] w-full border  rounded-xl  px-3 py-4 text-[24px]  flex
       flex-wrap justify-between"
      >
        <div className="  md:flex sm:gap-4 gap-y-4 ">
          <ul>
            <li className="opacity-60"> Total Profit Value</li>
            <li className="font-semibold">₹ 112,312.24</li>
          </ul>
          <ul>
            <li className="opacity-60">Wallet Balances</li>
            <li className=" font-semibold">22.39401000</li>
          </ul>
          <ul>
            <li>₹ 1,300.00</li>
          </ul>
        </div>
        <div className=" flex gap-5  p-2">
          <button className="deposit">
            <PiHandDepositDuotone />
            Deposit
          </button>
          <button className="deposit">
            <PiHandWithdraw />
            Withdraw
          </button>
        </div>
      </section>
      <section className="    sm:w-[90%] w-full sm:mt-[2%] mt-[5%]">
        <div
          className="  bg-white sm:mt-[2%] mt-[5%]  
         sm:w-[50%]  rounded-sm  p-3 "
        >
          <header className=" flex justify-between ">
            <ul className="">
              <li className=" opacity-50">Current Price</li>
              <li>₹26,670.25</li>
            </ul>

            <div className=" p-2 gap-2 flex justify-evenly ">
              <button className="BuyandSell">
                <FaPlusCircle />
                Buy
              </button>
              <button className="BuyandSell">
                <FaMinusCircle />
                Sell
              </button>
            </div>
          </header>
          <div className=" sm:mt-[10%] mt-[10%]">
            <img src={Graph} alt="" />
          </div>
        </div>
        <div></div>
      </section>
    </>
  );
};

export default Home;
