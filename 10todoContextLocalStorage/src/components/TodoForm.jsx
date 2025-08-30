import React, { useState } from 'react'
import { useTodo } from '../contexts';

function TodoForm() {
    const [todo,setTodo] = useState("")
    const {addTodo} = useTodo()

    const add = (e)=>{
        e.preventDefault()
        if(!todo) return
        addTodo({todo:todo, completed:false})
        setTodo("")
    }

    return (
        <form onSubmit={add} className="flex border border-white/10 rounded-lg">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full px-3 rounded-l-lg outline-none duration-150 bg-[rgba(66,66,74,0.39)] py-2.5"
                value={todo}
                onChange={e => setTodo(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-[rgba(50,30,40,0.1)]  text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

