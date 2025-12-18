import { useState, useReducer } from "react";
import AddTask from "./AddTask";
import { initialTasks } from "./data/data";
import TaskList from "./TaskList";
// import { nextId } from "./Utils";
import { TaskReducer } from "./reducers/TaskReducer";

function App() {
  const [tasks, dispatch] = useReducer(TaskReducer, initialTasks);

  const handleAddTask = (text) => {
      dispatch(
        {
          type : "AddTask",
          text,
        }
      )
  };

  const handleDelete = (taskId) => {
    dispatch(
        {
          type : "DeleteTask",
          id : taskId
        }
      )
  };

  // const handleCheckBox = (taskId, checkedStatus) => {
  //   setTasks((prev) =>
  //     prev.map((item) =>
  //       item.id === taskId ? { ...item, done: checkedStatus } : item
  //     )
  //   );
  // };


   const handleCheckBox = (task) => {
      dispatch(
        {
          type : "CheckBox",
          task
        }
      )
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
