import { useState } from "react";

export default function Task({ task ,onSave}) {
  const [isEdit, setIsEdit] = useState(true);

  

  const handleEdit = () => {
    setIsEdit(!isEdit);
  };



  let textContent;

  if (isEdit) {
    textContent = (
      <>
        <li>
          <input type="checkbox" />
          {task.text}
          <button onClick={handleEdit}>Edit</button>
          <button>Delete</button>
        </li>
      </>
    );
  } else {
    textContent = (
      <>
        <li>
          <input type="checkbox" />
          <input type="text" value={task.text} onChange={(e)=>onSave(e)} />
          <button onClick={handleEdit}>Save</button>
          <button>Delete</button>
        </li>
      </>
    );
  }

  return <>{textContent}</>;
}
