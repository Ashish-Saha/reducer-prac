import Task from "./Task";

export default function TaskList({ tasks, onSave, onDelete, onCheckBox }) {
  return (
    <>
      {tasks.map((task) => (
        <Task key={task.id} task={task} onSave={onSave} onDelete={onDelete} onCheckBox={onCheckBox}/>
      ))}
    </>
  );
}
