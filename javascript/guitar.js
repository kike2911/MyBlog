var TimelineMax = document.getElementById('time');
var lespaultl = new TimelineMax({});
lespaultl

.from("#Body", 2, {autoAlpha:0, y: 500, ease: Back.easeOut.config(0.5)}, "Join")
.from("#Neck", 2, {autoAlpha:0, y:-100, ease: Back.easeOut.config(1.2)}, "Join")
.from("#Pickguard", 1, {autoAlpha:0, x:15}, "Slide")
.from("#Screws", 1, {autoAlpha:0}, "Slide")
.from("#P90", 1.2, {scale: 0, transformOrigin: "47% 75%", autoAlpha:0, ease: Back.easeOut.config(1.7)})
.from("StrapLock1", 0.2, {y:15, autoAlpha:0}, "Jump")
.from("StrapLock2", 0.2, {y:-15, autoAlpha:0}, "Jump")
.from("#Bridge", 0.5, {y:-20, autoAlpha:0})
.from("#VolumePots", 1.2,{scale:0.2, transformOrigin: "60% 85%", autoAlpha:0, ease: Back.easeOut.config(1.7)})
.from("#Adeline", 0.8, {scale:0, transformOrigin: "58% 66%", ease: Back.easeOut.config(1.7)})
.from("#Frets", 2.2, {autoAlpha: 0, scaleY:0.5, ease: Back.easeOut.config(1.7)}, "Drop")
.from("#FretInlays", 2.2, {autoAlpha:0, scale: 0, transformOrigin: "50% 90%", ease: Back.easeOut.config(1.7)}, "Drop")
.from("#TrussCover", 0.5, {autoAlpha: 0, y: -10})
.from("#RightTune", 0.7, {autoAlpha:0, x: -14}, "TuneTime")
.from("#LeftTune", 0.7, {autoAlpha:0, x: 15}, "TuneTime")
.from("#StringPegs", 2, { autoAlpha: 0, scale:0.6, transformOrigin: "47% 10%", ease: Back.easeOut})
.from("#Signed", 1.5, { autoAlpha: 0, y:20}, "Finishing Touch")
.from("#Strings", 2, {scaleY:0, autoalpha:0}, "Finishing Touch")

lespaultl.timeScale(3);


    var volume = document.getElementById('Volume');

    volume.addEventListener('click', function (event) {
       console.log('Volume Clicked');
       var playguitartl = new TimelineMax({});

  playguitartl

.from("#Volume", 0.5, {rotation: 360, transformOrigin: "60% 85%"})



    });

    var tone = document.getElementById('Tone');

    tone.addEventListener('click', function (event) {
       console.log('Tone Clicked');
       var tonetl = new TimelineMax({});

  tonetl

.from("#Tone", 0.5, {rotation: 360, transformOrigin: "60% 90.7%"})



    });
