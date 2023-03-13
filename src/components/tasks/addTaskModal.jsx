import cross from "../../assets/icon-cross.svg";
import { useForm } from "react-hook-form";
import { useState } from "react";

const AddTaskModal = () => {
  const { register, handleSubmit, errors } = useForm();
  const [subtasks, setSubtasks] = useState([0, 1, 2, 3, 4, 5, 6,]);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  };

  const SubtasksComponents = () => {
    return subtasks.map((index) => (
      <div id={index} key={index} className="flex flex-col">
        <div className="flex items-center gap-[16px] mb-[12px] ">
          <input
            {...register("subtask" + index)}
            className=" px-[16px] py-[8px] border-solid border-[1px] border-light_grey rounded-[4px] border-opacity-25 placeholder:text-[13px] placeholder:opacity-50 grow"
            type="text"
            placeholder="e.g. Make coffee"
          />
          <img onClick={() => deleteSubtask(index)} src={cross} />
        </div>
      </div>
    ));
  };

  const addSubtask = () => {
    setSubtasks([...subtasks, subtasks.length + 1]);
  }
  const deleteSubtask = (index) => {
    const newSubtasks = subtasks.filter((subtaskItem) => subtaskItem!== index);
    setSubtasks(newSubtasks);
  }
 

  
  

  return (
    <div>
      <div className="modal-container"></div>
      <div className="min-w-[343px] mx-[16px] box-border p-[24px] bg-white rounded-[6px] flex flex-col absolute top-[100px] z-10">
        <p className="font-bold text-xl leading-[23px] mb-[24px]">
          Add New Task
        </p>

        <form onSubmit={submitHandler}>
          {/* title input ///////////////////// */}
          <div className="flex flex-col mb-[24px]">
            <label className="font-bold text-[12px] text-light_grey mb-[8px]">
              Title
            </label>
            <input
              {...register("title")}
              className="px-[16px] py-[8px] border-solid border-[1px] border-light_grey rounded-[4px] border-opacity-25 placeholder:text-[13px] placeholder:opacity-50"
              type="text"
              placeholder="e.g. Take coffee break"
            />
          </div>
          {/* Description input  //////////////////////////////// */}
          <div className="flex flex-col">
            <label className="font-bold text-[12px] text-light_grey mb-[8px]">
              Description
            </label>
            {/* <input
            className=" min-h-[112px] px-[16px] py-[8px] border-solid border-[1px] border-light_grey rounded-[4px] border-opacity-25"
            type="text"
            placeholder="e.g. It’s always good to take a break. This 
            15 minute break will  recharge the batteries 
            a little."
          /> */}
            <textarea
              {...register("description")}
              placeholder="e.g. It’s always good to take a break. This 
            15 minute break will  recharge the batteries 
            a little."
              className=" min-h-[112px] px-[16px] py-[8px] border-solid border-[1px] border-light_grey rounded-[4px] border-opacity-25 placeholder:text-[13px] placeholder:opacity-50 mb-[24px]"
            ></textarea>
          </div>
          {/* subtasks //////////////////////  */}

          <div className="flex flex-col">
            <p className="font-bold text-[12px] text-light_grey mb-[8px]">
              Subtasks
            </p>
            <SubtasksComponents />
            <button onClick={addSubtask} className="bg-purple bg-opacity-10 py-[10px] text-purple font-bold text-[13px] rounded-[20px] mb-[24px]">
              + Add New Subtask
            </button>
          </div>
          <p className="font-bold text-[12px] text-light_grey mb-[8px]">
            Status
          </p>
          <select
            name=""
            id=""
            className="w-full border-[1px] border-solid border-light_grey box-border px-[16px] py-[8px] rounded-[4px] border-opacity-25 mb-[24px]"
          >
            <option value="">Doing</option>
          </select>
          <button
            type="submit"
            className="subtask-input bg-purple px-[20px]  py-[10px] text-white font-bold text-[13px] rounded-[20px]"
          >
            Create Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTaskModal;
