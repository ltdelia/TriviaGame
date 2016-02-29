$(document).ready (function(){
	
	//Get Started Button
	$(".start").click(function(){
		run();
	});

	//Timer
	var number = 10;

	//Score Variables
	var correct = 0;
	var incorrect = 0;
	var unanswered = 0;

	//Sets interval for Timer
	function run(){
      counter = setInterval(increment, 1000);
    }
    
    //Timer decreases by one second, stops when reaches 0
    function increment(){
      number--
	  document.getElementById("question").innerHTML = ("<h2>Time Remaining: " + number + " Seconds </h2>");
	  pageTwo();
      if (number === 0){
        stop();
        pageThree();
      }
    }

    //Stops the timer
    function stop(){
      clearInterval(counter);
    }

    //HTML Content Appended -- Trivia Section
	function pageTwo(){

		//Question 1
		$("#question").append("<h3>Who below is NOT a Beatle?</h3>");
		$("#question").append("<input type='radio' name='group1' id = 'red' value='wrong'>John Lennon<br>");
		$("#question").append("<input type='radio' name='group1' value='wrong'>Ringo Starr<br>");
		$("#question").append("<input type='radio' name='group1' value='wrong'>George Harrison<br>");
		$("#question").append("<input type='radio' name='group1' value='correct'>Yoko Ono<br>");
		$("#question").append("<input type='radio' name='group1' value='wrong'>Paul McCartney<br>");

		//Question 2
		$("#question").append("<h3>Which of these is the first album released by David Bowie?</h3>");
		$("#question").append("<input type='radio' name='group2' value='wrong'>Space Oddity<br>");
		$("#question").append("<input type='radio' name='group2' value='wrong'>Hunky Dory<br>");
		$("#question").append("<input type='radio' name='group2' value='wrong'>Aladdin Sane<br>");
		$("#question").append("<input type='radio' name='group2' value='wrong'>The Man Who Sold the World<br>");
		$("#question").append("<input type='radio' name='group2' value='correct'>David Bowie<br>");

		//Question 3
		$("#question").append("<h3>What year did The Rolling Stones release '(I Can't Get No) Satisfaction'?</h3>");
		$("#question").append("<input type='radio' name='group3' value='wrong'>1962<br>");
		$("#question").append("<input type='radio' name='group3' value='wrong'>1964<br>");
		$("#question").append("<input type='radio' name='group3' value='correct'>1965<br>");
		$("#question").append("<input type='radio' name='group3' value='wrong'>1967<br>");
		$("#question").append("<input type='radio' name='group3' value='wrong'>1968<br>");

		//Question 4
		$("#question").append("<h3>Which of these is NOT a lyric in Bob Dylan's 'Subterranean Homesick Blues'?</h3>");
		$("#question").append("<input type='radio' name='group4' value='correct'>'Someone sent him to school/He turned out to be a fool'<br>");
		$("#question").append("<input type='radio' name='group4' value='wrong'>'The man in the coon-skin cap by the big pen'<br>");
		$("#question").append("<input type='radio' name='group4' value='wrong'>'Don\'t try No-Doz/Better stay away from those'<br>");
		$("#question").append("<input type='radio' name='group4' value='wrong'>'Get sick, get well/Hang around a ink well'<br>");
		$("#question").append("<input type='radio' name='group4' value='wrong'>'Light yourself a candle/Don't wear sandals<br>");

		//Question 5
		$("#question").append("<h3>Who wrote the 1967 folk song 'Suzanne'?</h3>");
		$("#question").append("<input type='radio' name='group5' value='wrong'>Tom Rush<br>");
		$("#question").append("<input type='radio' name='group5' value='correct'>Leonard Cohen<br>");
		$("#question").append("<input type='radio' name='group5' value='wrong'>James Taylor<br>");
		$("#question").append("<input type='radio' name='group5' value='wrong'>Randy Newman<br>");
		$("#question").append("<input type='radio' name='group5' value='wrong'>Pete Seeger<br>");

		//Question 6
		$("#question").append("<h3>Finish the lyric: 'Try to ___ , try to ____ / Break on _____ to the other ____' </h3>");
		$("#question").append("<input type='radio' name='group6' value='wrong'>pun, glide, glue, slide<br>");
		$("#question").append("<input type='radio' name='group6' value='wrong'>dance, prance, France, chance<br>");
		$("#question").append("<input type='radio' name='group6' value='correct'>run, hide, through, side<br>");
		$("#question").append("<input type='radio' name='group6' value='wrong'>see, look, out, nook<br>");
		$("#question").append("<input type='radio' name='group6' value='wrong'>break, break, break, break<br>");

		//Question 7
		$("#question").append("<h3>Which song did Janis Joplin sing?</h3>");
		$("#question").append("<input type='radio' name='group7' value='wrong'>'White Rabbit'<br>");
		$("#question").append("<input type='radio' name='group7' value='wrong'>'These Days'<br>");
		$("#question").append("<input type='radio' name='group7' value='wrong'>'The House of the Rising Sun'<br>");
		$("#question").append("<input type='radio' name='group7' value='wrong'>'California Dreamin\''<br>");
		$("#question").append("<input type='radio' name='group7' value='correct'>'Piece of My Heart'<br>");

		//Question 8
		$("#question").append("<h3>Who performed the song 'Hurdy Gurdy Man'?</h3>");
		$("#question").append("<input type='radio' name='group8' value='correct'>Donovan<br>");
		$("#question").append("<input type='radio' name='group8' value='wrong'>Dick Dale<br>");
		$("#question").append("<input type='radio' name='group8' value='wrong'>The Kinks<br>");
		$("#question").append("<input type='radio' name='group8' value='wrong'>The Beach Boys<br>");
		$("#question").append("<input type='radio' name='group8' value='wrong'>The Grateful Dead<br>");

		$("#question").append("<br>");

		//Submit Button for Page Two
		var s=$('<button class="btn btn-success" id="submit" type="submit"><span class="glyphicon glyphicon-inbox" aria-hidden="true"></span> Submit</button>');
		$("#question").append(s);

		$("#submit").click(function(){
			stop();
			pageThree();
		});

    }



	//HTML Content Appended -- Total Scores
	function pageThree(){

		document.getElementById("question").innerHTML = ("<h2>Complete!</h2>");	
		
		$("#question").append("<h3>Correct Answers: " + correct + "</h3>");
		$("#question").append("<h3>Incorrect Answers: " + incorrect + "</h3>");
		$("#question").append("<h3>Unanswered: " + unanswered + "</h3>");

	}

});
	






//MAIN PROCESS
//======================================================================================================
