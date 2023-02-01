import iconBoard from "../assets/icon-board.svg"
console.log(iconBoard)

const BoardList = () => {
    return (
        <div>
            <div className="modal-container"></div>
            <div className="w-[264px] h-[322px] bg-white rounded-[8px] absolute z-10 top-[100px] box-border py-[16px] pr-[24px] ">
                <p className="font-bold text-sm text-light_grey tracking-[2.5px] mb-[19px] pl-[24px]">ALL BOARDS (3)</p>
                <div className="w-[240px] h-[48px] bg-purple rounded-r-[30px] flex items-center pl-[24px] gap-[12px] ">
                    <img src={iconBoard} alt="" />
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
                    {/* <svg  width="16" height="16" xmlns="http://www.w3.org/2000/svg" src={iconBoard} alt="" /> */}
                    <svg  width="16" height="16" xmlns={"http://www.w3.org/2000/svg"}>
                        {/* {iconBoard} */}

                    </svg>
                    <p className="font-bold text-md text-purple">+ Create New Board</p>
                </button>
            </div>
        </div>
    );
}
 
export default BoardList;