import './monsterItem.css'

export const MonsterItem = ({name, email}: { name: string; email: string}) => {
  return (
    <div className='cardItem'>
        <div className="Item">
          <img src={`https://robohash.org/${name}?set=set4&size=180x180`} alt="" />
          <div>{name}</div>
          <div>{email}</div>
        </div>
    </div>    
  )
}
