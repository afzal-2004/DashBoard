import Nav from "./Components/Header/Nav";
import Sidebar from "./Components/Sidebar/Sidebar";
import "./App.css";
import Home from "./Pages/Home/Home";
import { useState } from "react";
function App() {
  const [OpenSideBar, setOpenSideBar] = useState(false);
  return (
    <>
      <div className=" sm:flex">
        <div className=" hidden sm:flex ">
          <Sidebar />
        </div>

        <div className=" w-full">
          <Nav setOpenSideBar={setOpenSideBar} />
          <div>
            {OpenSideBar && (
              <div className="Sidebar ">
                <Sidebar
                  setOpenSideBar={setOpenSideBar}
                  OpenSideBar={OpenSideBar}
                />
              </div>
            )}
          </div>
          <div className="bg-blue-50  p-3  flex flex-col   items-center">
            <Home />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
