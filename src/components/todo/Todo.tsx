import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlankOutlined"
import CheckBoxIcon from "@mui/icons-material/CheckBox"
import { Button } from '@mui/material'

const Icon = ({isComplete, updateIsComplete, todoId}:{isComplete: boolean; updateIsComplete:(todoId: string)=>void; todoId : string})=>{
  return (
    <div
      onClick={()=>updateIsComplete(todoId)}
    >
      {
        isComplete? <CheckBoxIcon/> :<CheckBoxOutlineBlankIcon/>
      }
    </div>
  )
}

export const Todo = ({ name, isComplete, updateIsComplete, todoId }: { name: string; isComplete: boolean; updateIsComplete: (todoId: string)=>void; todoId : string }) => {
  return (
    <div>
      <Button style={{ justifyContent: "space-between" }} fullWidth={true} endIcon={<Icon isComplete={isComplete} updateIsComplete={updateIsComplete} todoId={todoId}/>}>{name}</Button>
    </div>
  )
}
