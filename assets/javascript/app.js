$(document).ready (function(){
	
	//Get Started Button
	$(".start").click(function(){
		run();
	});

	//Timer
	var number = 120;

	//Score Variables
	var correct = 0;
	var incorrect = 0;

	//Sets interval for Timer
	function run(){
      counter = setInterval(increment, 1000);
      pageTwo();
    }
    
    //Timer decreases by one second, stops when reaches 0
    function increment(){
      number--
      document.getElementById("timer").innerHTML = ("<h2>Time Remaining: " + number + " Seconds </h2>");
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
		$("#question").append("<input type='radio' id='question1' name='group1' value='wrong'>John Lennon<br>");
		$("#question").append("<input type='radio' id='question1' name='group1' value='wrong'>Ringo Starr<br>");
		$("#question").append("<input type='radio' id='question1' name='group1' value='wrong'>George Harrison<br>");
		$("#question").append("<input type='radio' id='question1' name='group1' value='correct'>Yoko Ono<br>");
		$("#question").append("<input type='radio' id='question1' name='group1' value='wrong'>Paul McCartney<br>");

		//Question 2
		$("#question").append("<h3>Which of these is the first album released by David Bowie?</h3>");
		$("#question").append("<input type='radio' id='question2' name='group2' value='wrong'>Space Oddity<br>");
		$("#question").append("<input type='radio' id='question2' name='group2' value='wrong'>Hunky Dory<br>");
		$("#question").append("<input type='radio' id='question2' name='group2' value='wrong'>Aladdin Sane<br>");
		$("#question").append("<input type='radio' id='question2' name='group2' value='wrong'>The Man Who Sold the World<br>");
		$("#question").append("<input type='radio' id='question2' name='group2' value='correct'>David Bowie<br>");

		//Question 3
		$("#question").append("<h3>What year did The Rolling Stones release '(I Can't Get No) Satisfaction'?</h3>");
		$("#question").append("<input type='radio' id='question3' name='group3' value='wrong'>1962<br>");
		$("#question").append("<input type='radio' id='question3' name='group3' value='wrong'>1964<br>");
		$("#question").append("<input type='radio' id='question3' name='group3' value='correct'>1965<br>");
		$("#question").append("<input type='radio' id='question3' name='group3' value='wrong'>1967<br>");
		$("#question").append("<input type='radio' id='question3' name='group3' value='wrong'>1968<br>");

		//Question 4
		$("#question").append("<h3>Which of these is NOT a lyric in Bob Dylan's 'Subterranean Homesick Blues'?</h3>");
		$("#question").append("<input type='radio' id='question4' name='group4' value='correct'>'Someone sent him to school/He turned out to be a fool'<br>");
		$("#question").append("<input type='radio' id='question4' name='group4' value='wrong'>'The man in the coon-skin cap by the big pen'<br>");
		$("#question").append("<input type='radio' id='question4' name='group4' value='wrong'>'Don\'t try No-Doz/Better stay away from those'<br>");
		$("#question").append("<input type='radio' id='question4' name='group4' value='wrong'>'Get sick, get well/Hang around a ink well'<br>");
		$("#question").append("<input type='radio' id='question4' name='group4' value='wrong'>'Light yourself a candle/Don't wear sandals<br>");

		//Question 5
		$("#question").append("<h3>Who wrote the 1967 folk song 'Suzanne'?</h3>");
		$("#question").append("<input type='radio' id='question5' name='group5' value='wrong'>Tom Rush<br>");
		$("#question").append("<input type='radio' id='question5' name='group5' value='correct'>Leonard Cohen<br>");
		$("#question").append("<input type='radio' id='question5' name='group5' value='wrong'>James Taylor<br>");
		$("#question").append("<input type='radio' id='question5' name='group5' value='wrong'>Randy Newman<br>");
		$("#question").append("<input type='radio' id='question5' name='group5' value='wrong'>Pete Seeger<br>");

		//Question 6
		$("#question").append("<h3>Finish the lyric: 'Try to ___ , try to ____ / Break on _____ to the other ____' </h3>");
		$("#question").append("<input type='radio' id='question6' name='group6' value='wrong'>pun, glide, glue, slide<br>");
		$("#question").append("<input type='radio' id='question6' name='group6' value='wrong'>dance, prance, France, chance<br>");
		$("#question").append("<input type='radio' id='question6' name='group6' value='correct'>run, hide, through, side<br>");
		$("#question").append("<input type='radio' id='question6' name='group6' value='wrong'>see, look, out, nook<br>");
		$("#question").append("<input type='radio' id='question6' name='group6' value='wrong'>break, break, break, break<br>");

		//Question 7
		$("#question").append("<h3>Which song did Janis Joplin sing?</h3>");
		$("#question").append("<input type='radio' id='question7' name='group7' value='wrong'>'White Rabbit'<br>");
		$("#question").append("<input type='radio' id='question7' name='group7' value='wrong'>'These Days'<br>");
		$("#question").append("<input type='radio' id='question7' name='group7' value='wrong'>'The House of the Rising Sun'<br>");
		$("#question").append("<input type='radio' id='question7' name='group7' value='wrong'>'California Dreamin\''<br>");
		$("#question").append("<input type='radio' id='question7' name='group7' value='correct'>'Piece of My Heart'<br>");

		//Question 8
		$("#question").append("<h3>Who performed the song 'Hurdy Gurdy Man'?</h3>");
		$("#question").append("<input type='radio' id='question8' name='group8' value='correct'>Donovan<br>");
		$("#question").append("<input type='radio' id='question8' name='group8' value='wrong'>Dick Dale<br>");
		$("#question").append("<input type='radio' id='question8' name='group8' value='wrong'>The Kinks<br>");
		$("#question").append("<input type='radio' id='question8' name='group8' value='wrong'>The Beach Boys<br>");
		$("#question").append("<input type='radio' id='question8' name='group8' value='wrong'>The Grateful Dead<br>");

		$("#question").append("<br>");

		//Functions to Check Answers, by Question		
		$('input[id=question1]').on('change', function() {
	   		var answer = $('input[name=group1]:checked', '#question').val();
	   		if(answer == "correct"){
	   			correct++
	   		}else if(answer == "wrong"){
	   			incorrect++
	   		}
		});

		$('input[id=question2]').on('change', function() {
	   		var answer = $('input[name=group2]:checked', '#question').val();
	   		if(answer == "correct"){
	   			correct++
	   		}else if(answer == "wrong"){
	   			incorrect++
	   		}
		});

		$('input[id=question3]').on('change', function() {
	   		var answer = $('input[name=group3]:checked', '#question').val();
	   		if(answer == "correct"){
	   			correct++
	   		}else if(answer == "wrong"){
	   			incorrect++
	   		}
		});	

		$('input[id=question4]').on('change', function() {
	   		var answer = $('input[name=group4]:checked', '#question').val();
	   		if(answer == "correct"){
	   			correct++
	   		}else if(answer == "wrong"){
	   			incorrect++
	   		}
		});

		$('input[id=question5]').on('change', function() {
	   		var answer = $('input[name=group5]:checked', '#question').val();
	   		if(answer == "correct"){
	   			correct++
	   		}else if(answer == "wrong"){
	   			incorrect++
	   		}
		});

		$('input[id=question6]').on('change', function() {
	   		var answer = $('input[name=group6]:checked', '#question').val();
	   		if(answer == "correct"){
	   			correct++
	   		}else if(answer == "wrong"){
	   			incorrect++
	   		}
		});

		$('input[id=question7]').on('change', function() {
	   		var answer = $('input[name=group7]:checked', '#question').val();
	   		if(answer == "correct"){
	   			correct++
	   		}else if(answer == "wrong"){
	   			incorrect++
	   		}
		});

		$('input[id=question8]').on('change', function() {
	   		var answer = $('input[name=group8]:checked', '#question').val();
	   		if(answer == "correct"){
	   			correct++
	   		}else if(answer == "wrong"){
	   			incorrect++
	   		}
		});	

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

		document.getElementById("done").innerHTML = ("<h2>Complete!</h2>");	
		
		$("#done").append("<h3>Correct Answers: " + correct + "</h3>");
		$("#done").append("<h3>Incorrect Answers: " + incorrect + "</h3>");

	}

});