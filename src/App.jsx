import {BasicDetails,ButtonComponent} from "./Basic"
import Login,{Profile,Settings,AppKey} from "./UserComponent";

import ChangeState from "./StateTutorials";

function Test() {
  return (
    <div>
      <ChangeState state = {'Goa'}/>
    </div>

  )
}

 const testArrow = (value)=> {
    alert('this is arrow function with value '+value);
    
  }

function Operation() {
  const name = "Sandeep Prajapati";
  let x = 20;
  let y = 10;

  const userObj = {
    name : 'sandeep prajapati',
    email : 'sandeepspp123@gmail.com',
    age : 27
  };
  const numArray = [3,4,5,6,9];

  function doSomeOperation(a,b,op) {
    if(op == "+") {
      return a+b;
    } else if(op == "-"){
      return a-b;
    } else {
      return a*b;
    }

  }

  const testArrow = (value)=> {
    alert('inner arrow function with value '+value);
    
  }
  return (
    <div>
      <h3>You are in operation </h3>
      <h2>{doSomeOperation(20,10,"+")}</h2>
      <h2>{name ? name : "not found" }</h2>
      <h4>{userObj?.age1 ?? 'key not found'}</h4>
      <h4>{numArray?.[0] ?? 'no index'}</h4>
      <h3><button type="button" onClick={()=>testArrow(10)}>Test Arrow</button></h3>
    </div>
  )
}

function Color() {
  return (
    <h2> My favourite color is pink</h2>
  )
}

function sum() {
  return 20+10;
}


export default Test