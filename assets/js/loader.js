$("html,body").animate({
    scrollTop: 0
}, "fast");
$("html,body").scrollTop(0);
$(window).on('load', async () => {
    $("html,body").scrollTop(0);
    await (new Promise((resolve, reject) => setTimeout(resolve, 1500)))
    $("html,body").scrollTop(0);
    $('.loader').remove()
    $('.overflow').remove()
    $('.circle-line').remove()
    $('.circle-red').remove()
    $('.circle-blue').remove()
    $('.circle-green').remove()
    $('.circle-yellow').remove()
    document.querySelector('body').style.overflow = 'visible';
    $("html,body").scrollTop(0);
    $('.my').addClass('animate__animated')
    $('.my').addClass('animate__bounceInLeft')
    $('.color-text-flow').addClass('animate__animated')
    $('.color-text-flow').addClass('animate__backInRight')
    $('.desc').addClass('animate__animated')
    $('.desc').addClass('animate__bounceInUp')
    document.querySelectorAll('.yamete').forEach(i => {
        $(i).addClass('animate__animated')
        $(i).addClass('animate__bounceInUp')
    })
    setTimeout(() => {
        $('.my').removeClass('animate__animated')
        $('.my').removeClass('animate__bounceInLeft')
        $('.color-text-flow').removeClass('animate__animated')
        $('.color-text-flow').removeClass('animate__backInRight')
        $('.desc').removeClass('animate__animated')
        $('.desc').removeClass('animate__bounceInUp')
        document.querySelectorAll('.yamete').forEach(i => {
            $(i).removeClass('animate__animated')
            $(i).removeClass('animate__bounceInUp')
        })
    }, 500)
})