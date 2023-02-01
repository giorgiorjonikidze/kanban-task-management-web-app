import checked from "../../assets/icon-check.svg";

const Substasks = () => {
  return (
    <div className="w-full box-border p-[12px] bg-light rounded-[4px] flex items-center ">
      {/* checked  */}
      <div className="w-[19px] h-[16px] flex justify-center items-center bg-purple rounded-[2px] mr-[16px]">
        <img src={checked} className="" />
      </div>
      {/* empty  */}
      {/* <div className="w-[19px] h-[16px] border-[1px] border-solid border-light_grey rounded-[2px] mr-[16px]"></div> */}
      <p className="font-bold text-light_grey text-[12px] ">
        Research competitor pricing and business models
      </p>
    </div>
  );
};

export default Substasks;
