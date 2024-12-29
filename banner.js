    (function () {
        var looping = 2;

        var banner = document.getElementById('banner'),
            text1 = document.querySelectorAll('.text1 span'),
            text1p = document.querySelector('.text1 p'),
            text2 = document.querySelectorAll('.text2 span'),
            text2p = document.querySelector('.text2 p');

        var tween1 = new TimelineLite({paused: true, onComplete: onAnimationComplete});

        tween1
            .to(text1p, 0.2, {opacity: 1, ease: Sine.easeOut}, '+=0.5')
            .to(text1[0], 0.3, {opacity: 1, transform: 'scale(1)', ease: Back.easeOut}, '+=0.25')
            .to(text1[1], 0.3, {opacity: 1, transform: 'scale(1)', ease: Back.easeOut})
            .to(text1[2], 0.3, {opacity: 1, transform: 'scale(1)', ease: Back.easeOut})


            .to(text2[0], 0.2, {opacity: 1}, '+=0.5')
            .to([text2[1]], 0.2, {opacity: 1}, '+=0.5')
            .to(text2p, 0.2, {opacity: 1, ease: Sine.easeOut}, '+=0.5')
            
            .to(text2p, 0.2, {opacity: 0, ease: Sine.easeOut}, '+=1')
            // .to([text2[0], text2[1], text2p], 0.2, {opacity: 1, ease: Sine.easeOut}, '+=1');
            .to(text2p, 0.2, {opacity: 1, ease: Sine.easeOut}, '+=1');

        tween1.timeScale(0.4);


        TweenLite.to(banner, 0.5, {
            opacity: 1,
            onComplete: function () {
                tween1.play();
            }
        });

        function onAnimationComplete() {
            if (looping > 0) {
                looping -= 1;
            }

            if (looping !== 0) {
                setTimeout(function () {
                    tween1.pause().progress(0);
                }, 2000);

                setTimeout(function () {
                    tween1.restart();
                }, 4000);
            }
        }

    })();