import { MonsterType } from "../Type/Type"
import { MonsterItem } from "./MonsterItem"

export const MonsterList = ({listMonster}:{listMonster:MonsterType[]}) => {
    return (
        <div>
            {
                listMonster.map((monster) => {
                    return <MonsterItem key={monster.id} name={monster.name} email={monster.email} />
                })
            }
        </div>
    )
}
