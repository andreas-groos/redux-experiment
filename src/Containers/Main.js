import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
    incrementCounter,
    decrementCounter,
    resetCounter
} from "../actions/counter";

export class Main extends Component {
    //   static propTypes = {
    //     prop: PropTypes
    //   }

    render() {
        return (
            <div>
                <h1>Counter: {this.props.counter.count}</h1>
                {/* Careful not to pass the event in onClick, either be doing () => this.props.incrementCounter() */}
                {/* or in mapDispatch by doing () => instead of (n) => {....} */}
                <button onClick={this.props.incrementCounter}>+</button>
                <button onClick={this.props.decrementCounter}>-</button>
                <button onClick={this.props.resetCounter}>reset</button>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    ui: state.ui,
    counter: state.counter
});

const mapDispatchToProps = dispatch => {
    return {
        incrementCounter: () => dispatch(incrementCounter()),
        decrementCounter: () => dispatch(decrementCounter()),
        resetCounter: () => dispatch(resetCounter())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Main);
