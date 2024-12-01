import MovieItem from "./movieitem";

function Movies(props) {
    return (
        <>
        {/*pass reload function as a prop*/}
            {props.myMovies.map((movie) => (
                <MovieItem
                    mymovie={movie}
                    key={movie._id}
                    Reload={props.ReloadData}
                />
            ))}
        </>
    );
}

export default Movies;
