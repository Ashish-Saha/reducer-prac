import { useState } from "react";
import { initialTasks } from "./data/data";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

function App() {
  const [tasks, setTasks] = useState(initialTasks);

  return (
    <>
      <h2>Prague itinerary</h2>
    
      <AddTask/>
      <TaskList/>
    </>
  );
}

export default App;
