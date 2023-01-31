import logoMobile from "../assets/logo-mobile.svg";
import arrow from "../assets/icon-chevron-down.svg";
import addtastIcon from "../assets/icon-add-task-mobile.svg";
import threeDot from "../assets/icon-vertical-ellipsis.svg";

const NavBar = () => {
  return (
    <div className="w-full  bg-white">
      <div className="flex box-border px-[16px] py-[20px] justify-between ">
        <div className="flex gap-[16px]">
          <img src={logoMobile} alt="" />
          <div className="flex items-center gap-[8px] ">
            <p className="font-bold text-xl w-[150px]">Platform Launch</p>
            <img src={arrow} />
          </div>
        </div>
        <div className="flex items-center gap-[16px]">
          <div className="bg-purple w-[48px] h-[32px] flex justify-center items-center rounded-[24px]">
            <img src={addtastIcon} className="" />
          </div>
          <img src={threeDot} alt="" />
        </div>
      </div>
      
    </div>
  );
};

export default NavBar;
