(function($){
    
    $(window).on('load', function(){

        console.log('sdf');

        gsap.registerPlugin(ScrollTrigger);
        var seasonImgs = gsap.timeline({
            scrollTrigger: {
                trigger: ".season_img",
                start: "-150",
                end : "+=540px",
                //pin: '.wrap',
                pin: true,
                scrub: 1,
                markers: true,
            }
        });
        
        seasonImgs.to(".season_img_cont", {y: -1080, ease: "none"})
    
    });
    
    
    
})(jQuery);

