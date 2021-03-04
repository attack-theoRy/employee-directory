import React from "react";

function Search(props) {

    return (<form className="form">
            <input
            value={props.firstName}
            name="firstName"
            onChange={props.handleInputChange}
            type="text"
            placeholder="Search by name!"
          />
         <br></br>
          <button onClick={props.handleFormSubmit}>Submit</button>    </form>)


}

export default Search