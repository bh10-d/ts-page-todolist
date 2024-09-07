import TodoPage from "../todo/TodoPage";
import { HeaderType } from "../Type/Type"
import { Footer } from "./Footer"
import { Header } from "./Header"
import { v4 as uuidv4 } from 'uuid';


const listTitle: HeaderType[] = [
    {
        id: uuidv4(),
        nameTitle: "TodoList"
    },
    {
        id: uuidv4(),
        nameTitle: "Function#1"
    },
    {
        id: uuidv4(),
        nameTitle: "Function#2"
    }
]

export const Main = () => {
  return (
    <div style={{ height: "90vh" }}>
        <Header listTitle={listTitle}/>
        <TodoPage/>
        <Footer/>
    </div>
  )
}
