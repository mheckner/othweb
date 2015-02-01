$(function() {
    var pullDownMenuButton = $('#pullDownMenu');
    var menu = $('nav ul');

    $(pullDownMenuButton).on('click', function(clickEvent) {
        clickEvent.preventDefault();
        menu.slideToggle();
    });
});

