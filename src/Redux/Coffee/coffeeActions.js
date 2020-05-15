import { BUY_SMALL_COFFEE, BUY_MEDIUM_COFFEE, BUY_LARGE_COFFEE } from "./coffeeTypes"


export const buySmall = () =>{
    return({
        type: BUY_SMALL_COFFEE,
    })
}

export const buyMedium = () =>{
    return({
        type: BUY_MEDIUM_COFFEE,
    })
}

export const buyLarge = () => {
    return({
        type: BUY_LARGE_COFFEE,
    })
}