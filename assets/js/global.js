
$(function() {
$(".item-listing > article").click(function(){
		var panelID = $(this).find(".item-link").attr("href");
		$(this).find(".item-detail").toggleClass("active");
		$(panelID).collapse("toggle");
		return false;
	});
});