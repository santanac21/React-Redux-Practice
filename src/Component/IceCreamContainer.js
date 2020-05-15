import React from 'react';
import {buyIceCream} from "../Redux/index.js";
import {connect} from 'react-redux';


function IceCreamContainer(props) {
    return (
            <div>
                <h1>Number of Ice Creams: {props.numOfIceCreams} </h1>
                <button onClick={props.buyIceCream}>Buy an Ice Cream!</button>
            </div>
    )
}

const mapStateToProps = (state) => {
    return {
        numOfIceCreams: state.iceCream.numOfIceCreams,
    }
}

const mapStateToDispatch = (dispatch) => {
    return {
        buyIceCream: ()=> dispatch(buyIceCream()),
    }
}

export default connect(mapStateToProps, mapStateToDispatch)(IceCreamContainer)
