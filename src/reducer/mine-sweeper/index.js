import { getRandom } from "../../store/utils/utils"

export const mineSweeperReducer = (state, action) => {
    switch (
        action.type

    ) {
        case 'RESET': {
            const newBombs = getRandom()
            return {...state, color:[], score:0, bomb:newBombs}
        }

        case 'PLAY-AGAIN': {
            const newBombs = getRandom() 
            return {color:[], score:0, check:!state.check, bomb:newBombs}
        }
        case 'CHANGE-COLOR': {
            let color = state.color
            let score = Number(state.score)
            let check = state.check

            if(!state.bomb.includes(action.payload)) {
                color=[...color, action.payload]
                if(!state.color.includes(action.payload)){
                    state.score++;
                }
            }
            else {
                check=!check
            }
            return {...state, color:color, score:score, check:check}
        }

        default: return state
    }

} 