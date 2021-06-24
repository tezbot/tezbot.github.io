$(window).on('load', () => {
    document.querySelectorAll('.flex-grid > .col-xs-3').forEach(item => {
        $(item).on('click', function() {
            let i = $(this);
            Swal.fire({
                title: i.attr('title'),
                text: i.attr('description'),
                icon: 'info',
                footer: `<a href="${i.attr('link')}">Link</a>`
            })
        });
    })
})
window.oncontextmenu = function() {
    return false;
}
$(document).keydown(function(event) {
    if (event.keyCode == 123) {
        return false;
    } else if (event.ctrlKey || event.shiftKey) {
        return false;
    }
});