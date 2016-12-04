const combineReducer = (currentState={counter:{count:0, counting:false}, sum:3, image:{imageData:[], imageLoading: false}}, action) => {
  let nextState = Object.assign({}, currentState);
  nextState = {
    counter:getCounter_A(currentState.counter, action),
    sum: getSum_A(currentState.sum, action),
    image: getImage_A(currentState.image, action)
  }
  return nextState;
}

const {createStore} = Redux;
const store = createStore(combineReducer, Redux.applyMiddleware(logger, thunk));
