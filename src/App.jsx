import { useState } from "react";
import AddTask from "./AddTask";
import { initialTasks } from "./data/data";
import TaskList from "./TaskList";

function App() {
  const [tasks, setTasks] = useState(initialTasks);

  const nextId = (tasks) => {
    const next = tasks.reduce((prev, next) => {
      return prev && prev.id < next.id ? prev.id : next.id;
    });

    return next + 1;
  };

  const handleAddTask = (text) => {};

  return (
    <>
      <h2>Prague itinerary</h2>

      <AddTask onAddTask={handleAddTask} />
      <TaskList tasks={tasks} />
    </>
  );
}

export default App;
