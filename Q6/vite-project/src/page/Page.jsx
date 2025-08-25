import { use } from 'react'
import {useState,useEffect} from 'react'
import apiservice from '../api/api'

function Page() {
    const [data,setData]=useState([])
    const [loading,setLoading]=useState(true)
    const [error,setError]=useState("")

    useEffect(()=>{
        setLoading(true)
        setError("")
       apiservice.getUser().then((user)=>{
        setData(user)
        console.log(user)
        setLoading(false)
       }).catch((error)=>{
        setError("Failed To Fetch Data")
        setLoading(false);
       })
    },[])
    if(loading){
        return(
            <div><p>Loading Data.......</p></div>
        )
    }

    if(error){
        return(
            <div><p>{error}</p></div>
        )
    }
  return (
    <div>
        <h1>User Details</h1>
        
            {data.map((user) => (
            <div key={user.id}>
        
                    <li>name : {user.name}</li>
            </div>
        ))}
    
        

    </div>
  )
}

export default Page
