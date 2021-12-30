import React  from 'react';
import './Row.css';
import { Link } from 'react-router-dom';

const baseUrl = "https://image.tmdb.org/t/p/original/";

function Row({title, movies, isLargeRow,showButton}){
    return(
        <div className="row">
            <h2>{title}</h2>
            <div className="row_posters">
                {movies? movies.map((movie,index)=>{
                        return (<span key={index}> <img className={`${isLargeRow? "row_poster": "row_poster_large"}`} key={index}           src={`${baseUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name}/><button  className={`${showButton ? 'btn': 'hideBtn'}`} ><Link className={'link'}to=
                        {{
                          pathname: '/movieDetails',
                          state: {
                            params: {
                              movieDetails: movie,
                            }
                          }
                        }}>
                      Book  Now </Link></button></span>)
                    }):null}
            </div>
        </div>
    )
}

export default Row