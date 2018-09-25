var SizyDancer = function(top, left, timeBetweenSteps) {
  //debugger;
  this.scaleY = 1.5;
  this.scaleX = 1.5;
  this.angle = 0;

  Dancer.call(this,top,left,timeBetweenSteps * 0.1);
  this.$node = $('<span class="sizyDancer"></span>');
  this.$node.append('<img class="tina" src="Jean.gif"></img>');
  this.setPosition(top, left);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  
};


  SizyDancer.prototype = Object.create(Dancer.prototype);
  SizyDancer.prototype.constructor = SizyDancer;

  

  SizyDancer.prototype.step = function() {

    Dancer.prototype.step.call(this);
    
    this.$node.css({'transform' : 'scale(' + 0.2 * this.scaleY + ', ' + 0.2 * this.scaleX + ')'});

    this.scaleX += 0.5 * Math.sin(this.angle);
    this.scaleY += 0.5 * Math.sin(this.angle * 2 / 3);
    this.angle += Math.PI / 8;
  };