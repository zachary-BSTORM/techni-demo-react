import React, { useState } from "react";
import type { Todo } from "./Todo.model";
import { nanoid } from "nanoid";

function TodoContainer(){
    const [todos,setTodos] = useState<Todo[]>([])


    function addTodo(todo : Todo){
        todo.id = nanoid()
        setTodos([...todos,todo])
        console.log("todos",todo);
        
    }

    function updateTodo(id : string){
        setTodos(todos.map(todo => todo.id === id ? {...todo,complet : !todo.complet} : todo))
    }

    function deleteTodo(id : string){
        setTodos(todos.filter(todo => todo.id !== id))
    }

    return (
        <>
            <h1>Todo List</h1>

            <TodoInput onAddTodo={addTodo}/>

            <TodoList todos={todos} onUpdate={updateTodo} onDelete={deleteTodo}/>
        </>
    )
}

function TodoInput({onAddTodo} : {onAddTodo  : (todo : Todo) => void}){
    const [todo,setTodo] = useState<Todo>({id : "",nom : "",priority : "Normal",complet : false})
    const [nameError,setNameError] = useState("")


    function submitTodo(e : React.SubmitEvent){
        e.preventDefault()

        

        if(todo.nom.trim() !== ""){   
            onAddTodo(todo)
            setTodo({id : "",nom : "",priority : "Normal",complet : false})
            setNameError('')
        }else{
            setNameError("Le nom ne peut pas être vide")
        }
    }

    return(
            <form className="card p-4" onSubmit={submitTodo}>
                <div className="p-2">
                    <label className="form-label">Nom</label>
                    <input className="form-control m-auto" type="text" value={todo.nom}  onChange={(e) => setTodo({...todo,nom : e.target.value})}/>
                    {nameError.length > 0 ? (<p style={{color:"red"}}>{nameError}</p>) : null}
                </div>
                <div className="p-2">
                    <label className="form-label">Priorité</label>
                    <select className="form-select" value={todo.priority} onChange={(e) => setTodo({...todo,priority : e.target.value})}>
                        <option value="Basse">Basse</option>
                        <option value="Normal">Normal</option>
                        <option value="Urgent">Urgent</option>
                    </select>
                </div>
                <div className="p-2">
                    <label className="form-label">Terminé</label>
                    <input className="form-checkbox" type="checkbox" checked={todo.complet} onChange={(e) => setTodo({...todo,complet : e.target.checked})}/>
                </div>

                <button type="submit">Ajouter</button>
            </form>
    )
}

function TodoList({todos,onUpdate,onDelete} : {todos : Todo[] , onUpdate : (id : string) => void , onDelete : (id : string) => void}){


    return (
        <ul className="card">
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} onUpdate={onUpdate} onDelete={onDelete}/>  
            ))}
        </ul>
    )
}

function TodoItem({todo,onUpdate,onDelete}:{todo : Todo , onUpdate : (id : string) => void , onDelete : (id : string) => void} ){

    const getPriorityTheme = (priority : string) => {
        switch (priority) {

            case "Urgent" : return {
                backgroundColor : "red",
                padding : "1rem",
                margin : "auto",
                width : "30%",
                borderRadius : "5px"
            }

            case "Normal" : return {
                backgroundColor : "orange",
                padding : "1rem",
                margin : "auto",
                width : "30%",
                borderRadius : "5px"
            }

            case "Basse" : return {
                backgroundColor : "green",
                padding : "1rem",
                margin : "auto",
                width : "30%",
                borderRadius : "5px"
            }
            default : return {
                backgroundColor : "grey",
                padding : "10px",
                margin : "auto",
                width : "30%",
                borderRadius : "5px"
            }
        }
    }

    return (
        <div style={getPriorityTheme(todo.priority)}>
            <h3>{todo.nom} </h3>
            <p>Priorité : {todo.priority}</p>
            <p>Complet : {todo.complet ? "oui" : "non"}</p>

            <button onClick={() => onUpdate(todo.id)} >{todo.complet ?  "Incomplete" : "Complete"}</button>
            <button onClick={() => onDelete(todo.id)}>Supprimer</button>
        </div>
    )

}



export default TodoContainer