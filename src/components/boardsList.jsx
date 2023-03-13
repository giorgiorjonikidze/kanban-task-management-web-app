import iconBoard from "../assets/icon-board.svg"
import iconBoardWhite from "../assets/icon-board-white.svg"
import iconBoardPurple from "../assets/icon-board-purple.svg"

import darkLogo from "../assets/icon-dark-theme.svg"
import lightLogo from "../assets/icon-light-theme.svg"

const BoardList = () => {
    return (
        <div>
            <div className="modal-container"></div>
            <div className="w-[264px] h-[322px] bg-white rounded-[8px] absolute z-10 top-[100px] box-border py-[16px] pr-[24px] left-[54px]">
                <p className="font-bold text-sm text-light_grey tracking-[2.5px] mb-[19px] pl-[24px]">ALL BOARDS (3)</p>
                <div className="w-[240px] h-[48px] bg-purple rounded-r-[30px] flex items-center pl-[24px] gap-[12px] ">
                    <img src={iconBoardWhite} alt="" />
                    <p className="font-bold text-md text-white">Platform Launch</p>
                </div>
                <div className="w-[240px] h-[48px]  rounded-r-[30px] flex items-center pl-[24px] gap-[12px] ">
                    <img src={iconBoard} alt="" />
                    <p className="font-bold text-md text-light_grey">Marketing Plan</p>
                </div>
                <div className="w-[240px] h-[48px]  rounded-r-[30px] flex items-center pl-[24px] gap-[12px] ">
                    <img src={iconBoard} alt="" />
                    <p className="font-bold text-md text-light_grey">Roadmap</p>
                </div>
                <button className="w-[240px] h-[48px]  rounded-r-[30px] flex items-center pl-[24px] gap-[12px] ">
                    <img src={iconBoardPurple} alt="" />
                    <p className="font-bold text-md text-purple">+ Create New Board</p>
                </button>
                <div className=" h-[48px] bg-light flex justify-center rounded-[6px] items-center gap-[23px] ml-[16px] ">
                    <img src={lightLogo}  />
                    <div className="menuItem w-[40px] h-[20px] rounded-[12px] bg-purple flex items-center px-[3px]">
                        <div className="itemSelf w-[14px] h-[14px] rounded-full bg-white"></div>
                    </div>
                    <img src={darkLogo}  />
                </div>
            </div>
        </div>
    );
}
 
export default BoardList;