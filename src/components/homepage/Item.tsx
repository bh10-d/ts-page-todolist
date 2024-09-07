export const Item = ({itemId, itemName, onClickNavigation}:{itemId:string; itemName: string; onClickNavigation:(itemId: string)=>void}) => {
  return (
    <div style={{marginRight: "10px", cursor: "pointer"}} onClick={()=>{onClickNavigation(itemId)}}>{itemName}</div>
  )
}
