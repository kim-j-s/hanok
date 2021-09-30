(function($){

    // 영월 그곳
    function textWave() {
        var $waveText = $('.text-wave');
        var animationDelay = 10;
        var count = 0;
        $waveText.each(function(e){            
            var newDom = '';
            for(let i = 0; i < $(this).text().length; i++)
            {
                newDom += '<span class="char-wave">' + ($(this).text()[i] == ' ' ? '&nbsp;' : $(this).text()[i])+ '</span>';
            }
            $(this).html(newDom);
            $length = $(this).children('span').length;
            for(let i = 0; i < $length; i++)
            {
                $(this).children('span').eq(i).css('animationDelay',(animationDelay * i) + count + 'ms');
            }
            count = count + 100;
        });
    }

    // page top
    function pageTop() {
        $('.page_top').on('click', function(){
            $('html, body').animate({
                scrollTop: 0
            }, 500);
        });        
    }

    $(function(){
        // ready
        pageTop();
    });

    $(window).on('scroll', function(){
        const wTop = $('html, body').scrollTop();
        const wHeight = $(window).outerHeight();

        let of = $('.main_yw').offset().top;
        if (wTop > of - (wHeight * 0.7) && !$('.main_yw').hasClass('passed')) {
            $('.yw-there').addClass('on');
            $('.main_yw').addClass('passed');
            textWave();
        }

        const $offsetEvent = $('.offset_event');
        const $offsetEventPoint = $offsetEvent.length;
        for (var i = 0; i < $offsetEventPoint; i++)
        {
            const point = $('.offset_event').eq(i).offset().top;
            if ( wTop > point - (wHeight * 0.8)) {
                $('.offset_event').eq(i).addClass('on');
            }
        }

        if (wTop > 70) {
            $('header').addClass('on');
        } else {
            $('header').removeClass('on');
        }



    });
})(jQuery);

