import "./App.css";
import BoardList from "./components/boardsList";
import CreateColumn from "./components/createColumn";
import NavBar from './components/navBar';
import AddNewBoard from "./components/tasks/addNewBoard";
import AddTaskModal from "./components/tasks/addTaskModal";
import Delete from "./components/tasks/deleteTask";
import Substasks from "./components/tasks/substasks";
import TaskDetails from "./components/tasks/taskDetails";

function App() {
  return (
    <div className="bg-black ">
      <NavBar />
      <CreateColumn />
      {/* <TaskDetails /> */}
      {/* <AddTaskModal /> */}
      {/* <Substasks /> */}
      {/* <AddNewBoard /> */}
      {/* <Delete /> */}
      <BoardList />

    </div>
  );
}

export default App;
