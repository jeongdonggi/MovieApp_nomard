import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Movie from "../components/Movie";

const Detail = () => {

    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState(null);

    const {id} = useParams(); // :id 처럼 되어있는 값을 받아온다.
    
    // useCallback: id가 변경될 때마다 함수 생성
    const getMovie = useCallback( async() => {
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        console.log(json);
        setMovie(json.data.movie);
        setLoading(false);
    },[id]);
    
    useEffect(() => {
        getMovie();
    },[getMovie])

    return (
        <div className='App'>
        {loading? <h1>Loading...</h1>: 
            <div className="Movie">
            <Movie
                id={movie.id}
                medium_cover_image={movie.medium_cover_image} 
                title={movie.title}
                summary={movie.description_intro}
                genres={movie.genres}>
            </Movie>
            </div>  
        }
        </div>
    );
}

export default Detail
