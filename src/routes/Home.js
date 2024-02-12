import { useState, useEffect } from "react";
import Movie from "../components/Movie";

export const Home = () => {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    // 비동기 함수: Promise => 비동기 작업의 단위
    const getMovies = async() => {
        // await:Promise가 끝날 때 까지 기다려라 => fetch 기다린 후 json도 기다림
        const json = await (
        await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year")
        ).json();
        console.log(json.data.movies);
        setMovies(json.data.movies);
        setLoading(false);
    }

    useEffect(() => {
        getMovies();
    }, []);

    return (
        <div className='App'>
        {loading? <h1>Loading...</h1>: 
            <div className="Movies">
            {movies.map((movie, index) => (
                <Movie
                key={movie.id} // map안에서 컴포넌트 render에 사용하기 때문에 필수
                id={movie.id}
                medium_cover_image={movie.medium_cover_image} 
                title={movie.title}
                summary={movie.summary}
                genres={movie.genres}>
                </Movie>
            ))}
            </div>  
        }
        </div>
    );
}

export default Home;