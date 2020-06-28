import React from "react";

const Search = () => {

    return (<form className="ui form" align='center' >
        <h1 style={{marginTop: "20px" }}>FIND MORE ABOUT THE COUNTRY YOU LOVE</h1>    
        <div className="ui fluid category search" >
            <div className="ui icon input" >
                <input className="prompt" type="text" placeholder="Search image..." style={{ height: "35px", width: "500px", marginTop: "30px", marginBottom: "30px" }} />
                <i className="search icon"></i>
            </div>
            <div className="results"></div>
        </div>
        <br></br>
    </form>);
};
export default Search;