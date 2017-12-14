$(document).ready(function() {

	$("body").css({"backgroundImage": "url(http://static1.squarespace.com/static/5330a423e4b07cae635bb95e/53331a82e4b0528862e35ca9/560c24e0e4b05e528fb467a6/1455666475418/?format=1000w)"});

	$("#splash").append("<img src='assets/img/fc0.logo_standard_silver.png' alt=''>");
	/*Aparece vista splash*/
	$("#splash").fadeIn('slow/400/fast').fadeOut(4000);

	$("#main").hide().fadeIn(7000).delay(10000);

	$(".sign-up").click(function(){
		$("#main").hide();
		$("#sign-up").append("<span class='glyphicon glyphicon-triangle-left' aria-hidden='true'></span>"+
		"<h1 class='text-center'>Sign Up</h1>"+"<p class='text-center'>Join now for the free ride credit</p>"+
		"<div class='row'>"+"<div class='col-lg-6'>"+"<div class='input-group'>"+"<div class='input-group-btn'>"+
		"<button type='button' class='btn btn-default dropdown-toggle' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>Band<span class='caret'</span></button>"+
		"<ul class='dropdown-menu'>"+"<li><a href='#'>Band1</a></li>"+"<li><a href='#'>Band2</a></li>"+
		"<li><a href='#'>Band3</a></li>"+"<li role='separator' class='divider'></li>"+"<li><a href='#'>Another</a></li>"+
		"</ul></div><!-- /btn-group --><input type='text' class='form-control' aria-label='...'></div><!-- /input-group -->"+
		"<button type='button' class='btn btn-default sign-up'>Next!</button>");
		$

	});


});