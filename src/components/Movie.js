import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Movie = ({id, medium_cover_image, title, summary, genres}) => {
    return (
        <div className="Movie">
            <h2>
                <Link to={`/movie/${id}`}>{title}</Link> {/* id 값 받아서 url에 넣어주기 */}
            </h2>
            <img src={medium_cover_image} alt="movie poster"></img>
            <p>{summary}</p>
            <ul>
                {genres.map((genre, index) => (
                <li key={index}>{genre}</li>
                ))}
            </ul>
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