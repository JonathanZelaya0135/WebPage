import React from "react";

const TodoList = ({ todos, setTodos }) =>{
    const handleComplete = ({id}) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    };
    return (
    <div>
        {todos.map((todo) => (
            <li className="list-item" key={todo.id}>
                <input 
                    type="text" 
                    value={todo.title} 
                    className="list" 
                    onChange={(event) => event.preventDefault()} 
                />
                <div id="div1">
                    <button id="button" className="Btn_Complete task-button" onClick={() => handleComplete(todo)}>
                        <i id="btn1" className="fas fa-check-double"></i>
                    </button>
                </div>
            </li>
        ))}
    </div>
    );
};
export default TodoList;