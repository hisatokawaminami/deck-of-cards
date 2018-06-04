
$(function() {


  var ranks = ["ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "jack", "queen", "king",]
  var suits = ["spades", "clubs", "hearts", "diamonds"]

  suits.forEach(function(suit){
    ranks.forEach(function(rank){

      $("#cards"). append('<li>' + rank + ' of ' + suit + '</li>' );
    });
  });


});
