import React ,{ useState} from 'react'

function HooksEx() {
    const[count,setcount]=useState(0)
    let inc=()=>{
        setcount(count+1)

    }
    let dec=()=>{
        setcount(count-2)
    }
   
  return (
    <div>
    {count}<br></br>
    <button onClick={inc}>Click</button><br></br>
    <button onClick={dec}>Clickme</button>
    </div>
  )
}

export default HooksEx