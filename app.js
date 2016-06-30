'use strict';
// JSON.parse(localStorage.data);

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
var click = 0;
document.getElementById('button').hidden = true;

function getRandomIntInclusive() {
  return Math.floor(Math.random() * (itemArray.length));
};

function callProducts() {
  if (localStorage.data) {
    itemArray = JSON.parse(localStorage.data);
  }
  else {
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
  }
};
callProducts();
// console.log(itemArray);

function randomThreeNum() {
  var one = getRandomIntInclusive();
  var two = getRandomIntInclusive();
  var three = getRandomIntInclusive();
  // console.log(currentNums);
  while (one === currentNums[0] || one === currentNums[1] || one === currentNums[2]) {
    one = getRandomIntInclusive();
    // console.log('one hit previous');
  }
  while (two === currentNums[0] || two === currentNums[1] || two === currentNums[2] || one === two) {
    two = getRandomIntInclusive();
    // console.log('two hit previous');
  }
  while (three === currentNums[0] || three === currentNums[1] || three === currentNums[2] || one === three || two === three) {
    three = getRandomIntInclusive();
    // console.log('three hit previous');
  }
  currentNums = [one, two, three];
  // console.log(currentNums);
  return currentNums;
};

function makeImages() {
  var threeNums = randomThreeNum();
  left.src = itemArray[threeNums[0]].path;
  left.alt = itemArray[threeNums[0]].name;
  itemArray[threeNums[0]].tally += 1;
  // console.log(threeNums[0]);
  middle.src = itemArray[threeNums[1]].path;
  middle.alt = itemArray[threeNums[1]].name;
  itemArray[threeNums[1]].tally += 1;
  // console.log(threeNums[1]);
  right.src = itemArray[threeNums[2]].path;
  right.alt = itemArray[threeNums[2]].name;
  itemArray[threeNums[2]].tally += 1;
  // console.log(threeNums[2]);
};
makeImages();

function handleContainer(event){
  // console.log(event.target.alt);
  for(var i = 0; i < itemArray.length; i++) {
    if(event.target.alt === itemArray[i].name)
      itemArray[i].click += 1;
    // console.log(itemArray[i] + 'this is the object we clicked on');
    // console.log(event.target.alt + 'this is the event target');
    // console.log(itemArray[i].name + ' has ' + itemArray[i].clicks + ' clicks.');
  }

  if (event.target.alt === 'container') {
    alert('You cannot follow instructions to click directly on a contained element. Please do so!');
  } else if (click < 25) {
    click++;
    // console.log(click);
    makeImages();
  } else if (click === 25) {
    theContainer.removeEventListener('click', handleContainer);
    localStorage.data = JSON.stringify(itemArray);
    showChart();
  }
};

function showChart() {
  document.getElementById('button').hidden = false;
}

function displayTable(event) {
  var barData = {
    labels : names(),
    datasets : [
      {
        label : 'Number of Times Item Selected',
        backgroundColor: '#48A497',
        data : tableData(),
      },
    ]
  };
  var barGraph = document.getElementById('barGraph').getContext('2d');
  new Chart.Bar(barGraph, {
    data: barData,
  });
}

var names = function() {
  var labels = [];
  for(var i = 0; i < itemArray.length; i++) {
    labels[i] = itemArray[i].name;
  }
  return labels;
};

var tableData = function() {
  var data = [];
  for(var i = 0; i < itemArray.length; i++) {
    data[i] = itemArray[i].click;
  }
  return data;
};

var theButton = document.getElementById('button');
theButton.addEventListener('click', displayTable);

var theContainer = document.getElementById('container');
theContainer.addEventListener('click', handleContainer);
