import threeDot from "../assets/icon-vertical-ellipsis.svg";

const TaskDetails = () => {
  return (
    <div className="mx-[16px] box-border p-[24px] bg-white rounded-[6px] flex flex-col">
      <div className="flex items-center gap-[16px] justify-between mb-[24px]">
        <p className="font-bold text-xl leading-[23px]">
          Research pricing points of various competitors and trial different
          business models
        </p>
        <img src={threeDot} />
      </div>
      <p className="font-medium text-sm text-light_grey mb-[24px]">We know what we're planning to build for version one. Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.</p>
        <div>
            <p className="font-bold text-[12px] text-light_grey mb-[16px]">Subtasks (2 of 3)</p>
        </div>
    </div>
  );
};

export default TaskDetails;
