{
    $(".nav-link").click ( function () {
        let tabBtn = $(this).attr('aria-controls');

        $(".tab-pane").each( function () {
            let id = $(this).attr("id");

            if( id == tabBtn) {
                $(this).removeClass('d-none');
            } else {
                $(this).addClass("d-none");
            }   
        });

    });

    $("#semVersao").addClass("text-danger");
}