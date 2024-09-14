import { TextField } from "@mui/material"
import { ChangeEvent, useEffect, useState } from "react"
import { MonsterType } from "../Type/Type"
import { MonsterList } from "./MonsterList/MonsterList"


export const MonsterPage = () => {
  const [listMonster, setListMonster] = useState<MonsterType[]>([])
  const [filterMonster, setFilterMonster] = useState<MonsterType[]>([])
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(respone => respone.json())
    .then(data => {
      setListMonster(data)
      setFilterMonster(data)
    })
  },[])

  const onChangeText = (e: ChangeEvent<HTMLInputElement>)=>{
    setFilterMonster(listMonster.filter((monster)=>{
      return monster.name.toLowerCase().includes(e.target.value.toLowerCase())
    }))
  }

  return (
    <div style={{ height: "100%", width: '100%' }}>
      <div style={{ display: 'flex', flexDirection:'column', justifyContent: 'center', alignItems: 'center'}}>
        <h1 style={{ fontFamily: "Bigelow Rules", fontSize: "72px", fontWeight: "700" }}>Monster Rolodex</h1>
        <TextField size="small" fullWidth label="Type to find monster" id="fullWidth" onChange={onChangeText}/>
      </div>
      <div style={{height: '100%', width: '100%'}}>
          <MonsterList listMonster={filterMonster}/>
      </div>
    </div>
  )
}
