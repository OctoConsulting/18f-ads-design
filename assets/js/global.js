var substringMatcher = function(strs) {
    return function findMatches(q, cb) {
        var matches, substrRegex;
        // an array that will be populated with substring matches
        matches = [];
        // regex used to determine if a string contains the substring `q`
        substrRegex = new RegExp(q, 'i');
        // iterate through the pool of strings and for any string that
        // contains the substring `q`, add it to the `matches` array
        $.each(strs, function(i, str) {
            if (substrRegex.test(str)) {
                matches.push(str);
            }
        });
        cb(matches);
    };
};
var medicine = ['Acetaminophen', 'Advil', 'Tylenol Regular Strength'];

$(function() {
    $(".item-listing > article").click(function() {
        var panelID = $(this).find(".item-link").attr("href");
        $(this).find(".item-detail").toggleClass("active");
        $(panelID).collapse("toggle");
        return false;
    });
    // Creates scroll animation to page sections
    $('a.jumps[href*=#]').click(function() {
        if (location.pathname.replace(/^\//, '') === this.pathname
            .replace(/^\//, '') && location.hostname === this.hostname
        ) {
            var target = $(this.hash);
            target = target.length ? target : $('[id=' + this.hash
                .slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
    // Creates typeahead in search
   $('#medSearch .typeahead').typeahead({
        hint: true,
        highlight: true,
        minLength: 1
    }, {
        name: 'medicine',
        source: substringMatcher(medicine)
    });
	
	$('#medSearch').submit(function(event) {
		var sel = $('#medSearch .tt-input').val();
		if (sel) {
			window.location.href = "details.html?q=" + sel;
		}
		event.preventDefault();
	});
	
	// Changes text when details are visible and hidden
	$('.toggle-details').on('hidden.bs.collapse', function (e) {
		$('a[href='+'#'+e.currentTarget.id+']').text('View Details');
	});
	$('.toggle-details').on('shown.bs.collapse', function (e) {
		$('a[href='+'#'+e.currentTarget.id+']').text('Hide Details');
	});
});