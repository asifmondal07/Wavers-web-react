import React, {useCallback,useState} from 'react'
import MemoizedChild from './Child';



export default function Parent() {

  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Button clicked!");
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
      <MemoizedChild onClick={handleClick} />
    </div>
  )
}


