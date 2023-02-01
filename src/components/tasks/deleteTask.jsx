const Delete = () => {
  return (
    <div>
      <div className="modal-container"></div>
      <div className="min-w-[343px] mx-[16px] box-border p-[24px] bg-white rounded-[6px] flex flex-col absolute top-[100px] z-10">
        <p className="font-bold text-xl text-red mb-[24px]">
          Delete this board?
        </p>
        <p className="font-medium text-light_grey text-[13px] mb-[24px]">
          Are you sure you want to delete the ‘Build settings UI’ task and its
          subtasks? This action cannot be reversed.
        </p>
        <button className="w-full bg-red  py-[10px] text-white font-bold text-[13px] rounded-[20px] mb-[16px]">
          Delete
        </button>
        <button className="bg-purple bg-opacity-10 py-[10px] text-purple font-bold text-[13px] rounded-[20px] mb-[24px]">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Delete;
