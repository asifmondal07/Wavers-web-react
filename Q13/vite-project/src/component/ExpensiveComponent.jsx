import {useState,useMemo} from 'react'

function ExpensiveComponent({items}) {

const [filter,setFilter]=useState("");


  // Heavy calculation: filtering and sorting a large array
    const filterIteams=useMemo(()=>{
        console.log("Running heavy calculation...")

        return items
                .filter(item=>item.toLowerCase().includes(filter.toLowerCase))
                .sort()
    },[items,filter])
  return (
    <div>
        <input
            type="text"
            placeholder="Filter items..."
            value={filter}
            onChange={e => setFilter(e.target.value)}
        />
        <ul>
            {filterIteams.map((item, idx) => (
            <li key={idx}>{item}</li>
            ))}
        </ul>
    </div>
  )
}

export default ExpensiveComponent
