var SizyDancer = function(top, left, timeBetweenSteps) {
  //debugger;
  this.scaleY = 1.5;
  this.scaleX = 1.5;
  this.angle = 0;

  Dancer.call(this,top,left,timeBetweenSteps);
  this.$node = $('<span class="sizyDancer"></span>');
  this.setPosition(top, left);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  
};


  SizyDancer.prototype = Object.create(Dancer.prototype);
  SizyDancer.prototype.constructor = SizyDancer;

  SizyDancer.prototype.oldStep = SizyDancer.prototype.step;


  SizyDancer.prototype.step = function() {

    this.oldStep();
    
      this.$node.css({'transform' : 'scale(' + this.scaleY + ', ' + this.scaleX + ')'});
      // this.$node.animate({
      // transform: scale(this.scaleX, this.scaleY)
      
      // },this.timeBetweenSteps);

      this.scaleX += Math.sin(this.angle);
      this.scaleY += Math.sin(this.angle * 2 / 3);
      this.angle += Math.PI / 8;
  };