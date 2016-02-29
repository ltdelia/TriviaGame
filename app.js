$(document).ready (function(){
	
	$(".start").click(function(){
		run();
	});

	var number = 120;

	var correct = 0;
	var incorrect = 0;
	var unanswered = 0;

	function run(){
      counter = setInterval(increment, 1000);
    }
    
    function increment(){
      number--
	  document.getElementById("question").innerHTML = ("<h2>Time Remaining: " + number + " Seconds </h2>");
	  pageTwo();
      if (number === 0){
        stop();
        pageThree();
      }
    }

    function stop(){
      clearInterval(counter);
    }


	function pageTwo(){
		var questions = ["1. Who below is NOT a Beatle?", 
						 "2. Which of these is the first album released by David Bowie?",
						 "3. What year did The Rolling Stones release '(I Can't Get No) Satisfaction'?",
						 "4. Which of these is NOT a lyric in Bob Dylan's 'Subterranean Homesick Blues'?",
						 "5. Who wrote the 1967 folk song 'Suzanne'?",
						 "6. Finish the lyric: 'Try to ___ , try to ____ / Break on _____ to the other ____'",
						 "7. Which song did Janis Joplin sing?",
						 "8. Who performed the song 'Hurdy Gurdy Man'?"];

		var choices = {	 one: ["John Lennon", "Ringo Starr", "George Harrison", "Yoko Ono", "Paul McCartney"];
						 two: ["Space Oddity", "Hunky Dory", "Aladdin Sane", "The Man Who Sold the World", "David Bowie"];
						 three: ["1962", "1964", "1965", "1967", "1968"];
						 four: ["Someone sent him to school/He turned out to be a fool", "The man in the coon-skin cap by the big pen",
						  "Don\'t try No-Doz/Better stay away from those", "Get sick, get well/Hang around a ink well", 
						  "Light yourself a candle/Don't wear sandals"];
						 five: ["Tom Rush", "Leonard Cohen", "James Taylor", "Randy Newman", "Pete Seeger"];
						 six: ["pun, glide, glue, slide", "dance, prance, France, chance",
						  "run, hide, through, side", "see, look, out, nook", "break, break, break, break"];
						 seven: ["'White Rabbit'", "'These Days'", "'The House of the Rising Sun'", "'California Dreamin\''", "Piece of My Heart"]; 
						 eight: ["Donovan", "Dick Dale", "The Kinks", "The Beach Boys", "The Grateful Dead"];
		}


		for(var i = 0; i < questions.length; i++){
			$("#question").append("<h3>" + questions[i] + "</h3>");
			$("#question").append("<input type='radio' id='1a' value='wrong'>" + choices[i][0] "<br>");
			$("#question").append("<input type='radio' id='1a' value='wrong'>" + choices[i][1] "<br>");
			$("#question").append("<input type='radio' id='1a' value='wrong'>" + choices[i][2] "<br>");
			$("#question").append("<input type='radio' id='1a' value='wrong'>" + choices[i][3] "<br>");
			$("#question").append("<input type='radio' id='1a' value='wrong'>" + choices[i][4] "<br>");
		}



	/*	//Question 1
		$("#question").append("<h3>Who below is NOT a Beatle?</h3>");
		$("#question").append("<input type='radio' id='1a' value='wrong'>John Lennon<br>");
		$("#question").append("<input type='radio' id='1b' value='wrong'>Ringo Starr<br>");
		$("#question").append("<input type='radio' id='1c' value='wrong'>George Harrison<br>");
		$("#question").append("<input type='radio' id='1d' value='correct'>Yoko Ono<br>");
		$("#question").append("<input type='radio' id='1e' value='wrong'>Paul McCartney<br>");

		//Question 2
		$("#question").append("<h3>Which of these is the first album released by David Bowie?</h3>");
		$("#question").append("<input type='radio' id='2a' value='wrong'>Space Oddity<br>");
		$("#question").append("<input type='radio' id='2b' value='wrong'>Hunky Dory<br>");
		$("#question").append("<input type='radio' id='2c' value='wrong'>Aladdin Sane<br>");
		$("#question").append("<input type='radio' id='2d' value='wrong'>The Man Who Sold the World<br>");
		$("#question").append("<input type='radio' id='2e' value='correct'>David Bowie<br>");

		//Question 3
		$("#question").append("<h3>What year did The Rolling Stones release '(I Can't Get No) Satisfaction'?</h3>");
		$("#question").append("<input type='radio' id='qradio' value='wrong'>1962<br>");
		$("#question").append("<input type='radio' id='qradio' value='wrong'>1964<br>");
		$("#question").append("<input type='radio' id='qradio' value='correct'>1965<br>");
		$("#question").append("<input type='radio' id='qradio' value='wrong'>1967<br>");
		$("#question").append("<input type='radio' id='qradio' value='wrong'>1968<br>");

		//Question 4
		$("#question").append("<h3>Which of these is NOT a lyric in Bob Dylan's 'Subterranean Homesick Blues'?</h3>");
		$("#question").append("<input type='radio' id='qradio' value='correct'>'Someone sent him to school/He turned out to be a fool'<br>");
		$("#question").append("<input type='radio' id='qradio' value='wrong'>'The man in the coon-skin cap by the big pen'<br>");
		$("#question").append("<input type='radio' id='qradio' value='wrong'>'Don\'t try No-Doz/Better stay away from those'<br>");
		$("#question").append("<input type='radio' id='qradio' value='wrong'>'Get sick, get well/Hang around a ink well'<br>");
		$("#question").append("<input type='radio' id='qradio' value='wrong'>'Light yourself a candle/Don't wear sandals<br>");

		//Question 5
		$("#question").append("<h3>Who wrote the 1967 folk song 'Suzanne'?</h3>");
		$("#question").append("<input type='radio' id='qradio' value='wrong'>Tom Rush<br>");
		$("#question").append("<input type='radio' id='qradio' value='correct'>Leonard Cohen<br>");
		$("#question").append("<input type='radio' id='qradio' value='wrong'>James Taylor<br>");
		$("#question").append("<input type='radio' id='qradio' value='wrong'>Randy Newman<br>");
		$("#question").append("<input type='radio' id='qradio' value='wrong'>Pete Seeger<br>");

		//Question 6
		$("#question").append("<h3>Finish the lyric: 'Try to ___ , try to ____ / Break on _____ to the other ____' </h3>");
		$("#question").append("<input type='radio' id='qradio' value='wrong'>pun, glide, glue, slide<br>");
		$("#question").append("<input type='radio' id='qradio' value='wrong'>dance, prance, France, chance<br>");
		$("#question").append("<input type='radio' id='qradio' value='correct'>run, hide, through, side<br>");
		$("#question").append("<input type='radio' id='qradio' value='wrong'>see, look, out, nook<br>");
		$("#question").append("<input type='radio' id='qradio' value='wrong'>break, break, break, break<br>");

		//Question 7
		$("#question").append("<h3>Which song did Janis Joplin sing?</h3>");
		$("#question").append("<input type='radio' id='qradio' value='wrong'>'White Rabbit'<br>");
		$("#question").append("<input type='radio' id='qradio' value='wrong'>'These Days'<br>");
		$("#question").append("<input type='radio' id='qradio' value='wrong'>'The House of the Rising Sun'<br>");
		$("#question").append("<input type='radio' id='qradio' value='wrong'>'California Dreamin\''<br>");
		$("#question").append("<input type='radio' id='qradio' value='correct'>'Piece of My Heart'<br>");

		//Question 8
		$("#question").append("<h3>Who performed the song 'Hurdy Gurdy Man'?</h3>");
		$("#question").append("<input type='radio' id='qradio' value='correct'>Donovan<br>");
		$("#question").append("<input type='radio' id='qradio' value='wrong'>Dick Dale<br>");
		$("#question").append("<input type='radio' id='qradio' value='wrong'>The Kinks<br>");
		$("#question").append("<input type='radio' id='qradio' value='wrong'>The Beach Boys<br>");
		$("#question").append("<input type='radio' id='qradio' value='wrong'>The Grateful Dead<br>");
	*/

		//Submit Button for Page Two
		var s=$('<button class="btn btn-success" id="submit" type="submit"><span class="glyphicon glyphicon-inbox" aria-hidden="true"></span> Submit</button>');
		$("#question").append(s);

		$("#submit").click(function(){
			stop();
			pageThree();
		});


	}

	function pageThree(){

		document.getElementById("question").innerHTML = ("<h2>Complete!</h2>");	
		
		$("#question").append("<h3>Correct Answers: " + correct + "</h3>");
		$("#question").append("<h3>Incorrect Answers: " + incorrect + "</h3>");
		$("#question").append("<h3>Unanswered: " + unanswered + "</h3>");

	}

});
	






//MAIN PROCESS
//======================================================================================================
