var SpinnyDancer = function(top, left, timeBetweenSteps) {
  //debugger;

  Dancer.call(this,top,left,timeBetweenSteps * 0.1);
  this.$node = $('<span class="spinnyDancer"></span>');
  this.$node.append('<img class="tina" src="Tina.gif"></img>');
  this.setPosition(top, left);
  this.degrees = 0;
  this.clickAction = function() {
    var idx = Math.floor(Math.random() * window.dancers.length);

    for( var i = 0; i < window.dancers.length; i++){

        var k = (i + idx) % window.dancers.length;
        var currentDancer = window.dancers[k];

        if(currentDancer.$node.hasClass('jimmy') && !currentDancer.dancingWithPartner){
      
            var jimmyLeft = currentDancer.left;
            var jimmyTop = currentDancer.top;
          
            this.$node.animate({left: jimmyLeft + 50, top: jimmyTop},2000);
            currentDancer.dancingWithPartner = true;
            this.dancingWithPartner = true;
            
            break;
        }
    }
  };

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  this.$node.on('click', () => this.clickAction());

};


  SpinnyDancer.prototype = Object.create(Dancer.prototype);
  SpinnyDancer.prototype.constructor = SpinnyDancer;



  SpinnyDancer.prototype.step = function() {
    Dancer.prototype.step.call(this);


    if (this.dancingWithPartner === false) {

      this.$node.css({'transform' : 'rotate(' + this.degrees + 'deg)'});
      this.degrees += 10;
      this.degrees = this.degrees % 360;
  
    } else {

      this.$node.css({'transform' : 'rotate(' + this.degrees + 'deg)'});
      if(this.degrees > 20){
        this.degrees -= 10;
      }else{
        this.degrees += 10;
      }
      

    }


  };