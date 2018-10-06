
  $(document).ready(function () { 
	var targetNum;
	var score;
	var wins = 0;
	var losses = 0; 
    var rap1;
    var rap2;
    var rap3;
    var rap4;
    
    function initGame() {
	targetNum = 0;
	targetNum = Math.floor((Math.random() * 100) + 20);
	score = 0;
	rap1 = 0;
	rap2 = 0;
	rap3 = 0;
	rap4 = 0;
	rap1 = Math.floor((Math.random()* 12) + 1);
	rap2 = Math.floor((Math.random()* 12) + 1);
	rap3 = Math.floor((Math.random()* 12) + 1);
	rap4 = Math.floor((Math.random()* 12) + 1);
	$("#targetNum").text(targetNum);
	$("#score").text(score);
	
   }
   initGame();
   
	$("#wins").text(wins);
	$("#losses").text(losses);
	

   
   $("#rap1").on("click", function() {
	   $(this).val(rap1);
	   score += rap1;
	   updateScore();
	});
	 $("#rap2").on("click", function() {
	   $(this).val(rap2);
	   score += rap2;
	   updateScore();
	});
	 $("#rap3").on("click", function() {
	   $(this).val(rap3);
	   score += rap3;
	   updateScore();
	});
	 $("#rap4").on("click", function() {
	   $(this).val(rap4);
	   score += rap4;
	   updateScore();
	});
	function updateScore() { 
		
		$("#score").text(score);
		if(score === targetNum) {
		wins++;
		$("#wins").html(wins);
		alert("WINNER");
		initGame();
	} 
	if(score > targetNum) {
		losses++
		
		$("#losses").html(losses);
		alert("LOSER!!!!");
		initGame();
		}	
	}
	
	

});
