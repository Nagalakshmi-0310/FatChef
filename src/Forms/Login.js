import { LineAxisOutlined, PublishedWithChanges } from '@mui/icons-material';
import React, { useState } from 'react'

function Login() {
    const[username,setusername]=useState('');
    const[password,setpassword]=useState('');
    const[error,seterror]=useState(false);
    const formHandler=(event)=>
    { 
      event.preventDefault();
          if(username.length==0 && password.length==0)
          {
            seterror(true);
          }
          if(username && password!="admin")
          {
          const loginObj={
            name:username,
            Pwd:password
          }
          console.log(loginObj);
          alert(JSON.stringify(loginObj));
          }
    }
  return (
    <div class = "form">
    <h2>Login</h2>
    <form onSubmit={formHandler}>
    Username:<input type="text" value={username} placeholder="username"  onChange={(e)=>setusername(e.target.value)}/><pre></pre>
    {error && username == 0 ?
    <label style = {{color:"red"}}> Username is required</label>:""}<br></br>
    Password:<input type="password"  value ={password} placeholder="password" onChange={(e)=>setpassword(e.target.value)}/><br></br><pre></pre>
    {error && password < 8?
    <label style = {{color:"red"}}>Password is invalid</label>:""}<br></br>
    <button type="submit">Login</button>
    </form>
    </div>
  )
}

export default Login