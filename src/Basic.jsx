function BasicDetails() {

    return (
        <h2>My self is sandeep prajapati and this is my first file </h2>
    )
}

function ButtonComponent() {
    function callbutton() {
        alert('Button is hit');
    }
    return (
        <div>
            <button onClick={callbutton}> Normal click me</button> <hr />
            <button onClick={()=>alert('You called me')}>Advance click me</button>
        </div>
    ) 
}


export  {BasicDetails,ButtonComponent};