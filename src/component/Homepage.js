function Homepage(){

    return(
        <div className="form">
            <form>
            <h1>Registration Form</h1>
            <p>Please fill in this form to create an account.</p>
            <lable>Name</lable>
            <div className="inputtext">
                <input type="text" placeholder=" Name"/>
            </div>
            <lable>Surname</lable>
            <div className="inputtext">
                <input type="text" placeholder="Surname"/>
            </div>
        
            <lable>Roll Number</lable>
            <div className="inputtext">
                <input type="number" placeholder=" Roll Number"/>
            </div>
            <lable>Mobile No.</lable>
            <div className="inputtext">
                <input type="number" placeholder=" Mobile Number"/>
            </div>
            <lable>Address</lable>
            <div className="inputtext">
                <input type="text" placeholder=" Address"/>
            </div>
            <button className="btn">Submit</button>
            </form>
         </div>


    
    )
}
export default Homepage;