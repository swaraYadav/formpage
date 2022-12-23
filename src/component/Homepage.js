import { useState } from "react";

function Homepage(){
    const[user,setUser]=useState("")
    const[password,setPassword]=useState("")
    const[usererr,setUsererr]=useState(false)
    const[passerr,setPasserr]=useState(false)
    


    function loginHandler(e){
        
        if(user.length<3||password.length<4){
            document.write("type is wrong");
        }
        else{
            alert("all thing good")
        }
        e.preventDefault()
    }
    function useHandler(e){
        let item =e.target.value;
        if(item.length<3){
            setUsererr(true)
        }
        else{
            setUsererr(false)
        }
        setUser(item)

    }
    function passHandler(e){
        let item =e.target.value;
        if(item.length<6){
            setPasserr(true)
        }
        else{
            setPasserr(false)
        }
        setPassword(item)

    }

    return(
        <div className="form">
            <form onSubmit={loginHandler}>
           <input type= "text"  placeholder="Username" onChange={useHandler}/>{usererr?<span>input is not valid</span>:""}
           <br/>
           <input type= "password"  placeholder="Password" onChange={passHandler}/>{passerr?<span>Password is not valid</span>:""}
           <br/>
            <button type="submit">Register</button>
            </form>
         </div>
    
    )
}
export default Homepage;