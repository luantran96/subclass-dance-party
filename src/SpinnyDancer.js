var SpinnyDancer = function(top, left, timeBetweenSteps) {
  //debugger;

  Dancer.call(this,top,left,timeBetweenSteps);
  this.$node = $('<span class="blinkyDancer"></span>');
  this.setPosition(top, left);
  this.degrees = 0;
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

};


  SpinnyDancer.prototype = Object.create(Dancer.prototype);
  SpinnyDancer.prototype.constructor = SpinnyDancer;

  SpinnyDancer.prototype.oldStep = SpinnyDancer.prototype.step;


  SpinnyDancer.prototype.step = function() {
    this.oldStep();
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    this.$node.css({'transform' : 'rotate(' + this.degrees + 'deg)'});
    this.degrees += 10;
    
  };