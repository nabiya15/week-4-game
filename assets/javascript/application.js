$(document).ready(function() {
//declare variables for computerGuess, win , loss and all four crystals
var win=0;
var loss=0;
//function that resets the value of crystals, player's score and compGuess
function init() {
	 compGuess=0;
	 playerScore=0;
	 crystalRed=0;
	 crystalGreen=0;
	 crystalYellow=0;
	 crystalBlue=0;
	 playerScore=0;
	 
	compGuess= Math.floor(Math.random() * 102) + 19;
	console.log(compGuess);
	$('#computerGuess').html(compGuess);

	crystalRed= Math.floor(Math.random() * 12) + 1;
	$('.red').attr('value',crystalRed);
	console.log("Red's value is: "+crystalRed);

	crystalGreen= Math.floor(Math.random() * 12) + 1;
	$('.green').attr('value',crystalGreen);
	console.log("Green's value is: "+crystalGreen);

	crystalBlue= Math.floor(Math.random() * 12) + 1;
	$('.blue').attr('value',crystalBlue);
	console.log("Blue's value is: "+crystalBlue);

	crystalYellow= Math.floor(Math.random() * 12) + 1;
	$('.yellow').attr('value',crystalYellow);
	console.log("Yellow's value is: "+crystalYellow);

	$('#displayscore').html(playerScore);	
	
}
init();

	$('.crystal').click(function play(){
		 var audio= document.createElement('audio');
   	     audio.setAttribute('src', 'assets/sounds/click.mp3');
	     audio.play();

		if($(this).hasClass('crystal')){
			score=parseInt($(this).attr('value'));
			playerScore+=score;
			$('#displayscore').html(playerScore);	

		if(playerScore===compGuess){
			 var audio= document.createElement('audio');
   	     	 audio.setAttribute('src', 'assets/sounds/winsound.mp3');
	         audio.play();
		   	 win++;

			 $('#wins').html(win);
			 $('status').html('Yay you win!!');
			 init();
			
		}else if(playerScore>compGuess){
			loss++;
			 var audio= document.createElement('audio');
   	    	 audio.setAttribute('src', 'assets/sounds/loosesound.mp3');
	     	 audio.play();
			 $('#lose').html(loss);
			 $('status').html('Oops!! You loose!!');
			 init();
			}
		}
	});
});
