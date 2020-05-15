import { BUY_CAKE } from "./cakeTypes"

const initialState = {
    numOfCakes: 20,
}

export const cakeReducer = (state = initialState, action) => {
    switch(action.type){
        case BUY_CAKE: return ({
            numOfCakes: state.numOfCakes - 1,
        });
        default: return state;
    };

};