import $ from 'jquery';
import 'what-input';


// Foundation JS relies on a global variable. In ES6, all imports are hoisted
// to the top of the file so if we used `import` to import Foundation,
// it would execute earlier than we have assigned the global variable.
// This is why we have to use CommonJS require() here since it doesn't
// have the hoisting behavior.
window.jQuery = $;
require('foundation-sites');

// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';


$(document).foundation();


function downloadTimer() {
	var seconds = document.getElementById("countdown").textContent;

	if (seconds == 0) {
		seconds = 6;
	} 

	var countdown = setInterval(function() {
	    seconds--;
	    document.getElementById("countdown").textContent = seconds;
	    if (seconds <= 0) {
	    	clearInterval(countdown);
	    	beep();
	    }
	}, 1000);

}


function beep() {
	var snd = new Audio("data:audio/wav;base64,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qJrx4KOQjahZxWbcZgztj2c49nKmkId44S71j0c8eV9yDK6uPRzx5X18eDvjvQ6yKo9ZSS6l//8elePK/Lf//IInrOF/FvDoADYAGBMGb7FtErm5MXMlmPAJQVgWta7Zx2go+8xJ0UiCb8LHHdftWyLJE0QIAIsI+UbXu67dZMjmgDGCGl1H+vpF4NSDckSIkk7Vd+sxEhBQMRU8j/12UIRhzSaUdQ+rQU5kGeFxm+hb1oh6pWWmv3uvmReDl0UnvtapVaIzo1jZbf/pD6ElLqSX+rUmOQNpJFa/r+sa4e/pBlAABoAAAAA3CUgShLdGIxsY7AUABPRrgCABdDuQ5GC7DqPQCgbbJUAoRSUj+NIEig0YfyWUho1VBBBA//uQZB4ABZx5zfMakeAAAAmwAAAAF5F3P0w9GtAAACfAAAAAwLhMDmAYWMgVEG1U0FIGCBgXBXAtfMH10000EEEEEECUBYln03TTTdNBDZopopYvrTTdNa325mImNg3TTPV9q3pmY0xoO6bv3r00y+IDGid/9aaaZTGMuj9mpu9Mpio1dXrr5HERTZSmqU36A3CumzN/9Robv/Xx4v9ijkSRSNLQhAWumap82WRSBUqXStV/YcS+XVLnSS+WLDroqArFkMEsAS+eWmrUzrO0oEmE40RlMZ5+ODIkAyKAGUwZ3mVKmcamcJnMW26MRPgUw6j+LkhyHGVGYjSUUKNpuJUQoOIAyDvEyG8S5yfK6dhZc0Tx1KI/gviKL6qvvFs1+bWtaz58uUNnryq6kt5RzOCkPWlVqVX2a/EEBUdU1KrXLf40GoiiFXK///qpoiDXrOgqDR38JB0bw7SoL+ZB9o1RCkQjQ2CBYZKd/+VJxZRRZlqSkKiws0WFxUyCwsKiMy7hUVFhIaCrNQsKkTIsLivwKKigsj8XYlwt/WKi2N4d//uQRCSAAjURNIHpMZBGYiaQPSYyAAABLAAAAAAAACWAAAAApUF/Mg+0aohSIRobBAsMlO//Kk4soosy1JSFRYWaLC4qZBYWFRGZdwqKiwkNBVmoWFSJkWFxX4FFRQWR+LsS4W/rFRb/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VEFHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU291bmRib3kuZGUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAwNGh0dHA6Ly93d3cuc291bmRib3kuZGUAAAAAAAAAACU=");  
		snd.play();
}


function next_card(cards) {

    if (cards.length){
      	var single = cards.shift();
    	$('.callout').append(screen(single));    	
    	downloadTimer();

  	} else {

  		alert("There are no more choices.");

	}  
}


function screen(words){
  	var question = words.three_words;

	return `
	    <p>${question}</p>
	`;

}

class Choices {
  constructor (three_words) {
    this.three_words = three_words;
  }
}

var rule1 = new Choices ("Name 3 First Dance Songs - Card 1");
var rule2 = new Choices ("Name 3 Stripper Costumes - Card 2");
var rule3 = new Choices ("Name 3 TV Couples - Card 3");
var rule4 = new Choices ("Name 3 Places to propose - Card 4");
var rule5 = new Choices ("Name 3 Celebrity Couples - Card 5");
var rule6 = new Choices ("Name 3 Date Night Activities - Card 6");
var rule7 = new Choices ("Name 3 People who need to gain weight - Card 7");
var rule8 = new Choices ("Name 3 Cocktails - Card 8");
var rule9 = new Choices ("Name 3 Things you can do with a condom - Card 9");
var rule10 = new Choices ("Name 3 Wet Things - Card 10");
var rule11 = new Choices ("Name 3 Times Bigger is Better - Card 11");
var rule12 = new Choices ("Name 3 Things You Don't Want Your Boss to Tell You - Card 12");
var rule13 = new Choices ("Name 3 Stains - Card 13");
var rule14 = new Choices ("Name 3 Things that are forged - Card 14");
var rule15 = new Choices ("Name 3 Things you don't want your doctor to say - Card 15");
var rule16 = new Choices ("Name 3 Potential Safe Words - Card 16");
var rule17 = new Choices ("Name 3 Reasons you go to Court - Card 17");
var rule18 = new Choices ("Name 3 Things You Shouldn't Buy from a Street Vendor - Card 18");
var rule19 = new Choices ("Name 3 Reasons to Take Your Shirt Off - Card 19");
var rule20 = new Choices ("Name 3 People Who Always Take the Blame - Card 20");

var full_stack = [ rule1, rule2, rule3, rule4, rule5, rule6, rule7, rule8, rule9, rule10, rule11, rule12, rule13, rule14, rule15, rule16, rule17, rule18, rule19, rule20 ];


var rule21 = new Choices ("Name 3 Uses for Your Nose - Card 1");
var rule22 = new Choices ("Name 3 Things You Wear Under Clothing - Card 2");
var rule23 = new Choices ("Name 3 Jerks - Card 3");
var rule24 = new Choices ("Name 3 Things You Lock Up - Card 4");
var rule25 = new Choices ('Name 3 Words you say instead of the "F" word - Card 5');
var rule26 = new Choices ("Name 3 Signs that He/She is into you - Card 6");
var rule27 = new Choices ("Name 3 Cougars - Card 7");
var rule28 = new Choices ("Name 3 Things that get itchy - Card 8");
var rule29 = new Choices ("Name 3 Messy Activities - Card 9");
var rule30 = new Choices ("Name 3 Things You Shouldn't Do over FaceTime/Skype/Zoom - Card 10");
var rule31 = new Choices ("Name 3 Phobias/Fears - Card 11");
var rule32 = new Choices ("Name 3 Phallic Shaped Things - Card 12");
var rule33 = new Choices ("Name 3 Things You'd Hate to Find in Your Burrito - Card 13");
var rule34 = new Choices ("Name 3 Lesbians - Card 14");
var rule35 = new Choices ("Name 3 Things You Can't Resist - Card 15");
var rule36 = new Choices ("Name 3 People Who are in the Mafia - Card 16");
var rule37 = new Choices ("Name 3 Things It's Best Not to Rush Into - Card 17");
var rule38 = new Choices ("Name 3 Ways to Apologize to Your Significant Other - Card 18");
var rule39 = new Choices ("Name 3 Uses for Your Tongue - Card 19");
var rule40 = new Choices ("Name 3 Sex Toys - Card 20");

var full_stack2 = [rule21, rule22, rule23, rule24, rule25, rule26, rule27, rule28, rule29, rule30, rule31, rule32, rule33, rule34, rule35, rule36, rule37, rule38, rule39, rule40];

var rule41 = new Choices ("Name 3 Places You Stash Condoms - Card 1");
var rule42 = new Choices ("Name 3 Things You Wouldn't Want to Get Infected - Card 2");
var rule43 = new Choices ("Name 3 Activities that Make You Hungry- Card 3");
var rule44 = new Choices ("Name 3 Sins - Card 4");
var rule45 = new Choices ('Name 3 Reasons to Feel Shame - Card 5');
var rule46 = new Choices ('Name 3 Words for "Angry" - Card 6');
var rule47 = new Choices ("Name 3 Places You Wish You Could Wear Your Pajamas - Card 7");
var rule48 = new Choices ("Name 3 Bachelorette Party Activities - Card 8");
var rule49 = new Choices ("Name 3 Reasons to Have a Drink - Card 9");
var rule50 = new Choices ("Name 3 Foods/Drinks that Make Your Urine Stink - Card 10");
var rule51 = new Choices ("Name 3 Attractive Qualities In a Person - Card 11");
var rule52 = new Choices ("Name 3 Hot Older People - Card 12");
var rule53 = new Choices ("Name 3 Ways to Make Someone Listen - Card 13");
var rule54 = new Choices ("Name 3 Things that are no good Dry - Card 14");
var rule55 = new Choices ("Name 3 Things that Make You Feel Good - Card 15");
var rule56 = new Choices ("Name 3 Places to Buy Lingerie - Card 16");
var rule57 = new Choices ("Name 3 Places You Shouldn't get a Tatoo - Card 17");
var rule58 = new Choices ("Name 3 People with no heart - Card 18");
var rule59 = new Choices ("Name 3 Celebrities Involved in a Sex Scandal - Card 19");
var rule60 = new Choices ("Name 3 People Who Swear a Lot - Card 20");

var full_stack3 = [rule41, rule42, rule43, rule44, rule45, rule46, rule47, rule48, rule49, rule50, rule51, rule52, rule53, rule54, rule55, rule56, rule57, rule58, rule59, rule60];

var rule61 = new Choices ("Name 3 Reasons You Puke - Card 1");
var rule62 = new Choices ("Name 3 Turn Ons - Card 2");
var rule63 = new Choices ("Name 3 People You Should Never Sleep With - Card 3");
var rule64 = new Choices ("Name 3 Assets of the Opposite Sex - Card 4");
var rule65 = new Choices ('Name 3 Presidential Candidates Who Lost - Card 5');
var rule66 = new Choices ('Name 3 Ways to Pass Time on a Plane - Card 6');
var rule67 = new Choices ("Name 3 Things You Could do with a Pencil - Card 7");
var rule68 = new Choices ("Name 3 Things You Pay for By the Hour - Card 8");
var rule69 = new Choices ("Name 3 Actors You Think are Good in Bed - Card 9");
var rule70 = new Choices ('Name 3 Reasons to Call in "Sick" - Card 10');
var rule71 = new Choices ("Name 3 Foods You Can Use During Sex - Card 11");
var rule72 = new Choices ("Name 3 Gay Men - Card 12");
var rule73 = new Choices ("Name 3 Times You'd Hate Being Rushed - Card 13");
var rule74 = new Choices ("Name 3 Nicknames for a Penis - Card 14");
var rule75 = new Choices ("Name 3 Times Fast is Better - Card 15");
var rule76 = new Choices ("Name 3 Things You Flush Down a Toilet - Card 16");
var rule77 = new Choices ("Name 3 Things that Make You Poop - Card 17");
var rule78 = new Choices ("Name 3 Drugs - Card 18");
var rule79 = new Choices ("Name 3 People Who are Going to Hell - Card 19");
var rule80 = new Choices ("Name 3 Weapons - Card 20");

var full_stack4 = [rule61, rule62, rule63, rule64, rule65, rule66, rule67, rule68, rule69, rule70, rule71, rule72, rule73, rule74, rule75, rule76, rule77, rule78, rule79, rule80];


$('.grid-container .cell p a.stackone').on('click', function(event) {
	$('.callout').empty();
  	next_card(full_stack);
});

$('.grid-container .cell p a.stacktwo').on('click', function(event) {
	$('.callout').empty();
  	next_card(full_stack2);
});

$('.grid-container .cell p a.stackthree').on('click', function(event) {
	$('.callout').empty();
  	next_card(full_stack3);
});

$('.grid-container .cell p a.stackfour').on('click', function(event) {
	$('.callout').empty();
  	next_card(full_stack4);
});

$('.grid-container p a.timer').on('click', function(event) {
	$('.countdown').empty();
	console.log("click");
	downloadTimer();
});

