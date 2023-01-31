const CreateColumn = () => {
    return (
        <div className="w-full h-screen bg-light flex justify-center">
            <div className="flex flex-col w-[343px] items-center gap-[25px] mt-[30vh]">
                <p className="font-bold text-xl text-light_grey text-center">This board is empty. Create a new column to get started.</p>
                <button className="bg-purple box-border px-[17px] py-[15px] rounded-[24px] text-white font-bold w-fit">+ Add New Column</button>
            </div>
      </div>
    );
}
 
export default CreateColumn;