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

    $(function(){
        console.log('xx');
        textWave();
    });
})(jQuery);
