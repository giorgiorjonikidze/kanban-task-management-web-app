import threeDot from "../../assets/icon-vertical-ellipsis.svg";
import Substasks from "./substasks";

const TaskDetails = () => {
  return (
    <div>
      <div className="modal-container"></div>
      <div className="dialog mx-[16px] box-border p-[24px] bg-white rounded-[6px] flex flex-col absolute top-[100px] z-10">
        <div className="flex items-center gap-[16px] justify-between mb-[24px]">
          <p className="font-bold text-xl leading-[23px]">
            Research pricing points of various competitors and trial different
            business models
          </p>
          <img src={threeDot} />
        </div>
        <p className="font-medium text-sm text-light_grey mb-[24px]">
          We know what we're planning to build for version one. Now we need to
          finalise the first pricing model we'll use. Keep iterating the
          subtasks until we have a coherent proposition.
        </p>
        <div className="mb-[24px]">
          <p className="font-bold text-[12px] text-light_grey mb-[16px]">
            Subtasks (2 of 3)
          </p>
          <Substasks />
        </div>
        <div>
          <p className="font-bold text-light_grey text-[12px] mb-[8px] ">
            Current Status
          </p>
          <select
            name=""
            id=""
            className="w-full border-[1px] border-solid border-light_grey box-border px-[16px] py-[8px] rounded-[4px] border-opacity-25"
          >
            <option value="">Doing</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default TaskDetails;
