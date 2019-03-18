$(function () {
    let $mobile = $('.mobile')
    let $mobilePop = $('#J_mobile_pop');
    let $jEventClose = $('#J_event_close')
    let $jEvent = $('#J_event')

    $("#J_mobile").on('mouseover', function () {
        $mobile.addClass('mobile_on')
    }).on('mouseleave', function () {
        $mobile.removeClass('mobile_on')
    });

    $jEventClose.click(function () {
        $jEvent.addClass('hide')
    });
});
