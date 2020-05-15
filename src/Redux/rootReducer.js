import {combineReducers} from "redux";
import {cakeReducer} from "./Cake/cakeReducer";
import {icecreamReducer} from "./IceCream/icecreamReducer";
import {userReducer} from "./User/userReducer"; 
import {coffeeReducer} from "./Coffee/coffeeReducer";

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: icecreamReducer,
    user: userReducer,
    coffee: coffeeReducer,
});

export default rootReducer;