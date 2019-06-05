function getRandomColor() {
  const letters = '0123456789ABCDEF'.split('');
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.round(Math.random() * 15)];
  }
  return color;
}

let clickedTime; let createdTime; let reactionTime;

function makeBox() {
  createdTime = Date.now();

  let time = Math.random();
  time *= 5000;

  setTimeout(() => {
    if (Math.random() > 0.5) {
      document.getElementById('box').style.borderRadius = '100px';
    } else {
      document.getElementById('box').style.borderRadius = '0px';
    }

    let top = Math.random();
    let left = Math.random();

    top *= 300;
    left *= 300;

    document.getElementById('box').style.top = `${top}px`;
    document.getElementById('box').style.left = `${left}px`;
    document.getElementById('box').style.backgroundColor = getRandomColor();
    document.getElementById('box').style.display = 'block';
  }, time);
}

document.getElementById('box').onclick = function () {
  clickedTime = Date.now();
  reactionTime = (clickedTime - createdTime) / 1000;
  document.getElementById('time').innerHTML = reactionTime;
  this.style.display = 'none';
  makeBox();
};

makeBox();
