console.log('it works');

$(document).ready(function() {

$('.article-container').equalHeights();

$("#hidden-nav").hide();
$("#current-section").hide();
$("#interview-section").hide();
$("#features-section").hide();
$("#projects-section").hide();
$("#talks-section").hide();
$("#films-section").hide();


$("#home-link").click(function(){
	event.preventDefault();
	$("#starting-content").slideDown();
	$("#hidden-nav").slideUp();
	$("#current-section").slideUp();
	$("#interview-section").slideUp();
	$("#features-section").slideUp();
	$("#projects-section").slideUp();
	$("#talks-section").slideUp();
	$("#films-section").slideUp();
})

$("#current-link").click(function(){
	event.preventDefault();
	$("#hidden-nav").slideDown();
	$("#starting-content").slideUp();
	$("#current-section").slideDown();
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
	$("#hidden-nav").slideDown();
	$("#starting-content").slideUp();
	$("#current-section").hide();
	$("#interview-section").slideDown();
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
	$("#hidden-nav").slideDown();
	$("#starting-content").slideUp();
	$("#current-section").hide();
	$("#interview-section").hide();
	$("#features-section").slideDown();
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
	$("#hidden-nav").slideDown();
	$("#starting-content").slideUp();
	$("#current-section").hide();
	$("#interview-section").hide();
	$("#features-section").hide();
	$("#projects-section").slideDown();
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
	$("#hidden-nav").slideDown();
	$("#starting-content").slideUp();
	$("#current-section").hide();
	$("#interview-section").hide();
	$("#features-section").hide();
	$("#projects-section").hide();
	$("#talks-section").slideDown();
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
	$("#hidden-nav").slideDown();
	$("#starting-content").slideUp();
	$("#current-section").hide();
	$("#interview-section").hide();
	$("#features-section").hide();
	$("#projects-section").hide();
	$("#talks-section").hide();
	$("#films-section").slideDown();
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
	$("#starting-content").slideDown();
	$("#hidden-nav").slideUp();
	$("#current-section").slideUp();
	$("#interview-section").slideUp();
	$("#features-section").slideUp();
	$("#projects-section").slideUp();
	$("#talks-section").slideUp();
	$("#films-section").slideUp();
	$("#current-link-1").removeClass("active-link");
}	else {
	$("#hidden-nav").show();
	$("#starting-content").slideUp();
	$("#current-section").slideDown();
	$("#interview-section").slideUp();
	$("#features-section").slideUp();
	$("#projects-section").slideUp();
	$("#talks-section").slideUp();
	$("#films-section").slideUp();
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
	$("#starting-content").slideDown();
	$("#hidden-nav").slideUp();
	$("#current-section").slideUp();
	$("#interview-section").slideUp();
	$("#features-section").slideUp();
	$("#projects-section").slideUp();
	$("#talks-section").slideUp();
	$("#films-section").slideUp();
	$("#interviews-link-1").removeClass("active-link");
}	else {
	$("#hidden-nav").show();
	$("#starting-content").slideUp();
	$("#current-section").slideUp();
	$("#interview-section").slideDown();
	$("#features-section").slideUp();
	$("#projects-section").slideUp();
	$("#talks-section").slideUp();
	$("#films-section").slideUp();
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
	$("#starting-content").slideDown();
	$("#hidden-nav").slideUp();
	$("#current-section").slideUp();
	$("#interview-section").slideUp();
	$("#features-section").slideUp();
	$("#projects-section").slideUp();
	$("#talks-section").slideUp();
	$("#films-section").slideUp();
	$("#features-link-1").removeClass("active-link");
}	else {
	$("#hidden-nav").show();
	$("#starting-content").slideUp();
	$("#current-section").slideUp();
	$("#interview-section").slideUp();
	$("#features-section").slideDown();
	$("#projects-section").slideUp();
	$("#talks-section").slideUp();
	$("#films-section").slideUp();
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
	$("#starting-content").slideDown();
	$("#hidden-nav").slideUp();
	$("#current-section").slideUp();
	$("#interview-section").slideUp();
	$("#features-section").slideUp();
	$("#projects-section").slideUp();
	$("#talks-section").slideUp();
	$("#films-section").slideUp();
	$("#projects-link-1").removeClass("active-link");
}	else {
	$("#hidden-nav").show();
	$("#starting-content").slideUp();
	$("#current-section").slideUp();
	$("#interview-section").slideUp();
	$("#features-section").slideUp();
	$("#projects-section").slideDown();
	$("#talks-section").slideUp();
	$("#films-section").slideUp();
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
	$("#starting-content").slideDown();
	$("#hidden-nav").slideUp();
	$("#current-section").slideUp();
	$("#interview-section").slideUp();
	$("#features-section").slideUp();
	$("#projects-section").slideUp();
	$("#talks-section").slideUp();
	$("#films-section").slideUp();
	$("#talks-link-1").removeClass("active-link");
}	else {
	$("#hidden-nav").show();
	$("#starting-content").slideUp();
	$("#current-section").slideUp();
	$("#interview-section").slideUp();
	$("#features-section").slideUp();
	$("#projects-section").slideUp();
	$("#talks-section").slideDown();
	$("#films-section").slideUp();
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
	$("#starting-content").slideDown();
	$("#hidden-nav").slideUp();
	$("#current-section").slideUp();
	$("#interview-section").slideUp();
	$("#features-section").slideUp();
	$("#projects-section").slideUp();
	$("#talks-section").slideUp();
	$("#films-section").slideUp();
	$("#films-link-1").removeClass("active-link");
}	else {
	$("#hidden-nav").show();
	$("#starting-content").slideUp();
	$("#current-section").slideUp();
	$("#interview-section").slideUp();
	$("#features-section").slideUp();
	$("#projects-section").slideUp();
	$("#talks-section").slideUp();
	$("#films-section").slideDown();
	$("#interviews-link-1").removeClass("active-link");
	$("#projects-link-1").removeClass("active-link");
	$("#talks-link-1").removeClass("active-link");
	$("#current-link-1").removeClass("active-link");
	$("#features-link-1").removeClass("active-link");
	$("#films-link-1").addClass("active-link");
}
});

});

		
