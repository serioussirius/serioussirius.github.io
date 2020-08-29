$(document).ready(function() {
    let filter = $("[data-filter]");

    filter.on('click', function(event) {
        event.preventDefault();

        let category = $(this).data('filter');

        if(category == 'all') {
            $("[data-category]").removeClass("hiddenOne");
        } else {
            $("[data-category]").each(function () {


                let projectCategory = $(this).data('category');

                if (projectCategory != category) {
                    $(this).addClass('hiddenOne');

                } else {
                    $(this).removeClass('hiddenOne');

                }
            });
        }
    });

    $(".filterLink").click(function () {
        $(".filterLink").removeClass("chosenOne");
        $(this).addClass("chosenOne");
    })
    
});
