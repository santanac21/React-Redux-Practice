import React from "react";
import {connect} from "react-redux";
import {buySmall, buyMedium, buyLarge} from "../Redux/index";
import "../App.css"

function CoffeeContainer(props) {
    const {volOfCoffee, buySmall, buyMedium, buyLarge} = props;

    return (
        <div>
            <h1>The amount of Coffee left: {volOfCoffee} L</h1>
            <button class="BTN-Change" onClick={buySmall}>Buy a Small Coffee</button>
            <button class="BTN-Change" onClick={buyMedium}>Buy a Medium Coffee</button>
            <button class="BTN-Change" onClick={buyLarge}>Buy a Large Coffee</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return({
        volOfCoffee: state.coffee.volOfCoffee,
    });
}

const mapDispatchToProps = (dispatch) => {
    return({
        buySmall: ()=>{dispatch(buySmall())},
        buyMedium: ()=>{dispatch(buyMedium())},
        buyLarge: ()=>{dispatch(buyLarge())},
    })
}
export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(CoffeeContainer)
