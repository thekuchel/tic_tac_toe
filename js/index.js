// JavaScript Document
$(document).ready(function() {
	var x = "x"
	var o = "o"
	var count = 0;
	var o_win = 0;
	var x_win = 0;
	var somebody_win = false;
	var last_win = "x";
	var size = 3;

	$(document).on('click', '#game li', function(){
		if($(this).html() == "+" && !somebody_win){
			if (count%2 == 0)
			{
				count++
				$(this).text(o)
				$(this).addClass('disable o btn-primary')

			}
			else  
			{
				count++
				$(this).text(x)
				$(this).addClass('disable x btn-info')
			}

			check_victory();
		} else if(somebody_win){
			alert(last_win + " has win! Please Restart!");
		}

	});

	function check_victory(){
		/* set inner html to array */
		var array_game = [];
		$("#game li").map(function(){
			array_game[array_game.length] = $(this).html();
		});

		for(i = 1; i<= array_game.length; i++){
			/* check horizontal */
			var row = i/size;
			if(isInt(row)){
				var win_horizontal = true;
				var no_x_horizontal = true;

				var start_array = (row*size)-size;
				var last_array = (row*size)-1;
				start_array = start_array >= 0 ? start_array : 0;

				for(j=start_array;j<row*size;j++){
					
					if(array_game[j] == "+"){
						no_x_horizontal = false;
					}

					// condition start after column 2 
					if(j > start_array){
						
						/* Condition for win by horizontal */
						if(array_game[j] == "+" || array_game[j-1] == "+"){
							win_horizontal = false;
						} else if(array_game[j] != array_game[j-1]){
							win_horizontal = false;
						}

						if(j == last_array){
							if(win_horizontal && no_x_horizontal){
								console.log(array_game[j] + " - WIN horizontal!!!");
								somebody_win = true;
								last_win = array_game[j];
								alert(array_game[j] + " - WIN");
								$("#" + array_game[j]+ "_win").html($("#" + array_game[j]+ "_win").html()/1+1);
								return true;
							}
						}
						/* End Condition for win by horizontal */

						
					}

					/* ====================================================== */


					if(row == size){

						/* ====================================================== */

						/* Condtion for win by vertical*/

						var win_vertical = true;
						var no_x_vertical = true;
						var win_slash_right = true;
						var no_x_slash_right = true;
						var win_slash_left = true;
						var no_x_slash_left = true;
						for(vi=row-1;vi>0;vi--){
							var vertical_array_before = j-(vi*size);
							var x_slash_array_before = j-(vi*size)-vi;
							var x_slash_left_array_before = j-(vi*size)+vi;

							if(array_game[vertical_array_before] == "+"){
								no_x_vertical = false;
							}

							if(array_game[x_slash_array_before] == "+"){
								no_x_slash_right = false;
							}

							if(array_game[x_slash_left_array_before] == "+"){
								no_x_slash_left = false;
							}

							if(array_game[vertical_array_before] != array_game[j]){
								win_vertical = false;
							}

							if(array_game[x_slash_array_before] != array_game[j]){
								win_slash_right = false;
							}

							if(array_game[x_slash_left_array_before] != array_game[j]){
								win_slash_left = false;
							}

							if(j == 6){
								//console.log(win_vertical + " WIN VERTICAL " + array_game[vertical_array_before] + " - " + array_game[j] + " INDEX " + j);
								//console.log(win_slash_right + " WIN X SLASH RIGHT " + array_game[x_slash_array_before] + " - " + array_game[j] + " INDEX " + j);
								console.log(win_slash_left + " WIN X SLASH LEFT " + array_game[x_slash_left_array_before] + " - " + array_game[j] + " INDEX " + j);
							}

						}

						if(win_vertical && no_x_vertical){
							console.log(array_game[j] + " - WIN Vertical !!!");
							somebody_win = true;
							last_win = array_game[j];
							alert(array_game[j] + " - WIN");
							$("#" + array_game[j]+ "_win").html($("#" + array_game[j]+ "_win").html()/1+1);
							return true;
						}

						if(win_slash_right && no_x_slash_right){
							console.log(array_game[j] + " - WIN Slash Right !!!");
							somebody_win = true;
							last_win = array_game[j];
							alert(array_game[j] + " - WIN");
							$("#" + array_game[j]+ "_win").html($("#" + array_game[j]+ "_win").html()/1+1);
							return true;
						}

						if(win_slash_left && no_x_slash_left){
							console.log(array_game[j] + " - WIN Slash LEFT !!!");
							somebody_win = true;
							last_win = array_game[j];
							alert(array_game[j] + " - WIN");
							$("#" + array_game[j]+ "_win").html($("#" + array_game[j]+ "_win").html()/1+1);
							return true;
						}
						
						/* End Condition for win by vertical */

					}



				}
			}
		}


		/* check vertical */

		/* check slash from left */

		/* check slash from right */
		
	}

	/* function for check if n is integer ? */
	function isInt(n) {
	   return n % 1 === 0;
	}
		
//   if ($("#one").hasClass('o') && $("#two").hasClass('o') && $("#three").hasClass('o') || $("#four").hasClass('o') && $("#five").hasClass('o') && $("#six").hasClass('o') || $("#seven").hasClass('o') && $("#eight").hasClass('o') && $("#nine").hasClass('o') || $("#one").hasClass('o') && $("#four").hasClass('o') && $("#seven").hasClass('o') || $("#two").hasClass('o') && $("#five").hasClass('o') && $("#eight").hasClass('o') || $("#three").hasClass('o') && $("#six").hasClass('o') && $("#nine").hasClass('o') || $("#one").hasClass('o') && $("#five").hasClass('o') && $("#nine").hasClass('o') || $("#three").hasClass('o') && $("#five").hasClass('o') && $("#seven").hasClass('o'))
//    {
// 	 alert('O has won the game. Start a new game')
// 		$("#game li").text("+");
// 		$("#game li").removeClass('disable')
// 		$("#game li").removeClass('o')
// 		$("#game li").removeClass('x')
	// 		$("#game li").removeClass('btn-primary')
// 		$("#game li").removeClass('btn-info')
//    }
//   else if ($("#one").hasClass('x') && $("#two").hasClass('x') && $("#three").hasClass('x') || $("#four").hasClass('x') && $("#five").hasClass('x') && $("#six").hasClass('x') || $("#seven").hasClass('x') && $("#eight").hasClass('x') && $("#nine").hasClass('x') || $("#one").hasClass('x') && $("#four").hasClass('x') && $("#seven").hasClass('x') || $("#two").hasClass('x') && $("#five").hasClass('x') && $("#eight").hasClass('x') || $("#three").hasClass('x') && $("#six").hasClass('x') && $("#nine").hasClass('x') || $("#one").hasClass('x') && $("#five").hasClass('x') && $("#nine").hasClass('x') || $("#three").hasClass('x') && $("#five").hasClass('x') && $("#seven").hasClass('x'))
//   {
//    alert('X wins has won the game. Start a new game')
//    $("#game li").text("+");
// 	$("#game li").removeClass('disable')
// 	$("#game li").removeClass('o')
// 	$("#game li").removeClass('x')
// 	$("#game li").removeClass('btn-primary')
// 	$("#game li").removeClass('btn-info')	
//   }
//   else if (count == 9)
//   {
// 	alert('Its a tie. It will restart.')
// 	$("#game li").text("+");
// 	$("#game li").removeClass('disable')
// 	$("#game li").removeClass('o')
// 	$("#game li").removeClass('x')
// 	$("#game li").removeClass('btn-primary')
// 	$("#game li").removeClass('btn-info')
// 	count = 0
//   }
//   else if ($(this).hasClass('disable'))
//   {
//     alert('Already selected')
//   }
//   else if (count%2 == 0)
//   {
// 	  count++
// 	  $(this).text(o)
//       $(this).addClass('disable o btn-primary')
// 	    if ($("#one").hasClass('o') && $("#two").hasClass('o') && $("#three").hasClass('o') || $("#four").hasClass('o') && $("#five").hasClass('o') && $("#six").hasClass('o') || $("#seven").hasClass('o') && $("#eight").hasClass('o') && $("#nine").hasClass('o') || $("#one").hasClass('o') && $("#four").hasClass('o') && $("#seven").hasClass('o') || $("#two").hasClass('o') && $("#five").hasClass('o') && $("#eight").hasClass('o') || $("#three").hasClass('o') && $("#six").hasClass('o') && $("#nine").hasClass('o') || $("#one").hasClass('o') && $("#five").hasClass('o') && $("#nine").hasClass('o') || $("#three").hasClass('o') && $("#five").hasClass('o') && $("#seven").hasClass('o'))
// 	    {
// 	   alert('O wins')
// 	   count = 0
// 	   o_win++
// $('#o_win').text(o_win)
//         }
//   }
//    else  
//   {
// 	  count++
//     $(this).text(x)
//     $(this).addClass('disable x btn-info')
// 	   if ($("#one").hasClass('x') && $("#two").hasClass('x') && $("#three").hasClass('x') || $("#four").hasClass('x') && $("#five").hasClass('x') && $("#six").hasClass('x') || $("#seven").hasClass('x') && $("#eight").hasClass('x') && $("#nine").hasClass('x') || $("#one").hasClass('x') && $("#four").hasClass('x') && $("#seven").hasClass('x') || $("#two").hasClass('x') && $("#five").hasClass('x') && $("#eight").hasClass('x') || $("#three").hasClass('x') && $("#six").hasClass('x') && $("#nine").hasClass('x') || $("#one").hasClass('x') && $("#five").hasClass('x') && $("#nine").hasClass('x') || $("#three").hasClass('x') && $("#five").hasClass('x') && $("#seven").hasClass('x'))
//         {
// 	 alert('X wins')
// 	 count = 0
// 	 x_win++
// 	 $('#x_win').text(x_win)
//         }
//   }

//    });
	$("#reset").click(function () {
		somebody_win = false;
		last_win = "x";
		$("#game li").text("+");
		$("#game li").removeClass('disable')
		$("#game li").removeClass('o')
		$("#game li").removeClass('x')
		$("#game li").removeClass('btn-primary')
		$("#game li").removeClass('btn-info')
		count = 0

	});

	$(".btn-add").click(function(){
		$("#size").val($("#size").val()/1 + 1);
		if($("#size").data("current-size") != $("#size").val()){
			$(".btn-update").removeClass("disabled");
		} else {
			$(".btn-update").addClass("disabled");
		}
	})

	$(".btn-min").click(function(){
		$("#size").val($("#size").val()/1 - 1);
		if($("#size").data("current-size") != $("#size").val()){
			$(".btn-update").removeClass("disabled");
		} else {
			$(".btn-update").addClass("disabled");
		}
	})	

	$(".btn-update").click(function(){
		somebody_win = false;
		size = $("#size").val();
		$("#size").data("current-size", size);

		var html = "";
		for(i=1;i<=size;i++){
			html += "<ul>";
			for(j=1;j<=size;j++){
				html +="<li class='btn span1'>+</li>";
			}
			html += "</ul>";
		}
		$(".btn-update").addClass("disabled");

		$("#game").html(html);
	})
});
