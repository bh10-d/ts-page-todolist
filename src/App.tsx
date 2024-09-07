import { ChangeEvent, useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import { CreateNewTodo } from "./components/CreateNewTodo";
import { TodoList } from "./components/TodoList";

export type TodoType = {
  id: string;
  name: string;
  iscomplete: boolean;
}

function App() {

  const [todoList, setTodoList] = useState<TodoType[]>([]);
  const [newTodoString, setNewTodoString] = useState('');

  const onNewTodoChange = (e: ChangeEvent<HTMLInputElement>) =>{
    console.log({e});
    setNewTodoString(e.target.value)
  }

  const onAddingBtnClick = ()=>{
    const newTodoItem: TodoType ={
      id: uuidv4(),
      name: newTodoString,
      iscomplete: false,
    }
    setTodoList([newTodoItem, ...todoList]);
    setNewTodoString('')
  }

  const updateIsComplete = (TodoId: string)=>{
    setTodoList((previousState)=>{
      return previousState.map((todo)=>{
        if(todo.id === TodoId){
          return {...todo, iscomplete: !todo.iscomplete}
        }
        return todo
      })
    })
  }

  return (
    <>
      <div className="main">
        <div>
          <p className="name">This is Todo App</p>
          <CreateNewTodo newTodoString={newTodoString} onNewTodoChange={onNewTodoChange} onAddingBtnClick={onAddingBtnClick}/>
          <TodoList todoList={todoList} updateIsComplete={updateIsComplete}/>
        </div>
      </div>
    </>
  )
}

export default App
