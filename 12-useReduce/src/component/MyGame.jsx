import { useEffect, useReducer } from "react";
import GameReduce from "../reduce/GameReduce";

// Blindamos el init con un try/catch por si el localStorage está corrupto
const init = () => {
    try {
        const localGames = localStorage.getItem("games");
        return localGames ? JSON.parse(localGames) : [];
    } catch (error) {
        console.log("Error al cargar el localStorage:", error);
        return [];
    }
};

function MyGame() {

    const [games, dispatch] = useReducer(GameReduce, [], init)

    useEffect(() => {
        localStorage.setItem("games", JSON.stringify(games))
    }, [games])

    const obtainData = e => {
        e.preventDefault();

        let game = {
            id: new Date().getTime(),
            title: e.target.title.value,
            descrition: e.target.description.value
        };


        const action = {
            type: "create",
            payload: game,
        };

        dispatch(action)

        console.log(game)
    };
    const deleteGame = id => {
        const action = {
            type: "delete",
            payload: id,
        };
        dispatch(action)

    };

    const handleTraerAlgo = () => {
        dispatch({
            type: "filtrar_favoritos"
        });
    };


    return (
        <div className="game-container">


            <h1 className="game-title"> My games </h1>

            <ul className="game-list">
                {games.map(game => (
                    <li key={game.id} className="game-item"> {game.title}
                        &nbsp;
                        {/* ✅ El botón de borrar ahora está DENTRO del map, apuntando al id de cada juego */}
                        <button onClick={() => deleteGame(game.id)}
                            className="game-button-delete"
                        >Delete Game</button>/
                    </li>

                ))}
            </ul>

            <h3 className="game-subtitle">Add Game : {games.length}</h3>

            <form className="game-form" onSubmit={obtainData}>
                <input
                    type="text"
                    name="title"
                    placeholder="Game Title"
                    className="game-input"
                />
                <textarea
                    name="description"
                    placeholder="Game Description"
                    className="game-textarea"
                ></textarea>
                <input
                    type="submit"
                    value="Save Game"
                    className="game-button"
                />

                <button
                    onClick={handleTraerAlgo}
                    className="game-button"
                    style={{ backgroundColor: '#27ae60', marginTop: '15px' }}
                >
                    Traer / Filtrar Juegos de Mario
                </button>

            </form>
        </div>
    )
}

export default MyGame