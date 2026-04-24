

export const taskReducer = (state, action) =>{
    switch (action.type) {
        case "ADD":
            return [
                ...state,
                {id: Date.now(), text: action.payload, completed: false}
            ]

        case "DELETE":
            return state.filter((task) => task.id !== action.payload);

        case "TOGGLE":
            return state.map((task) => task.id === action.payload ? {...task, completed: !task.completed} : task)

        default:
            break;
    }
}
