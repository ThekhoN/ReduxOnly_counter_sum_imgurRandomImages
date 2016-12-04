

//render
const render = () => {
  const state = store.getState();
  _value.innerHTML = state.counter.count;
  _value2.innerHTML = state.sum;
  if(state.counter.counting){
      _CountStatus.innerHTML = 'LOADING. . .';
  }
  else {
      _CountStatus.innerHTML = 'loaded';
  }
  if(state.image.imageLoading){
      _imgLoadStatus.innerHTML = 'LOADING. . .';
  }
  else {
      _imgLoadStatus.innerHTML = 'loaded';
  }
}
render();
store.subscribe(render);

//dom bindings
_decrement.addEventListener('click', function () {
  store.dispatch(decrement_A())
});
_incrementAsync.addEventListener('click', function () {
  store.dispatch(asyncIncrease_A);
});
_sum.addEventListener('click', function () {
  const a = _a.value? _a.value:1;
  const b = _b.value? _b.value: 2;
  store.dispatch(sum_A(a,b));
});
_getRandomImages.addEventListener('click', function () {
  store.dispatch(asyncGetRandomImages);
});
