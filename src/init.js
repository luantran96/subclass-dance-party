$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer =  new dancerMakerFunction(
      $("body").height() * Math.random() * 0.7 + $("body").height() * 0.05,
      $("body").width() * Math.random() * 0.8 + $("body").width() * 0.05,
      500
    );

    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });



$('.LineUp').on('click', function(event) {

  var Y = $("body").height() * 0.5;
  var Xincrement = 2 * $("body").width() / window.dancers.length;
  var X;
  var line1 = window.dancers.slice(0, Math.floor(window.dancers.length / 2));
  var line2 = window.dancers.slice(Math.floor(window.dancers.length/2));

  for(var i = 0; line1.length > i ; i++){
    X = i * Xincrement;
    //window.dancers[i].setPosition(Y, X);

      line1[i].$node.animate({left:X, top:Y - 200}, 2000);
      line1[i].top = Y - 200;
      line1[i].left = X;
      line1[i].dancingWithPartner = false;
  }

  for(var i = 0; line2.length > i ; i++){
    X = i * Xincrement;
    //window.dancers[i].setPosition(Y,X);

      line2[i].$node.animate({left:X, top:Y + 200}, 2000);
      line2[i].top = Y + 200;
      line2[i].left = X;
      line2[i].dancingWithPartner = false;
      
  }

  });




});

