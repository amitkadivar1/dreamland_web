
if('BroadcastChannel' in window) {
    var bc = new BroadcastChannel('location');
    var prevArea;
    
    bc.onmessage = function (ev) {
        if(ev.data.what !== 'location')
            return;

        var currentArea = ev.data.location.area;

        if (typeof prevArea === 'undefined') {
            prevArea = currentArea;
        }

        if (currentArea != prevArea) {
            window.location.href = '/maps/' + currentArea.replace(/\.are$/, '') + '.html?1';
        }

        $('.room').removeClass('active');
        $('.room-' + ev.data.location.vnum).addClass('active');

        var $active = $('.room.active'),
            $follow = $('#follow');

        if($active.length && $follow.length && $follow[0].checked) {
            var off = $active.offset(),
            $vp = $('html, body');

            $vp.scrollTop(off.top-$(window).height()/2);
            $vp.scrollLeft(off.left-$(window).width()/2);
        }
    };

    $(document).ready(function() {
        bc.postMessage({ what: 'where am i' });
    });
}
