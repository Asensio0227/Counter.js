function getElement(selection) {
  let element = document.querySelector(selection);
  
  if (element) {
    return element;
  }
  throw new Error(`please check your ${selection} selector, and try again`)
};

function Counter(element, value) {
  this.counter = element;
  this.value = value;
  this.increaseBtn = element.querySelector('.increase');
  this.resetBtn = element.querySelector('.reset');
  this.decreaseBtn = element.querySelector('.decrease');
  this.valueDOM = element.querySelector('.value');
  this.valueDOM.textContent = value;
  
  this.increase = this.increase.bind(this);
  this.reset = this.reset.bind(this);
  this.decrease = this.decrease.bind(this);
  
  this.increaseBtn.addEventListener('click', this.increase);
  this.resetBtn.addEventListener('click', this.reset);
  this.decreaseBtn.addEventListener('click', this.decrease);
};
Counter.prototype.increase = function () {
  this.value++;
  this.valueDOM.textContent = this.value;
};
Counter.prototype.decrease = function () {
  this.value--;
  this.valueDOM.textContent = this.value
};
Counter.prototype.reset = function () {
  this.value = 0;
  this.valueDOM.textContent = this.value;
};


const firstcounter = new Counter(getElement('.first-counter'), 100);
const secondCounter = new Counter(getElement('.second-counter'), 200);