$(document).ready(function(){
	init();
	alert("Clear the Screen with the left and right buttons");
	var size = prompt("Enter Pen Size (Bigger than 10px)");
	changePen(size);
	$('.cell').mouseover(
			function(){
				$(this).css("background-color", 'purple');
			}
		);
	$('.button').on('click', function(){
		$('.cell').css("background-color","white");
	})

});

function init(){
	$('html').css('background-color', 'red');
	$('body').prepend('<h1> Etch-A-Sketch<h1>');
	$('body').append('<div class="center"></div>');
	$('.center').css('background-color', 'white');
	$('.button').css('background-color', '#0000FF');
	$('h1').css('font-family', 'Fjalla One');
	$('h1').css('font-size', '50px');
	$('h1').css('text-shadow', '1px 0 black, 0 1px black, 1px 0 black, 0 -1px black');
	createGrid();

}

function createGrid(){
	var count = 0;
	while(count < 8000){
		$('.center').append("<div class='cell'></div>");
		count++;
		}	

}

function changePen(size){
	if(size < 10){
		size = 10;
	}
	$('.cell').height(size);
	$('.cell').width(size);
}

