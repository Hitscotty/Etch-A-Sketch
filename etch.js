$(document).ready(function(){
	init();
	alert("Clear the Screen with the left and right buttons");
	var size = prompt("Enter Pen Size (Bigger than 10px)");
	changePen(size);
	var updated = 'purple';


	$('.cell').mouseover(
			function(){
				$(this).css("background-color", updated);
			}
		);

	$('.button').on('click', function(){
		$('.cell').css("background-color","white");
	});

	updated = update();

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
	createColors();

}

function createGrid(){
	var count = 0;
	while(count < 8000){
		$('.center').append("<div class='cell'></div>");
		count++;
		}

}

function createColors(){
	var count = 0;
	colors = ['#E0F8F1','#F6CED8','#F6CEF5','#E3CEF6','#CECEF6','#CEECF5','#CEF6E3','#CEF6CE','#ECF6CE', '#A9A9F5','#BCF5A9','#F5A9A9', '#E6E6E6'];
	col  =[];

	$('body').append('<div class="color"></div>');

	$('.color').append('<h4 id="colorTitle"> Pick Your Color </h4>');

	while(count < 13){
		col[count] = $('<div class="rgb"></div>')
	$('.color').append(col[count]);
	count++;
}

	$.each(col, function(i, val){
		$(col[i]).css("background-color", colors[i]);
		});

}

function changePen(size){
	if(size < 10){
		size = 10;
	}
	$('.cell').height(size);
	$('.cell').width(size);
}

function updated(){

}
