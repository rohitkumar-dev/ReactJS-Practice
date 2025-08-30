import React, { useEffect, useState } from "react";
import { useTodo } from "../contexts";

function TodoItem({ todo }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);
  const { updateTodo, deleteTodo, toggleComplete } = useTodo();

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: todoMsg, id: Date.now() });
    setIsTodoEditable(false);
  };

  const toggleCompleted = () => {
    toggleComplete(todo.id);
  };

  const [actualTime, setActualTime] = useState("")
//   useEffect(()=>{
//     const timestamp = new Date(todo.id)
//     const actualTime = timestamp.toLocaleTimeString()
//     const actualDate = timestamp.toLocaleDateString()
//     setActualTime(`${actualTime.toUpperCase()}, ${actualDate}`)
//   },[])
    useEffect(() => {
    const timestamp = new Date(todo.id);
    const time = timestamp.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
    })
    const date = timestamp.toLocaleDateString([], {
        day: "numeric",
        month: "short",
        year: "numeric",
    })
    setActualTime(`${time.toUpperCase()} | ${date}`);
    },[todo.id])



  return (
    <div
      className={`flex rounded-lg px-3 py-1.5 gap-x-3 backdrop-blur-[20px] bg-[rgba(110,86,98,0.19)] shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] border border-white/10 duration-300  ${
        todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
      }`}
    >
      
      <input
        type="checkbox"
        className="cursor-pointer"
        checked={todo.completed}
        onChange={toggleCompleted}
      />
      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg ${
          isTodoEditable ? "border-black/10 px-2" : "border-transparent"
        } ${todo.completed ? "line-through" : ""}`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
      />
      {/* Edit, Save Button */}
      <div className="">
        <div className="flex flex-row gap-1.5 items-end justify-end">
          <button
            className=" w-7 h-7 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-400 hover:bg-gray-100 shrink-0 disabled:opacity-50"
            onClick={() => {
              if (todo.completed) return;

              if (isTodoEditable) {
                editTodo();
              } else setIsTodoEditable((prev) => !prev);
            }}
            disabled={todo.completed}
          >
            {isTodoEditable ? "📁" : "✏️"}
          </button>
          {/* Delete Todo Button */}
          <button
            className=" w-7 h-7 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-400 hover:bg-gray-100 shrink-0"
            onClick={() => deleteTodo(todo.id)}
          >
            ❌
          </button>
        </div>
        <p className="text-[10px] text-right text-gray-400 pt-1 whitespace-nowrap">{actualTime}</p>
      </div>
    </div>
  );
}

export default TodoItem;
