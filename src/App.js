import React,{useState} from 'react';
 export default function App(){
const[user,setUser]=useState('')
const[error,setError]=useState(false)

function handleUser(e){
let item=e.target.value;

if(item.length<3){
    setError(true)
}else{
    setError(false)
}

}
    return(<>
<h1>Basic form validation</h1>
<form>
<input type="text" placeholder="enter user name" onChange={handleUser}></input> <br></br>

{error?<span>"please enter valid user name"</span>:""

}


</form>
    </>)

}