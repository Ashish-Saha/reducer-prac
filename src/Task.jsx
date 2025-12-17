import { useState } from "react";

export default function Task({ task, onSave, onDelete, onCheckBox }) {
  const [isEdit, setIsEdit] = useState(false);

  const handleEdit = () => {
    setIsEdit(!isEdit);
  };

  let textContent;

  if (!isEdit) {
    textContent = (
      <>
        <li>
          <input onChange={(e)=>onCheckBox(task.id, e.target.checked)} type="checkbox" checked = {task.done}/>
          {task.text}
          <button onClick={handleEdit}>Edit</button>
          <button onClick = {()=>onDelete(task.id)}>Delete</button>
        </li>
      </>
    );
  } else {
    textContent = (
      <>
        <li>
          <input onChange={(e)=>onCheckBox(task.id, e.target.checked)} type="checkbox" checked = {task.done}/>
          <input type="text" value={task.text} onChange={(e)=>onSave(task.id, e.target.value)} />
          <button onClick={handleEdit}>Save</button>
          <button onClick = {()=>onDelete(task.id)}>Delete</button>
        </li>
      </>
    );
  }

  return <>{textContent}</>;
}
