import React, { Component } from 'react'
import {buyCake} from "../Redux/index.js";
import {connect} from 'react-redux';

class CakeContainer extends Component{
    render() {
        const {numOfCakes, buyCake} = this.props;
        return (
            <div>
                <h1>Number of Cakes:{numOfCakes} </h1>
                <button onClick={buyCake}>Customer buys a cake</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        numOfCakes: state.cake.numOfCakes,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => dispatch(buyCake()),

    }
}
export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(CakeContainer)
