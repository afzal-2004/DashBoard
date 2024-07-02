/* eslint-disable react/prop-types */
import "./SidebarModule.css";
import { IoCloseSharp } from "react-icons/io5";
import { BiSolidDashboard } from "react-icons/bi";
import { TbArrowsDoubleSwNe } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";

const Sidebar = ({ setOpenSideBar }) => {
  return (
    <>
      <section
        className={`  sm:flex flex-col  max-w-[300px] min-h-[100vh] p-5  z-50   relative  bg-slate-200 
           visible  sm:bg-white`}
      >
        <div className=" flex flex-col gap-4">
          <IoCloseSharp
            className=" absolute top-1 right-2  sm:hidden text-[40px]"
            onClick={() => {
              setOpenSideBar(false);
            }}
          />

          <h1 className=" sm:text-[40px] font-bold text-[25px] flex   ">
            {" "}
            @DashBord
          </h1>

          <p className="Tab ">
            <BiSolidDashboard />
            <p>DashBoard</p>
          </p>
          <p className=" Tab">
            <TbArrowsDoubleSwNe />
            <p>Transaction</p>
          </p>
        </div>
        <div className=" absolute bottom-3 flex   items-center gap-2">
          <BiSupport className=" text-[40px]" />
          <p className=" text-[25px]">Support</p>
        </div>
      </section>
    </>
  );
};

export default Sidebar;
