import { useState } from "react";
import Cart from "./Cart";

type props = {
  navbarMenuItems: string[];
  navbarBrandIcon: string;
  userImage: string;
};

const Navbar = ({ navbarMenuItems, navbarBrandIcon, userImage }: props) => {
  const [isToggleOpen, setIsToggleOpen] = useState(false);

  return (
    <nav
      className="w-fill h-32 mobile:h-20 flex justify-between  
      w-full md:max-w-[75%] md:mx-auto mobile:p-4 
      md:border-b-[1px] md:light-graylish-blue group box-border"
    >
      <div className="flex items-center">
        <button
          onClick={() => setIsToggleOpen((prevState) => !prevState)}
          className="w-10 h-10 ml-2 relative md:hidden z-[21]"
        >
          <span
            className={`hambuger-menu
              ${isToggleOpen ? "rotate-45 " : "-translate-y-1.5"}`}
          ></span>
          <span
            className={`
            hambuger-menu
            ${isToggleOpen && "opacity-0"}
              `}
          ></span>
          <span
            className={`
            hambuger-menu
            ${isToggleOpen ? "-rotate-45" : "translate-y-1.5"}
            `}
          ></span>
        </button>
        <a className="text-2xl text-black font-bold">
          <img className="w-[8.5rem] h-[1.2rem]" src={navbarBrandIcon} />
        </a>
        <div
          className={`transition duration-300 ease-in-out  ${
            isToggleOpen &&
            `mobile:w-full mobile:h-screen mobile:top-0 mobile:left-0
            mobile:fixed  mobile:bg-gray-400 
            mobile:bg-opacity-40 mobile:z-[19]`
          } h-full`}
          onClick={() => {
            setIsToggleOpen((prevState) => !prevState);
          }}
        >
          <div
            className={`${
              isToggleOpen &&
              `mobile:h-full mobile:w-[60%]
            mobile:z-20 mobile:bg-white `
            } h-full`}
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <ul
              className={`${
                isToggleOpen ? "mobile:flex" : "mobile:hidden mobile:opacity-0"
              }
              md:flex gap-6 mobile:flex-col md:ml-5 mobile:absolute mobile:top-[5rem] mobile:left-[1.5rem]
              h-full`}
            >
              {navbarMenuItems.map((item, index) => (
                <li
                  className="md:border-b-[0.3rem] md:border-white hover-effect 
                md:hover:border-orange h-full flex items-center cursor-pointer group/item"
                  key={index}
                >
                  <a className="text-grayish-blue group-hover/item:text-black mobile:text-black mobile:font-bold">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="flex gap-6 md:py-5 items-center">
        <Cart/>
        <button className="rounded-full hover:border-orange border-2 hover-effect">
          <img className="w-9 h-9 mobile:w-7 mobile:h-7" src={userImage}></img>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
