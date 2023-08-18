import "./App.css";
import CreateTask from "./CreateTask";
import Header from "./Header";
import { useState } from "react";
import Task from "./Task";
import GitHubIcon from "@mui/icons-material/GitHub";

function App() {
  const [tasks, setTasks] = useState([]);
  const addTask = (newTask) => {
    setTasks((prevTask) => {
      return [...prevTask, newTask];
    });
  };
  const deleteTask = (id) => {
    setTasks((prevTask) => {
      return prevTask.filter((taskItem, index) => {
        return index !== id;
      });
    });
  };
  return (
    <>
      <Header />
      <CreateTask onAdd={addTask} />
      <div className="container">
        <div className="row">
          {tasks.map((taskItem, index) => {
            return (
              <Task
                key={index}
                id={index}
                title={taskItem.title}
                content={taskItem.content}
                onDelete={deleteTask}
              />
            );
          })}
        </div>
        <footer>
          Copyright &copy; omarmovlamov{" "}
          <GitHubIcon
            sx={{
              fontSize: 25,
            }}
          />
        </footer>
      </div>
    </>
  );
}





export default App;
