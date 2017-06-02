console.log('it works');

$(document).ready(function() {

$(".article-container").equalHeights();

$("#article-text").slideDown(1200);

$("#starting-content").slideDown(1200);

$("#hidden-nav").hide();
$("#current-section").hide();
$("#interview-section").hide();
$("#features-section").hide();
$("#projects-section").hide();
$("#talks-section").hide();
$("#films-section").hide();

  // $('a').on('click', function(event) {
  //   event.preventDefault();
  //   var $this = $(this);
  //   var container = $this.attr('href');
  //   $('article').hide()
  //   $(container).slideDown()
  // });

$("#home-link").click(function(){
	event.preventDefault();
	$("#starting-content").slideDown(1200);
	$("#hidden-nav").slideUp(1200);
	$("#current-section").hide();
	$("#interview-section").hide();
	$("#features-section").hide();
	$("#projects-section").hide();
	$("#talks-section").hide();
	$("#films-section").hide();
})

$("#current-link").click(function(){
	event.preventDefault();
	$("#hidden-nav").slideDown(1200);
	$("#starting-content").hide();
	$("#current-section").slideDown(1200);
	$("#interview-section").hide();
	$("#features-section").hide();
	$("#projects-section").hide();
	$("#talks-section").hide();
	$("#films-section").hide();
	$("#interviews-link-1").removeClass("active-link");
	$("#features-link-1").removeClass("active-link");
	$("#projects-link-1").removeClass("active-link");
	$("#talks-link-1").removeClass("active-link");
	$("#films-link-1").removeClass("active-link");
	$("#current-link-1").addClass("active-link");
});

$("#interviews-link").click(function(){
	event.preventDefault();
	$("#hidden-nav").slideDown(1200);
	$("#starting-content").slideUp();
	$("#current-section").hide();
	$("#interview-section").slideDown(1200);
	$("#features-section").hide();
	$("#projects-section").hide();
	$("#talks-section").hide();
	$("#films-section").hide();
	$("#features-link-1").removeClass("active-link");
	$("#projects-link-1").removeClass("active-link");
	$("#talks-link-1").removeClass("active-link");
	$("#films-link-1").removeClass("active-link");
	$("#current-link-1").removeClass("active-link");
	$("#interviews-link-1").addClass("active-link");
});

$("#features-link").click(function(){
	event.preventDefault();
	$("#hidden-nav").slideDown(1200);
	$("#starting-content").slideUp();
	$("#current-section").hide();
	$("#interview-section").hide();
	$("#features-section").slideDown(1200);
	$("#projects-section").hide();
	$("#talks-section").hide();
	$("#films-section").hide();
	$("#interviews-link-1").removeClass("active-link");
	$("#projects-link-1").removeClass("active-link");
	$("#talks-link-1").removeClass("active-link");
	$("#films-link-1").removeClass("active-link");
	$("#current-link-1").removeClass("active-link");
	$("#features-link-1").addClass("active-link");
});

$("#projects-link").click(function(){
	event.preventDefault();
	$("#hidden-nav").slideDown(1200);
	$("#starting-content").hide();
	$("#current-section").hide();
	$("#interview-section").hide();
	$("#features-section").hide();
	$("#projects-section").slideDown(1200);
	$("#talks-section").hide();
	$("#films-section").hide();
	$("#interviews-link-1").removeClass("active-link");
	$("#features-link-1").removeClass("active-link");
	$("#talks-link-1").removeClass("active-link");
	$("#films-link-1").removeClass("active-link");
	$("#current-link-1").removeClass("active-link");
	$("#projects-link-1").addClass("active-link");
});

$("#talks-link").click(function(){
	event.preventDefault();
	$("#hidden-nav").slideDown(1200);
	$("#starting-content").hide();
	$("#current-section").hide();
	$("#interview-section").hide();
	$("#features-section").hide();
	$("#projects-section").hide();
	$("#talks-section").slideDown(1200);
	$("#films-section").hide();
	$("#interviews-link-1").removeClass("active-link");
	$("#features-link-1").removeClass("active-link");
	$("#projects-link-1").removeClass("active-link");
	$("#films-link-1").removeClass("active-link");
	$("#current-link-1").removeClass("active-link");
	$("#talks-link-1").addClass("active-link");
});

$("#films-link").click(function(){
	event.preventDefault();
	$("#hidden-nav").slideDown(1200);
	$("#starting-content").hide();
	$("#current-section").hide();
	$("#interview-section").hide();
	$("#features-section").hide();
	$("#projects-section").hide();
	$("#talks-section").hide();
	$("#films-section").slideDown(1200);
	$("#interviews-link-1").removeClass("active-link");
	$("#features-link-1").removeClass("active-link");
	$("#projects-link-1").removeClass("active-link");
	$("#talks-link-1").removeClass("active-link");
	$("#current-link-1").removeClass("active-link");
	$("#films-link-1").addClass("active-link");
});

$("#current-link-1").click(function(){
	event.preventDefault();
if ($("#current-link-1").hasClass("active-link")) {
	$("#starting-content").slideDown(1200);
	$("#hidden-nav").hide();
	$("#current-section").hide();
	$("#interview-section").hide();
	$("#features-section").hide();
	$("#projects-section").hide();
	$("#talks-section").hide();
	$("#films-section").hide();
	$("#current-link-1").removeClass("active-link");
}	else {
	$("#hidden-nav").show();	
	$("#starting-content").hide();
	$("#current-section").slideDown(1200);
	$("#interview-section").hide();
	$("#features-section").hide();
	$("#projects-section").hide();
	$("#talks-section").hide();
	$("#films-section").hide();
	$("#interviews-link-1").removeClass("active-link");
	$("#features-link-1").removeClass("active-link");
	$("#projects-link-1").removeClass("active-link");
	$("#talks-link-1").removeClass("active-link");
	$("#films-link-1").removeClass("active-link");
	$("#current-link-1").addClass("active-link");
}
});

$("#interviews-link-1").click(function(){
	event.preventDefault();
	if ($("#interviews-link-1").hasClass("active-link")) {
	$("#starting-content").slideDown(1200);
	$("#hidden-nav").hide();
	$("#current-section").hide();
	$("#interview-section").hide();
	$("#features-section").hide();
	$("#projects-section").hide();
	$("#talks-section").hide();
	$("#films-section").hide();
	$("#interviews-link-1").removeClass("active-link");
}	else {
	$("#hidden-nav").show();
	$("#starting-content").hide();
	$("#current-section").hide();
	$("#interview-section").slideDown(1200);
	$("#features-section").hide();
	$("#projects-section").hide();
	$("#talks-section").hide();
	$("#films-section").hide();
	$("#current-link-1").removeClass("active-link");
	$("#features-link-1").removeClass("active-link");
	$("#projects-link-1").removeClass("active-link");
	$("#talks-link-1").removeClass("active-link");
	$("#films-link-1").removeClass("active-link");
	$("#current-link-1").removeClass("active-link");
	$("#interviews-link-1").addClass("active-link");
}
});

$("#features-link-1").click(function(){
	event.preventDefault();
	if ($("#features-link-1").hasClass("active-link")) {
	$("#starting-content").slideDown(1200);
	$("#hidden-nav").hide();
	$("#current-section").hide();
	$("#interview-section").hide();
	$("#features-section").hide();
	$("#projects-section").hide();
	$("#talks-section").hide();
	$("#films-section").hide();
	$("#features-link-1").removeClass("active-link");
}	else {
	$("#hidden-nav").show();
	$("#starting-content").hide();
	$("#current-section").hide();
	$("#interview-section").hide();
	$("#features-section").slideDown(1200);
	$("#projects-section").hide();
	$("#talks-section").hide();
	$("#films-section").hide();
	$("#hidden-nav").removeClass("active-link");
	$("#interviews-link-1").removeClass("active-link");
	$("#projects-link-1").removeClass("active-link");
	$("#talks-link-1").removeClass("active-link");
	$("#films-link-1").removeClass("active-link");
	$("#current-link-1").removeClass("active-link");
	$("#features-link-1").addClass("active-link");
}
});


$("#projects-link-1").click(function(){
	event.preventDefault();
	if ($("#projects-link-1").hasClass("active-link")) {
	$("#starting-content").slideDown(1200);
	$("#hidden-nav").hide();
	$("#current-section").hide();
	$("#interview-section").hide();
	$("#features-section").hide();
	$("#projects-section").hide();
	$("#talks-section").hide();
	$("#films-section").hide();
	$("#projects-link-1").removeClass("active-link");
}	else {
	$("#hidden-nav").show();
	$("#starting-content").hide();
	$("#current-section").hide();
	$("#interview-section").hide();
	$("#features-section").hide();
	$("#projects-section").slideDown(1200);
	$("#talks-section").hide();
	$("#films-section").hide();
	$("#hidden-nav").removeClass("active-link");
	$("#interviews-link-1").removeClass("active-link");
	$("#talks-link-1").removeClass("active-link");
	$("#films-link-1").removeClass("active-link");
	$("#current-link-1").removeClass("active-link");
	$("#features-link-1").removeClass("active-link");
	$("#projects-link-1").addClass("active-link");
}
});

$("#talks-link-1").click(function(){
	event.preventDefault();
	if ($("#talks-link-1").hasClass("active-link")) {
	$("#starting-content").slideDown(1200);
	$("#hidden-nav").hide();
	$("#current-section").hide();
	$("#interview-section").hide();
	$("#features-section").hide();
	$("#projects-section").hide();
	$("#talks-section").hide();
	$("#films-section").hide();
	$("#talks-link-1").removeClass("active-link");
}	else {
	$("#hidden-nav").show();
	$("#starting-content").hide();
	$("#current-section").hide();
	$("#interview-section").hide();
	$("#features-section").hide();
	$("#projects-section").hide();
	$("#talks-section").slideDown(1200);
	$("#films-section").hide();
	$("#interviews-link-1").removeClass("active-link");
	$("#projects-link-1").removeClass("active-link");
	$("#films-link-1").removeClass("active-link");
	$("#current-link-1").removeClass("active-link");
	$("#features-link-1").removeClass("active-link");
	$("#talks-link-1").addClass("active-link");
}
});

$("#films-link-1").click(function(){
	event.preventDefault();
	if ($("#films-link-1").hasClass("active-link")) {
	$("#starting-content").slideDown(1200);
	$("#hidden-nav").hide();
	$("#current-section").hide();
	$("#interview-section").hide();
	$("#features-section").hide();
	$("#projects-section").hide();
	$("#talks-section").hide();
	$("#films-section").hide();
	$("#films-link-1").removeClass("active-link");
}	else {
	$("#hidden-nav").show();
	$("#starting-content").hide();
	$("#current-section").hide();
	$("#interview-section").hide();
	$("#features-section").hide();
	$("#projects-section").hide();
	$("#talks-section").hide();
	$("#films-section").slideDown(1200);
	$("#interviews-link-1").removeClass("active-link");
	$("#projects-link-1").removeClass("active-link");
	$("#talks-link-1").removeClass("active-link");
	$("#current-link-1").removeClass("active-link");
	$("#features-link-1").removeClass("active-link");
	$("#films-link-1").addClass("active-link");
}
});

});

		
