
$(function() {
$(".item-listing > article").click(function(){
		var panelID = $(this).find("header").find("a").attr("href");
		$(this).find("header").toggleClass("active");
		$(panelID).collapse("toggle");
		return false;
	});
});