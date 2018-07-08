

 //Numbers AppendTo Screen *****************************************************************/

 var totalCharEntered = 0;

$("#one").click(function(){
	if(totalCharEntered <10){
  $("<span>1</span>").appendTo("#screen-relay");
      totalCharEntered++;
  }
});

$("#two").click(function(){
	if(totalCharEntered <10){
  $("<span>2</span>").appendTo("#screen-relay");
      totalCharEntered++;
  }
});

$("#three").click(function(){
	if(totalCharEntered <10){
  $("<span>3</span>").appendTo("#screen-relay");
      totalCharEntered++;
  }
});

$("#four").click(function(){
	if(totalCharEntered <10){
  $("<span>4</span>").appendTo("#screen-relay");
      totalCharEntered++;
  }
});

$("#five").click(function(){
	if(totalCharEntered <10){
  $("<span>5</span>").appendTo("#screen-relay");
      totalCharEntered++;
  }
});

$("#six").click(function(){
	if(totalCharEntered <10){
  $("<span>6</span>").appendTo("#screen-relay");
      totalCharEntered++;
  }
});

$("#seven").click(function(){
	if(totalCharEntered <10){
  $("<span>7</span>").appendTo("#screen-relay");
      totalCharEntered++;
  }
});

$("#eight").click(function(){
	if(totalCharEntered <10){
  $("<span>8</span>").appendTo("#screen-relay");
      totalCharEntered++;
  }
});

$("#nine").click(function(){
	if(totalCharEntered <10){
  $("<span>9</span>").appendTo("#screen-relay");
      totalCharEntered++;
  }
});

$("#zero").click(function(){
	if(totalCharEntered <10){
  $("<span>0</span>").appendTo("#screen-relay");
      totalCharEntered++;
  }
});

//Operators AppendTo Screen *****************************************************************/

$("#plus").click(function(){
  $("<span> + </span>").appendTo("#screen-relay");
});

$("#decimal").click(function(){
  $("<span>.</span>").appendTo("#screen-relay");
});

$("#multiply").click(function(){
  $("<span> * </span>").appendTo("#screen-relay");
});

$("#minus").click(function(){
  $("<span> - </span>").appendTo("#screen-relay");
});

$("#divide").click(function(){
  $("<span> / </span>").appendTo("#screen-relay");
});

// Properties *****************************************************************/

$("#clear").click(function(){
  ($("#screen-relay, #output").text(""));
  totalCharEntered = 0;
});

// Evaluate value of screen *****************************************************************/


$("#equals").click(function() {
  var x = ($("#screen-relay").text());
  var finalValue = eval(x);

  console.log(finalValue);

  $("#output").html(finalValue);
});
