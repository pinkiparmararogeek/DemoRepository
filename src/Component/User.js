import React from 'react';
export default function User(props){

    const data="Pinki"
    return(<>
        <button onClick={()=>props.name(data)}>ok</button>
       
        </>)
}