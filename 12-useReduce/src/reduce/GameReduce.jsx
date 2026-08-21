

function GameReduce(state =[], action){
    
    switch(action.type){
        case "create":
            return[...state, action.payload]

        case "delete":
            return state.filter(game => game.id !== action.payload);

        case "filtrar_favoritos":
            // Aquí puedes hacer la lógica que quieras traer/cambiar
            return state.filter(game => game.title.toLowerCase().includes("mario"));

        default: state;

    }


  return (state)
}

export default GameReduce