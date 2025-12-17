import { useState } from "react";
import AddTask from "./AddTask";
import { initialTasks } from "./data/data";
import TaskList from "./TaskList";
import { nextId } from "./Utils";

function App() {
  const [tasks, setTasks] = useState(initialTasks);

  const handleAddTask = (text) => {
    setTasks([
      ...tasks,
      {
        id: nextId(tasks),
        text: text,
        done: false,
      },
    ]);
  };

  const handleDelete = (taskId) => {
    const deletedId = tasks.filter((item) => item.id !== taskId);
    setTasks(deletedId);
  };

  // const handleCheckBox = (taskId, checkedStatus) => {
  //   setTasks((prev) =>
  //     prev.map((item) =>
  //       item.id === taskId ? { ...item, done: checkedStatus } : item
  //     )
  //   );
  // };


   const handleCheckBox = (task) => {
      const nextTask = tasks.map((item)=>(
        item.id === task.id ? task : item
      ))

      setTasks(nextTask)
  };

  // const handleInput = (taskId, e)=>{
  //   setTasks((prev)=>
  //     prev.map(item=> 
  //       item.id === taskId ? 
  //       {...item, text : e} :
  //       item

  //     )
  //   )    
  // }

  return (
    <>
      <h2>Prague itinerary</h2>

      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onDelete={handleDelete}
        onCheckBox={handleCheckBox}
        // onSave={handleInput}
      />
    </>
  );
}

export default App;
