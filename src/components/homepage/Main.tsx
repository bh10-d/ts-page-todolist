import { useState } from "react";
import { MonsterPage } from "../monster/MonsterPage";
import TodoPage from "../todo/TodoPage";
import { HeaderType } from "../Type/Type"
import { Footer } from "./Footer"
import { Header } from "./Header"
import { v4 as uuidv4 } from 'uuid';


export const Main = () => {

    const [listTitle, setListTitle] = useState<HeaderType[]>([
        {
            id: uuidv4(),
            nameTitle: "TodoList",
            currentState: true,
        },
        {
            id: uuidv4(),
            nameTitle: "MonsterRolodex",
            currentState: false,
        },
        {
            id: uuidv4(),
            nameTitle: "Function#1",
            currentState: false,
        }
    ])

    const onClickNavigation = (itemId: string) => {
        setListTitle((prev)=>{
            return prev.map((title)=>{
                if( itemId === title.id ){
                    return {...title, currentState: true}
                }
                return {...title, currentState: false}
            })
        })
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Header listTitle={listTitle} onClickNavigation={onClickNavigation} />
            {
                listTitle[0].currentState ? <TodoPage /> : <MonsterPage />
            }
            <Footer />
        </div>
    )
}
