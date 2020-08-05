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

        <form onSubmit={handleInput} className="ui form" >
            <div className="field">
                <div className="ui grey inverted segment">
                    <div className="ui raised segment" >
                        <a className="ui teal ribbon label">Find more about the country you like</a>
                        <div className="ui icon input" >
                            <input onChange={handleSearch} className="prompt" type="text" placeholder="Search country..." />
                            <i className="search icon"></i>
                        </div>
                        <div className="results"></div>
                    </div>
                </div>
            </div>   
        </form>
    );
};
export default Search;