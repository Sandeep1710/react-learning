import { useState } from "react"

export default function ChangeState(props) {
    const[name,setName] = useState("Sandeep")

    // function changeName(status){
    //     if(status === 1)
    //         setName("Ankit")
    //     else 
    //         setName("Sandeep") 
    // }

    const changeName = (status)=> {
        if(status === 1)
            setName("Ankit")
        else 
            setName("Sandeep") 
    }

    const [fname,setDynamicName] = useState('')

    const dynamicChangeName = (e)=>{
        setDynamicName(e.target.value)
    }


    return (
        <>
        <h3>{name}</h3>
            <button onClick={() =>changeName(1)}>change name</button>
            <button onClick={() => changeName(0)}>Reset name</button> <br /><br />
        <input type="text"  onChange = {dynamicChangeName} vlaue ={fname} placeholder="Enter your name here"/>
        <h2>{fname}</h2> <br />
        {props.state ? <h2>You are in {props.state} state</h2> : <h2>No state found</h2> }
        </>
    )
}

