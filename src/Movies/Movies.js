import Search from "./Search/Search";
import Results from "./Results/Results";

function Movies(props) {
   
    return(
       <div className="container">
           <div className="row pt-5 justify-content-between">
                <div className="col-4">
                    <Search Val = {props.Val}/>
                </div>
                <div className="col-6">
                    {props.GetValue ? <Results str={props.GetValue}/> : <Results />}
                </div>
           </div>
       </div>
    )
}

export default Movies