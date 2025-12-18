import {nextId} from '../Utils'


export const TaskReducer = (tasks, action) => {
  switch (action.type) {
    case "AddTask": {
     return [
        ...tasks,
        {
          id: nextId(tasks),
          text: action.text,
          done: false,
        },
      ];
    }

    case "DeleteTask": {
      return tasks.filter((item) => item.id !== action.id);
    }

    case "CheckBox": {
        return tasks.map((item)=>(
        item.id === action.task.id ? action.task : item
      ))
    }

    default: {
        throw Error("Unknown action: " + action.type);
    }
  }
};
