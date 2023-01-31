import "./App.css";
import CreateColumn from "./components/createColumn";
import NavBar from './components/navBar';
import TaskDetails from "./components/taskDetails";

function App() {
  return (
    <div className="bg-black">
      {/* <NavBar />
      <CreateColumn /> */}
      <TaskDetails />

    </div>
  );
}

export default App;
