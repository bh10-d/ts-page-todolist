
import { TodoType } from "../Type/Type";
import { Todo } from "./Todo"

export const TodoList = ({todoList, updateIsComplete}:{todoList: TodoType[]; updateIsComplete: (todoId: string)=>void;}) => {
  return (
    <div>
        {
          todoList.map((todo)=>{
            return <Todo key={todo.id} name={todo.name} isComplete={todo.iscomplete} updateIsComplete={updateIsComplete} todoId={todo.id}/>
          })
        }
      </div>
  )
}
