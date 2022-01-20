import { useState } from "react";
import MoviesArr from "./MoviesArr";

function Results(props) {
  const [arr,setarr] = useState(MoviesArr);
  if(props.str){
    const filtered = arr.filter((i)=> i.title == props.str);
    console.log(filtered);
    if(filtered)
  }
    return (
        <>
          <h2 className="h5">Search results</h2>
          <div className="alert alert-info">Use the form on the left to search for a movie</div>

          <ul className="search-results row list-unstyled">
               {
                   arr.map(item => (  
                    <li className="search-results__item movie col-sm-6 mb-4" data-imdb-id="tt0407887">
                        <div className="card">
                            <img className="movie__poster card-img-top" src={item.bigPoster} alt="" width="300" height="200" />
              
                        <div className="card-body">
                            <h3 className="movie__title h5">{item.title}</h3>
                            <p className="card-text">
                            <img src="" alt="Calendar" width="25" height="25" />
                            <span className="movie__year">{item.year}</span>
                        </p>
              
                        <p className="card-text">
                          <img src="img/star.svg" alt="Star" width="25" height="25" />
                          <span className="movie__rating">{item.imdbRating}</span>
                        </p>
              
                        <p className="card-text d-flex flex-column flex-md-row flex-wrap justify-content-around">
                          <a className="movie__trailer-link m-1 m-xl-0 btn btn-outline-primary btn-sm" href="https://youtube.com/watch?v=auYbpnEwBBg" target="_blank">Watch trailer</a>
                          <button className="m-1 m-xl-0 btn btn-outline-info btn-sm js-movie-modal-opener" type="button" data-toggle="modal" data-target="#movie-info-modal">More info</button>
                          <button className="m-1 m-xl-0 btn btn-outline-success btn-sm js-movie-bookmark" type="button">Bookmark</button>
                        </p>
                      </div>
                    </div>
                  </li>
                    ))
               }
          </ul>
        </>
    )
}
export default Results