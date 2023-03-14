import { useState } from "react";
import cross from "../../assets/icon-cross.svg";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { taskActions } from "../../store/store";

const AddNewBoard = () => {
  const { register, handleSubmit, errors, unregister } = useForm();
  const dispatch = useDispatch();
  const [boardColumns, setBoardColumns] = useState([1, 2, 3]);
  const boardData = useSelector(state => state.boards)

  const BoardColumnsComponent = () => {
    return boardColumns.map((index) => (
      <div key={index} className="flex flex-col">
        <div className="flex items-center gap-[16px] mb-[12px]">
          <input
            {...register("column" + index)}
            className=" px-[16px] py-[8px] border-solid border-[1px] border-light_grey rounded-[4px] border-opacity-25 placeholder:text-[13px] placeholder:opacity-50 grow"
            type="text"
            placeholder="e.g. Make coffee"
            value={
              index == 1
                ? "todo"
                : index == 2
                ? "doing"
                : index == 3
                ? "done"
                : ""
            }
          />
          <img onClick={() => deleteBoardColumn(index)} src={cross} alt="" />
        </div>
      </div>
    ));
  };

  const addBoardColumn = () => {
    setBoardColumns([...boardColumns, Math.random().toString(36).substr(2, 9)]);
  };

  const deleteBoardColumn = (index) => {
    unregister("column" + index);
    setBoardColumns(boardColumns.filter((item) => item !== index));
  };

  const onSubmit = (data) => {
    // console.log(data);
    const transformedData = (data) => {
      const array = { boardName: data.boardName, data: data };
      return array
    };
    const array = transformedData(data);
    // console.log(array, "gela");
    dispatch(taskActions.createNewBoard(array));
    console.log(boardData);
  };

  return (
    <div>
      <div className="modal-container"></div>
      <div className="min-w-[343px] mx-[16px] box-border p-[24px] bg-white rounded-[6px] flex flex-col absolute top-[100px] z-10">
        <p className="font-bold text-xl leading-[23px] mb-[24px]">
          Add New Board
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* title input ///////////////////// */}
          <div className="flex flex-col mb-[24px]">
            <label className="font-bold text-[12px] text-light_grey mb-[8px]">
              Board Name
            </label>
            <input
              {...register("boardName")}
              className="px-[16px] py-[8px] border-solid border-[1px] border-light_grey rounded-[4px] border-opacity-25 placeholder:text-[13px] placeholder:opacity-50"
              type="text"
              placeholder="e.g. Web Design"
            />
          </div>

          {/* board cols //////////////////////  */}
          <div className="flex flex-col">
            <p className="font-bold text-[12px] text-light_grey mb-[8px]">
              Board Columns
            </p>

            <BoardColumnsComponent />
            <button
              onClick={addBoardColumn}
              type="button"
              className="bg-purple bg-opacity-10 py-[10px] text-purple font-bold text-[13px] rounded-[20px] mb-[24px]"
            >
              + Add New Subtask
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-purple  py-[10px] text-white font-bold text-[13px] rounded-[20px]"
          >
            Create Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNewBoard;
