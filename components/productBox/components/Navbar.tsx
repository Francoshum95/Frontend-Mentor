import { useState } from "react";

type props = {
  navbarMenuItems: string[]
  navbarBrandIcon: string
  userImage: string
}


const Navbar = ({
  navbarMenuItems,
  navbarBrandIcon,
  userImage
}:props) => {
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
              ${isToggleOpen ? "rotate-45 " : "-translate-y-1.5  "}
              
              `}
          ></span>
          <span
            className={`
            hambuger-menu
            ${isToggleOpen && "opacity-0 "}
              `}
          ></span>
          <span
            className={`
            hambuger-menu
            ${isToggleOpen ? "-rotate-45 " : "translate-y-1.5 "}
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
          }`}
          onClick={() => {setIsToggleOpen((prevState => !prevState))}}
        >
          <div
            className={`${
              isToggleOpen &&
              `mobile:h-full mobile:w-[60%]
            mobile:z-20 mobile:bg-white `
            }`}
            onClick={(e) =>{
              e.stopPropagation()
            } }
          >
            <ul
              className={`${isToggleOpen ? 'mobile:flex':'mobile:hidden mobile:opacity-0'}
              md:flex gap-6 mobile:flex-col md:ml-5 mobile:absolute mobile:top-[5rem] mobile:left-[1.5rem]
              `}>
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
        <button className="group/item hover:visible hover-effect">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
          <div
            className="absolute w-[20rem] min-h-[15rem] top-[4.5rem] right-[4rem] hover:visible 
            group/edit group-hover/item:visible p-3 cursor-default invisible"
          >
            <div className="shadow-lg z-20 w-full h-full bg-white rounded-md">
              <div className="border-b-[1px] light-graylish-blue p-6">
                <h2 className="text-black font-semibold text-left">Cart</h2>
              </div>
            </div>
          </div>
        </button>
        <button className="rounded-full hover:border-orange border-2 hover-effect ">
          <img className="w-9 h-9 mobile:w-5 mobile:h-5" src={userImage}></img>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
