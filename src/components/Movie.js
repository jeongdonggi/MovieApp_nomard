import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../css/Movie.css"

export const Movie = ({id, year, medium_cover_image, title, summary, genres}) => {
    return (
        <div className="movies">
            <div className="movie">
                <img src={medium_cover_image} alt="movie poster"></img>
                <h3 className="movie__title">
                    <Link to={`/movie/${id}`}>{title}</Link> {/* id 값 받아서 url에 넣어주기 */}
                </h3>
                <h5 className="movie__year">{year}</h5>
                <p className="movie__summary">{summary.length > 235 ? `${summary.slice(0, 235)} ...` : summary}</p>
                <ul>
                    {genres.map((genre, index) => (
                    <li className="movie__genres" key={index}>{genre}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    medium_cover_image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;