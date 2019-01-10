$(function() {
    var nav = $(".flex-nav");
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
    
        if (scroll >= 5) {
            nav.removeClass('flex-nav').addClass("flex-nav-alt");
        } else {
            nav.removeClass("flex-nav-alt").addClass('flex-nav');
        }
    });
});

$(document).ready(function(){
	$('.about-me__content__nav-bar__heading-tertiary').bind('click', function() {
		$('.eyelash').hide();
		$('#' + $(this).attr('id') + '-content').show();
		$('.about-me__content__nav-bar__heading-tertiary').removeClass('about-me__content__nav-bar__heading-tertiary-selected');
		$(this).addClass('about-me__content__nav-bar__heading-tertiary-selected');
	});
	
});

// function changetop(){
//   document.getElementById("responsive-nav").style.top = "-100%"
// }

// function changetop1(){
//   document.getElementById("responsive-nav").style.top = "0"
//   document.getElementById("toogle").checked = false;
// }

function uncheck() {
  document.getElementById("toggle").checked = false;
}

    
$(document).ready(function(){
	$('.skills__nav-bar__item').bind('click', function() {
		$('.skills-eyelash').hide();
		$('#' + $(this).attr('id') + '-skills-content').show();
		$('.skills__nav-bar__item').removeClass('skills__nav-bar__item-selected');
		$(this).addClass('skills__nav-bar__item-selected');
	});
	
});

$(document).ready(function(){
	$('.experience__nav-bar__item').bind('click', function() {
		$('.experience-eyelash').hide();
		$('#' + $(this).attr('id') + '-experience-content').show();
		$('.experience__nav-bar__item').removeClass('experience__nav-bar__item-selected');
		$(this).addClass('experience__nav-bar__item-selected');
	});
	
});


var audioPlayer = document.querySelector('.green-audio-player');
var playPause = audioPlayer.querySelector('#playPause');
var playpauseBtn = audioPlayer.querySelector('.play-pause-btn');
var loading = audioPlayer.querySelector('.loading');
var progress = audioPlayer.querySelector('.progress');
var sliders = audioPlayer.querySelectorAll('.slider');
var volumeBtn = audioPlayer.querySelector('.volume-btn');
var volumeControls = audioPlayer.querySelector('.volume-controls');
var volumeProgress = volumeControls.querySelector('.slider .progress');
var player = audioPlayer.querySelector('audio');
var currentTime = audioPlayer.querySelector('.current-time');
var totalTime = audioPlayer.querySelector('.total-time');
var speaker = audioPlayer.querySelector('#speaker');

var draggableClasses = ['pin'];
var currentlyDragged = null;

window.addEventListener('mousedown', function (event) {

  if (!isDraggable(event.target)) return false;

  currentlyDragged = event.target;
  var handleMethod = currentlyDragged.dataset.method;

  this.addEventListener('mousemove', window[handleMethod], false);

  window.addEventListener('mouseup', function () {
    currentlyDragged = false;
    window.removeEventListener('mousemove', window[handleMethod], false);
  }, false);
});

playpauseBtn.addEventListener('click', togglePlay);
player.addEventListener('timeupdate', updateProgress);
player.addEventListener('volumechange', updateVolume);
player.addEventListener('loadedmetadata', function () {
  totalTime.textContent = formatTime(player.duration);
});
player.addEventListener('canplay', makePlay);
player.addEventListener('ended', function () {
  playPause.attributes.d.value = "M18 12L0 24V0";
  player.currentTime = 0;
});

volumeBtn.addEventListener('click', function () {
  volumeBtn.classList.toggle('open');
  volumeControls.classList.toggle('hidden');
});

window.addEventListener('resize', directionAware);

sliders.forEach(function (slider) {
  var pin = slider.querySelector('.pin');
  slider.addEventListener('click', window[pin.dataset.method]);
});

directionAware();

function isDraggable(el) {
  var canDrag = false;
  var classes = Array.from(el.classList);
  draggableClasses.forEach(function (draggable) {
    if (classes.indexOf(draggable) !== -1)
    canDrag = true;
  });
  return canDrag;
}

function inRange(event) {
  var rangeBox = getRangeBox(event);
  var rect = rangeBox.getBoundingClientRect();
  var direction = rangeBox.dataset.direction;
  if (direction == 'horizontal') {
    var min = rangeBox.offsetLeft;
    var max = min + rangeBox.offsetWidth;
    if (event.clientX < min || event.clientX > max) return false;
  } else {
    var min = rect.top;
    var max = min + rangeBox.offsetHeight;
    if (event.clientY < min || event.clientY > max) return false;
  }
  return true;
}

function updateProgress() {
  var current = player.currentTime;
  var percent = current / player.duration * 100;
  progress.style.width = percent + '%';

  currentTime.textContent = formatTime(current);
}

function updateVolume() {
  volumeProgress.style.height = player.volume * 100 + '%';
  if (player.volume >= 0.5) {
    speaker.attributes.d.value = 'M14.667 0v2.747c3.853 1.146 6.666 4.72 6.666 8.946 0 4.227-2.813 7.787-6.666 8.934v2.76C20 22.173 24 17.4 24 11.693 24 5.987 20 1.213 14.667 0zM18 11.693c0-2.36-1.333-4.386-3.333-5.373v10.707c2-.947 3.333-2.987 3.333-5.334zm-18-4v8h5.333L12 22.36V1.027L5.333 7.693H0z';
  } else if (player.volume < 0.5 && player.volume > 0.05) {
    speaker.attributes.d.value = 'M0 7.667v8h5.333L12 22.333V1L5.333 7.667M17.333 11.373C17.333 9.013 16 6.987 14 6v10.707c2-.947 3.333-2.987 3.333-5.334z';
  } else if (player.volume <= 0.05) {
    speaker.attributes.d.value = 'M0 7.667v8h5.333L12 22.333V1L5.333 7.667';
  }
}

function getRangeBox(event) {
  var rangeBox = event.target;
  var el = currentlyDragged;
  if (event.type == 'click' && isDraggable(event.target)) {
    rangeBox = event.target.parentElement.parentElement;
  }
  if (event.type == 'mousemove') {
    rangeBox = el.parentElement.parentElement;
  }
  return rangeBox;
}

function getCoefficient(event) {
  var slider = getRangeBox(event);
  var rect = slider.getBoundingClientRect();
  var K = 0;
  if (slider.dataset.direction == 'horizontal') {

    var offsetX = event.clientX - slider.offsetLeft;
    var width = slider.clientWidth;
    K = offsetX / width;

  } else if (slider.dataset.direction == 'vertical') {

    var height = slider.clientHeight;
    var offsetY = event.clientY - rect.top;
    K = 1 - offsetY / height;

  }
  return K;
}

function rewind(event) {
  if (inRange(event)) {
    player.currentTime = player.duration * getCoefficient(event);
  }
}

function changeVolume(event) {
  if (inRange(event)) {
    player.volume = getCoefficient(event);
  }
}

function formatTime(time) {
  var min = Math.floor(time / 60);
  var sec = Math.floor(time % 60);
  return min + ':' + (sec < 10 ? '0' + sec : sec);
}

function togglePlay() {
  if (player.paused) {
    playPause.attributes.d.value = "M0 0h6v24H0zM12 0h6v24h-6z";
    player.play();
  } else {
    playPause.attributes.d.value = "M18 12L0 24V0";
    player.pause();
  }
}

function makePlay() {
  playpauseBtn.style.display = 'block';
  loading.style.display = 'none';
}

function directionAware() {
  if (window.innerHeight < 250) {
    volumeControls.style.bottom = '-54px';
    volumeControls.style.left = '54px';
  } else if (audioPlayer.offsetTop < 154) {
    volumeControls.style.bottom = '-164px';
    volumeControls.style.left = '-3px';
  } else {
    volumeControls.style.bottom = '52px';
    volumeControls.style.left = '-3px';
  }
}