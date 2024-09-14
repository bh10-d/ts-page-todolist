import { MonsterType } from "../../Type/Type"
import { MonsterItem } from "../MonsterItem/MonsterItem"
import './monsterList.css'

export const MonsterList = ({listMonster}:{listMonster:MonsterType[]}) => {
    return (
        <div className="listMonster">
            {
                listMonster.map((monster) => {
                    return <MonsterItem key={monster.id} name={monster.name} email={monster.email} />
                })
            }
        </div>
    )
}
