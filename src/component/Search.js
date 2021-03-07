import React from "react";

function Search(props) {

  const searchFunction = (event)=>{
    const fullName = event.target.value.trim().toLowerCase();
    if(event.keyCode===8){
        props.searchFunc(fullName)
    }
    props.searchFunc(fullName);
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
          </form>)


}

export default Search