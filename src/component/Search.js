import React from "react";

function Search(props) {

  const searchFunction = (event)=>{
    const fullName = event.target.value.trim().toLowerCase();
    if(event.keyCode===8){
        props.searchFunction(fullName)
    }
    props.searchFunction(fullName);
}

    return (<form className="form">
            <input
            value={props.firstName}
            name="firstName"
            onKeyUp={searchFunction}
            type="text"
            placeholder="Search by name!"
          />
         <br></br>
          <button onClick={props.handleFormSubmit}>Submit</button>    </form>)


}

export default Search