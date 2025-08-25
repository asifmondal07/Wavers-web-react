import useCounter from "./useCounter"


export default function CounterComponent() {

    const { count,addValue,removeValue,reset}=useCounter()

     
       console.log("Counter value:", count); 

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Counter: {count}</h2>
      <div style={{marginBottom:"10px"}}>
        <button onClick={addValue} style={{padding:"20px", marginRight:"50px"}}>+</button>

        <button onClick={removeValue} style={{padding:"20px"}}>-</button>
      </div>
      <button onClick={reset}>Reset</button>
    </div>
  )
}
