import cross from "../../assets/icon-cross.svg";

const AddNewBoard = () => {
  return (
    <div>
      <div className="modal-container"></div>
      <div className="min-w-[343px] mx-[16px] box-border p-[24px] bg-white rounded-[6px] flex flex-col absolute top-[100px] z-10">
        <p className="font-bold text-xl leading-[23px] mb-[24px]">
          Add New Board
        </p>
        <form>
          {/* title input ///////////////////// */}
          <div className="flex flex-col mb-[24px]">
            <label className="font-bold text-[12px] text-light_grey mb-[8px]">
              Board Name
            </label>
            <input
              className="px-[16px] py-[8px] border-solid border-[1px] border-light_grey rounded-[4px] border-opacity-25 placeholder:text-[13px] placeholder:opacity-50"
              type="text"
              placeholder="e.g. Web Design"
            />
          </div>

          {/* subtasks //////////////////////  */}
          <div className="flex flex-col">
            <p className="font-bold text-[12px] text-light_grey mb-[8px]">
              Board Columns
            </p>

            <div className="flex flex-col">
              <div className="flex items-center gap-[16px] mb-[12px]">
                <input
                  className=" px-[16px] py-[8px] border-solid border-[1px] border-light_grey rounded-[4px] border-opacity-25 placeholder:text-[13px] placeholder:opacity-50 grow"
                  type="text"
                  placeholder="e.g. Make coffee"
                />
                <img src={cross} alt="" />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-[16px] mb-[12px] ">
                <input
                  className=" px-[16px] py-[8px] border-solid border-[1px] border-light_grey rounded-[4px] border-opacity-25 placeholder:text-[13px] placeholder:opacity-50 grow"
                  type="text"
                  placeholder="e.g. Make coffee"
                />
                <img src={cross} alt="" />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-[16px] mb-[12px]">
                <input
                  className=" px-[16px] py-[8px] border-solid border-[1px] border-light_grey rounded-[4px] border-opacity-25 placeholder:text-[13px] placeholder:opacity-50  grow"
                  type="text"
                  placeholder="e.g. Make coffee"
                />
                <img src={cross} alt="" />
              </div>
            </div>
            <button className="bg-purple bg-opacity-10 py-[10px] text-purple font-bold text-[13px] rounded-[20px] mb-[24px]">
              + Add New Subtask
            </button>
          </div>

          <button className="w-full bg-purple  py-[10px] text-white font-bold text-[13px] rounded-[20px]">
            Create Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNewBoard;
