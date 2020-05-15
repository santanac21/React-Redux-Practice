import { BUY_ICECREAM } from "./icecreamTypes";

const initialState = {
    numOfIceCreams: 15,
};

export const icecreamReducer = (state = initialState , action) =>{
    switch(action.type){
        case BUY_ICECREAM: return({
            numOfIceCreams: state.numOfIceCreams - 1,
        });
        default: return state;
    };
};