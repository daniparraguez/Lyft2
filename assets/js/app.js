$(document).ready(function() {

	$("body").css({"backgroundImage": "url(http://static1.squarespace.com/static/5330a423e4b07cae635bb95e/53331a82e4b0528862e35ca9/560c24e0e4b05e528fb467a6/1455666475418/?format=1000w)"});

	$("#splash").append("<img src='assets/img/fc0.logo_standard_silver.png' alt=''>");
	/*Aparece vista splash*/
	$("#splash").fadeIn('slow/400/fast').fadeOut(4000);

	$("#main").hide().fadeIn(7000).delay(10000);

	$(".sign-up").click(function(){
		$("#main").hide();
		$("#sign-in").append("")


	});


});