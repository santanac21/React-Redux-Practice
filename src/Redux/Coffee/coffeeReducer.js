import { BUY_SMALL_COFFEE, BUY_MEDIUM_COFFEE, BUY_LARGE_COFFEE } from "./coffeeTypes";


const initialState = {
    volOfCoffee: 40, //40 L
}

export const coffeeReducer = (state = initialState , action)=>{
    switch(action.type){
        case BUY_SMALL_COFFEE:
            return({
                volOfCoffee: state.volOfCoffee - 0.25,
            });
        case BUY_MEDIUM_COFFEE:
            return({
                volOfCoffee: state.volOfCoffee - 0.5,
            });
        case BUY_LARGE_COFFEE:
            return({
                volOfCoffee: state.volOfCoffee - 1,
            });
        default: return state;
    };
};