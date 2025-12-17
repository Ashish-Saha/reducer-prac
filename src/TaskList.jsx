import Task from "./Task";

export default function TaskList({ tasks, onSave }) {
  return (
    <>
      {tasks.map((task) => (
        <Task key={task.id} task={task} onSave={onSave}/>
      ))}
    </>
  );
}
