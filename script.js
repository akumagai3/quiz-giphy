const wrapper = document.getElementById('wrapper');
const wrong = document.getElementById('wrong');
// RIGHT
async function rightApi() {
  console.log('sending API request');
  const response = await fetch(
    'https://api.giphy.com/v1/gifs/search?api_key=ceZwJiJvHJCjEI68cvnoAHI1BHBdpJTY&q=cat-purr'
  );
  let gifs = await response.json();
  let myURL = correctImage(gifs);
  addCorrectImage(myURL);
  wrong.innerHTML = '';
}

async function rightApi2() {
  console.log('sending API request');
  const response = await fetch(
    'https://api.giphy.com/v1/gifs/search?api_key=ceZwJiJvHJCjEI68cvnoAHI1BHBdpJTY&q=happy-dog'
  );
  let gifs = await response.json();
  let myURL = correctImage(gifs);
  addCorrectImage(myURL);
  wrong.innerHTML = '';
}

async function rightApi3() {
  console.log('sending API request');
  const response = await fetch(
    'https://api.giphy.com/v1/gifs/search?api_key=ceZwJiJvHJCjEI68cvnoAHI1BHBdpJTY&q=happy-elephant'
  );
  let gifs = await response.json();
  let myURL = correctImage(gifs);
  addCorrectImage(myURL);
  wrong.innerHTML = '';
}

async function rightApi4() {
  console.log('sending API request');
  const response = await fetch(
    'https://api.giphy.com/v1/gifs/search?api_key=ceZwJiJvHJCjEI68cvnoAHI1BHBdpJTY&q=happy-panda'
  );
  let gifs = await response.json();
  let myURL = correctImage(gifs);
  addCorrectImage(myURL);
  wrong.innerHTML = '';
}

function correctImage(myJSON) {
  console.log('in correctImage');
  return myJSON.data[1].images.original.url;
}

function addCorrectImage(myURL) {
  console.log('in addCorrectImage');
  const wrapper = document.querySelector('#wrapper');
  wrapper.innerHTML = `Yay! <img src="${myURL}">`;
}
// WRONG
async function wrongApi() {
  console.log('in wrongAPI');
  const response = await fetch(
    'https://api.giphy.com/v1/gifs/search?api_key=05PLpToXoYjgoal3hJXYPKuJMBra8d73&q=sad-cat'
  );
  const gif = await response.json();
  const wrongURL = wrongImage(gif);
  addWrongImage(wrongURL);
  wrapper.innerHTML = '';
}

async function wrongApi2() {
  console.log('in wrongAPI');
  const response = await fetch(
    'https://api.giphy.com/v1/gifs/search?api_key=05PLpToXoYjgoal3hJXYPKuJMBra8d73&q=sad-dog'
  );
  const gif = await response.json();
  const wrongURL = wrongImage(gif);
  addWrongImage(wrongURL);
  wrapper.innerHTML = '';
}
async function wrongApi3() {
  console.log('in wrongAPI');
  const response = await fetch(
    'https://api.giphy.com/v1/gifs/search?api_key=05PLpToXoYjgoal3hJXYPKuJMBra8d73&q=sad-elephant'
  );
  const gif = await response.json();
  const wrongURL = wrongImage(gif);
  addWrongImage(wrongURL);
  wrapper.innerHTML = '';
}

async function wrongApi4() {
  console.log('in wrongAPI');
  const response = await fetch(
    'https://api.giphy.com/v1/gifs/search?api_key=05PLpToXoYjgoal3hJXYPKuJMBra8d73&q=sad-panda'
  );
  const gif = await response.json();
  const wrongURL = wrongImage(gif);
  addWrongImage(wrongURL);
  wrapper.innerHTML = '';
}

function wrongImage(myJSON) {
  console.log('in wrongImage');
  // console.log(myJSON.data);
  return myJSON.data[0].images.original.url;
}

function addWrongImage(wrongURL) {
  console.log('in addWrongImage');
  const wrong = document.querySelector('#wrong');
  wrong.innerHTML = `oh no! <img src="${wrongURL}">`;
}

// CHECK

function check() {
  let question1 = document.question.question1.value;
  if (question1 == '2') {
    rightApi();
  } else {
    wrongApi();
  }
}
function check2() {
  let question2 = document.question.question2.value;
  if (question2 == '4') {
    rightApi2();
  } else {
    wrongApi2();
  }
}
function check3() {
  let question3 = document.question.question3.value;
  if (question3 == '3') {
    rightApi3();
  } else {
    wrongApi3();
  }
}
function check4() {
  let question4 = document.question.question4.value;
  if (question4 == '3') {
    rightApi4();
  } else {
    wrongApi4();
  }
}
