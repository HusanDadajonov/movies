import { useState } from "react";

function Search({Val}) {
    const [InpValue,SetValue] = useState("");
    
    function FomrSumb(e){
        Val(InpValue.value)
        e.preventDefault();
        InpValue.value = "";
    }

    return(
        <form onSubmit={FomrSumb} className="js-search-form" action="https://echo.htmlacademy.ru" method="GET" autoComplete="off">
            <div className="form-group mb-3">
                <input onChange={(e)=> SetValue(e.target)} className="form-control js-search-form__title-input" type="search" name="title" placeholder="Avengers" aria-label="Title" />
            </div>
            <button className="btn btn-primary btn-block" type="submit">Search</button>
        </form>
    )
}

export default Search
