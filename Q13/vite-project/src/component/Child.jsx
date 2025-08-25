import {memo} from 'react'

  function Child({onClick}) {
    console.log("Child rendered");
  return (
    <button onClick={onClick}>clicked Me</button>
  )
}
const MemoizedChild=memo(Child)
export default MemoizedChild
