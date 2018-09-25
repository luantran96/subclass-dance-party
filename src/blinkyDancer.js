var BlinkyDancer = function(top, left, timeBetweenSteps) {

  Dancer.call(this,top,left,timeBetweenSteps);
  this.top = top;
  this.left = left;
  this.$node = $('<span class="blinkyDancer jimmy"></span>');
  this.$node.append('<img class="jimmy" src="Jimmy.gif"></img>');
  this.setPosition(top, left);
  this.danceWithTina = false;
};


  BlinkyDancer.prototype = Object.create(Dancer.prototype);
  BlinkyDancer.prototype.constructor = BlinkyDancer;

 


  BlinkyDancer.prototype.step = function() {

    Dancer.prototype.step.call(this);
    this.$node.toggle();
  };