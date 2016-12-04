const logger = store => {
  return function (next) {
    return function (action) {
      console.group('logger');
      console.log('currentState: ', store.getState());
      console.log('action dispatched: ', action);
      next(action);
      console.log('updatedState: ', store.getState());
      console.groupEnd('logger')
    }
  }
}

const thunk = store => {
  return function (next) {
    return function (action) {
      if(typeof action === 'function'){
        action(store.dispatch, store.getState())
      }
      else {
        next(action);
      }
    }
  }
}
