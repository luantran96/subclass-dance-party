var JumpyDancer = function(top, left, timeBetweenSteps) {

  Dancer.call(this,top,left,timeBetweenSteps);
  this.top = top;
  this.left = left;
  this.$node = $('<span class="JumpyDancer jimmy"></span>');
  this.$node.append('<img class="jimmy" src="Jimmy.gif"></img>');
  this.setPosition(top, left);
};


  JumpyDancer.prototype = Object.create(Dancer.prototype);
  JumpyDancer.prototype.constructor = JumpyDancer;

 


  JumpyDancer.prototype.step = function() {

    Dancer.prototype.step.call(this);
    this.$node.animate({top: this.top + 10},this.timeBetweenSteps / 2.5 );
    this.$node.animate({top: this.top - 10},this.timeBetweenSteps / 2.5 );
    //this.$node.toggle();
  };