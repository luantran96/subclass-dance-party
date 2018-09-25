describe('jumpyDancer', function() {

  var jumpyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    jumpyDancer = new JumpyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(jumpyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node move up and down', function() {
    sinon.spy(jumpyDancer.$node, 'animate');
    jumpyDancer.step();
    expect(jumpyDancer.$node.animate.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(jumpyDancer, 'step');
      expect(jumpyDancer.step.callCount).to.be.equal(0);
      //clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(jumpyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(jumpyDancer.step.callCount).to.be.equal(2);
    });
  });
});

describe('SizyDancer', function() {

  var sizyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    sizyDancer = new SizyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(sizyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that modifies its css', function() {
    sinon.spy(sizyDancer.$node, 'css');
    sizyDancer.step();
    expect(sizyDancer.$node.css.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least ten times per second', function() {
      sinon.spy(sizyDancer, 'step');
      expect(sizyDancer.step.callCount).to.be.equal(0);
      //clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(sizyDancer.step.callCount).to.be.equal(10);

      clock.tick(timeBetweenSteps);
      expect(sizyDancer.step.callCount).to.be.equal(20);
    });
  });
});

describe('SpinnyDancer', function() {

  var spinnyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    spinnyDancer = new SpinnyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(spinnyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that modifies css properties using JQuery', function() {
    sinon.spy(spinnyDancer.$node, 'css');
    spinnyDancer.step();
    expect(spinnyDancer.$node.css.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step more than once per second', function() {
      sinon.spy(spinnyDancer, 'step');
      //clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(spinnyDancer.step.callCount).is.above(1);

      clock.tick(timeBetweenSteps);
      expect(spinnyDancer.step.callCount).is.above(2);
    });
    it('should perform action when onClick function is called', function() {
      var jimmy = new JumpyDancer(50, 50, timeBetweenSteps);
      window.dancers = [];
      window.dancers.push(jimmy);
      spinnyDancer.clickAction();
      //debugger;
      clock.tick(2000);
      expect(spinnyDancer.dancingWithPartner).to.be.true;
      //expect(spinnyDancer.degrees).to.be.below(30);
      //expect(spinnyDancer.degrees).to.be.above(10);
    });
    it('should not perform action when no partner is available', function() {
      window.dancers =[];
      var gene = new SizyDancer(50, 50, timeBetweenSteps);
      window.dancers.push(gene);
      spinnyDancer.clickAction();
      clock.tick(2000);
      expect(spinnyDancer.dancingWithPartner).to.be.false;
    });
  });
});
