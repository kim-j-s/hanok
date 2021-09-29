(function($){
    $(function(){

        gsap.registerPlugin(ScrollTrigger);

        var mainNature = gsap.timeline({
            scrollTrigger: {
                trigger: ".main_nature",
                onLeave: (function() {
                    $('.main_culture > .intro').addClass('on');
                }),
                onEnterBack: (function() {
                    $('.main_culture > .intro').removeClass('on');
                })
            }
        });

        var mainCulture = gsap.timeline({
            scrollTrigger: {
                trigger: ".main_culture",
                //markers: true,
                onLeave: (function() {
                    $('.main_culture > .intro').removeClass('on');
                }),
                onEnterBack: (function() {
                    $('.main_culture > .intro').addClass('on');
                })
            }
        });

        var pinMIC = gsap.timeline({
            scrollTrigger: {
                trigger: ".main_culture_item",
                start: "top 10px",
                end: "+=1000",
                pin: true,
                scrub: true,
                toggleActions : "play reverse none none",
                //markers: true
            }
        });

        pinMIC.to(".items.ty1", {
            scrollTrigger: {
                trigger: ".mci",
                scrub: true,
            },
            x: -300,
            y: -300,
            //duration: 2,
        });        
        pinMIC.to(".items.ty2", {
            scrollTrigger: {
                trigger: ".mci",
                scrub: true,
            },
            x: 300,
            y: -300,
            duration: 2,
        });
        pinMIC.to(".items.ty3", {
            scrollTrigger: {
                trigger: ".mci",
                scrub: true,
            },
            x: 300, 
            y: 300, 
        });
        pinMIC.to(".items.ty4", {
            scrollTrigger: {
                trigger: ".mci",
                scrub: true,
            },
            x: -300, 
            y: 300, 
        });

        pinMIC.to(".mci_img01", {
            scrollTrigger: {
                trigger: ".mci",
                scrub: true,
            },
            y: -300,
        });
        pinMIC.to(".mci_img02", {
            scrollTrigger: {
                trigger: ".mci",
                scrub: true,
            },
            x: 300,
        });
        pinMIC.to(".mci_img03", {
            scrollTrigger: {
                trigger: ".mci",
                scrub: true,
            },
            y: 300,
        });
        pinMIC.to(".mci_img04", {
            scrollTrigger: {
                trigger: ".mci",
                scrub: true,
            },
            x: -300,
        });
        

        // scrollTrigger는 gsap timeline({ 이곳에 적용 })
        /*
        var box2tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".sec2 .box1", // 트리거 기준 요소 선택
                start : "top 50%",
                pin: true,// 트리거 시작 지점
                scrub: true,
                end : "+=450 20%", // // scroll trigger와 동일함
                markers: {startColor: "red", endColor: "blue", fontSize: "20px"},
                toggleActions : "play reverse none reverse"  // default : play none none none
                // toggleActions : (onEnter, onLeave, onEnterBack, onLeaveBack) 값은 
                // (play pause resume reset restart complete reverse none) 사용 가능  
                // toggleActions : (트리거 시작할 때, 트리거 떠날 때, end방향으로 다시 진입할 때, start로 다시 진입할 때, start로 다시 나갈 때) 
            }
        });
        */
    });
})(jQuery);