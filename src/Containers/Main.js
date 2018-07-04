import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  incrementCounter,
  decrementCounter,
  resetCounter
} from "../actions/counter";
import { catsFetching, catsLoading } from "../actions/cats";

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
        <br />
        <button onClick={this.props.catsFetching}>Gimmie Dogs!</button>
        <br />
        {this.props.cats.animals.map((c, i) => {
          return <img src={c} key={i} />;
        })}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ui: state.ui,
  counter: state.counter,
  cats: state.cats
});

const mapDispatchToProps = dispatch => {
  return {
    incrementCounter: () => dispatch(incrementCounter()),
    decrementCounter: () => dispatch(decrementCounter()),
    resetCounter: () => dispatch(resetCounter()),
    catsFetching: () => dispatch(catsFetching())
    // catsLoading: () => dispatch(catsLoading())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
