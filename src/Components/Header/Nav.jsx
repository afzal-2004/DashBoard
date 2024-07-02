/* eslint-disable react/prop-types */
import "./NavModule.css";
import { FaCircleUser } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";

const Nav = ({ setOpenSideBar }) => {
  return (
    <>
      <nav
        className={`  flex justify-between   items-center relative z-0  p-3  max-h-[100px] 
           w-[100%] `}
      >
        <div className=" flex  items-center t sm:text-[40px] text-[25px] font-medium   gap-3">
          <IoMenu
            onClick={() => setOpenSideBar(true)}
            className="sm:hidden flex"
          />
          <h1>DashBoard</h1>
        </div>

        <div>
          <FaCircleUser className="  text-[40px]" />
        </div>
      </nav>
    </>
  );
};

export default Nav;
