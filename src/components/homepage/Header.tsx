import { HeaderType } from "../Type/Type"
import { Item } from "./Item"

export const Header = ({listTitle, onClickNavigation}:{listTitle: HeaderType[]; onClickNavigation: (itemId: string)=>void}) => {
    return (
        <div style={{ display: "flex" }}>
            <h1 className="title-Main">Learn Typescript</h1>
            <div style={{ display: "flex", alignItems: "center", marginLeft: "10px" }}>
                {
                    listTitle.map((title)=>{
                        return <Item key={title.id} itemId={title.id} itemName={title.nameTitle} onClickNavigation={onClickNavigation}/>
                    })
                }
            </div>
        </div>
    )
}
