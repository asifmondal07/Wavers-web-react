import {useState} from 'react'

function From() {
    const [data,setData]=useState({
        name:"",
        email:""
    })


    const hendaleChange=(e)=>{
        setData({
            ...data,
            [e.target.name]:e.target.value
        })
    }
    const hendaleSubmit=(e)=>{
        e.preventDefault()
  
        console.log(data)
    }
    
  return (
    <div>
      <form onSubmit={hendaleSubmit}>
        <div>
            <input type="text" 
            name='name' 
            placeholder='Enter Name'
            value={data.name}
            onChange={hendaleChange}
            />
        </div>
        <div>
            <input type="text" 
            name='email' 
            placeholder='Enter Email'
            value={data.email}
            onChange={hendaleChange}
            />
        </div>
        <div>
            <button type='submit'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default From
