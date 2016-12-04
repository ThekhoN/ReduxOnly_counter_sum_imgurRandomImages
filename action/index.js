const decrement_A = () => ({type: 'DECREMENT'})

const increment_A = () => ({type: 'INCREMENT'})

const sum_A = (a,b) => ({
  type: 'SUM',
  a:a,
  b:b
})

const getCounter_A = (currentCounter = {count:0, counting: false}, action) => {
  let nextCounter = Object.assign({}, currentCounter);
  switch(action.type){
    case 'LOADING':
      nextCounter.counting = true;
      return nextCounter;
    case 'INCREMENT':
      nextCounter.count= currentCounter.count + 1;
      nextCounter.counting = false;
      return nextCounter;
    case 'DECREMENT':
      nextCounter.count = currentCounter.count - 1;
      return nextCounter;
    default:
      nextCounter = currentCounter;
      return nextCounter;
  }
}

getImage_A = (currentImage = {imageData: [], imageLoading: false}, action) => {
  let nextImage = Object.assign({}, currentImage);
  switch (action.type) {
    case 'IMAGE_LOADING':
      nextImage.imageLoading = true;
      return nextImage;
    case 'IMAGE_LOADED':
      nextImage.imageData = action.imageData;
      //loading images
      nextImage.imageData.map((e)=>{
          let newLi = document.createElement('li');
          newLi.setAttribute('class', 'dataList');
          _imgContainer.appendChild(newLi);
          newLi.innerHTML = `<img src=${e.link}/>`;
      });
      nextImage.imageLoading = false;
      return nextImage;
    default:
      nextImage = currentImage;
      return nextImage;
  }
}

const getSum_A = (currentSum=3, action) => {
  let nextSum = currentSum;
  switch(action.type){
    case 'SUM':
      nextSum = parseInt(action.a) + parseInt(action.b);
      return nextSum;
    default:
      nextSum = currentSum;
      return nextSum;
  }
}

const _fakeServerApi = (counter, callback) => {
  setTimeout(function () {
    callback(counter + 1);
  }, 2000);
}

const asyncIncrease_A = (dispatch, state) => {
  //firstDispatch
  dispatch({type:'LOADING'})
  _fakeServerApi(state.counter.count, function () {
    dispatch({type:'INCREMENT'});
  });
}

const asyncGetRandomImages = (dispatch, state) => {
    dispatch({type:'IMAGE_LOADING'});
    const imgurApi = 'https://api.imgur.com/3/gallery/random/random/1';
    XHR_req(imgurApi, function (data) {
        console.log('data', data);
        dispatch({type:'IMAGE_LOADED', imageData:data.data });
    });
};
