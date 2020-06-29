import React, { useState } from "react";

const Search = (props) => {
    const [country, setCountry] = useState("");
    const handleInput = (event) => {
        event.preventDefault();
        props.searchword(country);
    };
    const handleSearch = (event) => {
        setCountry(event.target.value);
    };
    return (
        <div className="ui segment" style={{ backgroundColor: "grey" }}>
            <form onSubmit={handleInput} className="ui form" align='center'  >
                <h1 style={{ marginTop: "20px" }}>FIND MORE ABOUT THE COUNTRY YOU LOVE</h1>
                <div className="ui fluid category search" >
                    <div className="ui icon input" >
                        <input onChange={handleSearch} className="prompt" type="text" placeholder="Search image..." style={{ height: "35px", width: "500px", marginTop: "30px", marginBottom: "30px" }} />
                        <i className="search icon"></i>
                    </div>
                    <div className="results"></div>
                </div>
            </form>
        </div>);
};
export default Search;