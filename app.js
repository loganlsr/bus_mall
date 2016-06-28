'use strict';

function Product(name, path) {
  this.name = name;
  this.path = path;
  this.tally = 0;
  this.click = 0;
};

var itemArray = [];

function getRandomIntInclusive() {
  return Math.floor(Math.random() * (itemArray.length) - 1);
}

function callProducts() {
  itemArray.push(new Product('bag', 'images/bag.jpg'));
  itemArray.push(new Product('banana', 'images/banana.jpg'));
  itemArray.push(new Product('bathroom', 'images/bathroom.jpg'));
  itemArray.push(new Product('boots', 'images/boots.jpg'));
  itemArray.push(new Product('breakfast', 'images/breakfast.jpg'));
  itemArray.push(new Product('bubblegum', 'images/bubblegum.jpg'));
  itemArray.push(new Product('chair', 'images/chair.jpg'));
  itemArray.push(new Product('cthulhu', 'images/cthulhu.jpg'));
  itemArray.push(new Product('dog-duck', 'images/dog-duck.jpg'));
  itemArray.push(new Product('dragon', 'images/dragon.jpg'));
  itemArray.push(new Product('pen', 'images/pen.jpg'));
  itemArray.push(new Product('pet-sweep', 'images/pet-sweep.jpg'));
  itemArray.push(new Product('scissors', 'images/scissors.jpg'));
  itemArray.push(new Product('shark', 'images/shark.jpg'));
  itemArray.push(new Product('sweep', 'images/sweep.png'));
  itemArray.push(new Product('tauntaun', 'images/tauntaun.jpg'));
  itemArray.push(new Product('unicorn', 'images/unicorn.jpg'));
  itemArray.push(new Product('usb', 'images/usb.jpg'));
  itemArray.push(new Product('water-can', 'images/water-can.jpg'));
  itemArray.push(new Product('wine-glass', 'images/wine-glass.jpg'));
};
callProducts();
console.log(itemArray);

function randomThreeNum() {
  var one = getRandomIntInclusive();
  var two = getRandomIntInclusive();
  var three = getRandomIntInclusive();
  while (one === three || one === two || two === three){
    console.log('dupe');
    if (one === two) {
      two = itemArray[getRandomIntInclusive()].path;
    };
    if (three === two || three === one) {
      three = itemArray[getRandomIntInclusive()].path;
      console.log('duplicate image prevented');
    };
  };
  return [one, two, three];
};

function makeImages() {
  var threeNums = randomThreeNum();
  var left = document.getElementById('left');
  left.src = itemArray[threeNums[0]].path;
  console.log(threeNums[0]);
  var middle = document.getElementById('middle');
  middle.src = itemArray[threeNums[1]].path;
  console.log(threeNums[1]);
  var right = document.getElementById('right');
  right.src = itemArray[threeNums[2]].path;
  console.log(threeNums[2]);
};
makeImages();

var theContainer = document.getElementById('container');
theContainer.addEventListener('click', handleContainer);

var click = 0;

function handleContainer(event){
  console.log(event.target.id);
  if (event.target.id === 'container') {
    alert('You cannot follow instructions to click directly on a contained element. Your clicking privileges will be revoked. Have a nice day.');
  } else if (click < 25) {
    click++;
    console.log(click);
    makeImages();
  } else if (click = 25) {
    theContainer.removeEventListener('click', handleContainer);
  }
}
