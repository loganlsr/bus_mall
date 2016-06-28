'use strict';

function Product(name, path) {
  this.name = name;
  this.path = path;
  this.tally = 0;
  this.click = 0;
};

var itemArray = [];
var left = document.getElementById('left');
var middle = document.getElementById('middle');
var right = document.getElementById('right');
var currentNums = [];
var tally = [];
var name = [];

// function updateChartArray() {
//   for (var i = 0; i < ; i++)
//
// };

function getRandomIntInclusive() {
  return Math.floor(Math.random() * (itemArray.length));
};

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
  while(one === currentNums[0] || one === currentNums[1] || one === currentNums[2]) {
    one = getRandomIntInclusive();
    console.log('one matched a prior image');
  }
  var two = getRandomIntInclusive();
  while(two === currentNums[0] || two === currentNums[1] || two === currentNums[2]) {
    two = getRandomIntInclusive();
    console.log('two matched a prior image');
  }
  var three = getRandomIntInclusive();
  while(three === currentNums[0] || three === currentNums[1] || three === currentNums[2]) {
    three = getRandomIntInclusive();
    console.log('three matched a prior image');
  }

  while (one === three || one === two || two === three){
    console.log('dupe');
    if (one === two) {
      two = getRandomIntInclusive();
    };
    if (three === two || three === one) {
      three = getRandomIntInclusive();
      console.log('duplicate image prevented');
    };
  };
  currentNums = [one, two, three];
  // console.log(currentNums);
  return currentNums;
};

function makeImages() {
  var threeNums = randomThreeNum();
  left.src = itemArray[threeNums[0]].path;
  left.alt = itemArray[threeNums[0]].name;
  itemArray[threeNums[0]].tally += 1;
  console.log(threeNums[0]);
  middle.src = itemArray[threeNums[1]].path;
  middle.alt = itemArray[threeNums[1]].name;
  itemArray[threeNums[1]].tally += 1;
  console.log(threeNums[1]);
  right.src = itemArray[threeNums[2]].path;
  right.alt = itemArray[threeNums[2]].name;
  itemArray[threeNums[2]].tally += 1;
  console.log(threeNums[2]);
};
makeImages();

var theContainer = document.getElementById('container');
theContainer.addEventListener('click', handleContainer);

var click = 0;

function handleContainer(event){
  console.log(event.target.alt);
  if (event.target.alt === 'container') {
    alert('You cannot follow instructions to click directly on a contained element. Please do so!');
  } else if (click < 25) {
    click++;
    console.log(click);
    makeImages();
  } else if (click = 25) {
    theContainer.removeEventListener('click', handleContainer);
  }
  for(var i = 0; i < itemArray.length; i++) {
    if(event.target.alt === itemArray[i].name)
      itemArray[i].click += 1;
    // console.log(itemArray[i].name + ' has ' + itemArray[i].clicks + ' clicks.');
  }
  makeImages();
}
