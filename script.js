var mia = new Audio('songs/mia.mp3');
var nonstop = new Audio('songs/nonstop.mp3');
var bestieverhad = new Audio('songs/bestieverhad.mp3');
var holdon = new Audio('songs/holdon.mp3');
var godsplan = new Audio('songs/godsplan.mp3');

const question = document.querySelector('#question');
const start = document.querySelector('#answerchoices');
const response = document.querySelector('#reveal');
const button1 = document.querySelector('#button1');
const button2 = document.querySelector('#button2');
const button3 = document.querySelector('#button3');
const button4 = document.querySelector('#button4');

let score = 0;

var dict = { "https://open.spotify.com/album/61NNWRxokNUQx0aYysBL76": document.querySelector('#sofargone'),
             "https://open.spotify.com/album/6jlrjFR9mJV3jd1IPSplXU" :  document.querySelector('#thankmelater'),
             "https://open.spotify.com/album/63WdJvk8G9hxJn8u5rswNh" : document.querySelector('#takecare'),
             "https://open.spotify.com/album/2gXTTQ713nCELgPOS0qWyt" : document.querySelector('#nothingwasthesame'),
             "https://open.spotify.com/album/0ptlfJfwGTy0Yvrk14JK1I": document.querySelector('#ifyourreadingthis'),
             "https://open.spotify.com/album/1ozpmkWcCHwsQ4QTnxOOdT" : document.querySelector('#whatatimetobealive'),
             "https://open.spotify.com/playlist/37i9dQZF1DX1YF6nTEHymi":document.querySelector('#scorpian')
           };

var keys = Object.keys(dict);



function firstSong(){
  question.innerText = "Guess this Drake Song";
  mia.play();
  button1.innerText = "Money In the Grave";
  button2.innerText = "Mia";
  button3.innerText = "Shot in the Dark";
  button4.innerText = "Underground Kings";
  button2.addEventListener('click', function(){
    button2.style.backgroundColor = "#7be382";
    setTimeout(function(){ button2.style.backgroundColor = "#fec0ff"; }, 1000);
    mia.pause();
    setTimeout(function(){ secondSong(); }, 1500);
  })
  wrong(button1, button3, button4);
}

function secondSong(){
  question.innerText = "Guess this Drake Song";
  godsplan.play();
  button1.innerText = "Mia";
  button2.innerText = "Marvin's Room";
  button3.innerText = "God's Plan";
  button4.innerText = "Non Stop";

  button3.addEventListener('click', function(){
    button3.style.backgroundColor = "#7be382";
    setTimeout(function(){ button3.style.backgroundColor = "#fec0ff"; }, 1000);
    godsplan.pause();
    setTimeout(function(){ thirdSong(); }, 1500);
  })
  wrong(button1, button2, button4);
}

function thirdSong(){
  question.innerText = "Guess this Drake Song";
  bestieverhad.play();
  button1.innerText = "Best I Ever Had";
  button2.innerText = "Marvin's Room";
  button3.innerText = "Worest Behavior";
  button4.innerText = "Elevate";
  button1.addEventListener('click', function(){
    button1.style.backgroundColor = "#7be382";
    setTimeout(function(){ button1.style.backgroundColor = "#fec0ff"; }, 1000);
    bestieverhad.pause();
    setTimeout(function(){ fourthSong(); }, 1500);
  //  bestieverhad.pause();

  })
  wrong(button2, button3, button4);
  //bestieverhad.pause();

}

function fourthSong(){
  question.innerText = "Guess this Drake Song";
  holdon.play();
  button1.innerText = "Back to Back";
  button2.innerText = "Started From the Bottom";
  button3.innerText = "Hold On";
  button4.innerText = "Survival";

  button3.addEventListener('click', function(){
    button3.style.backgroundColor = "#7be382";
    setTimeout(function(){ button3.style.backgroundColor = "#fec0ff"; }, 1000);
    holdon.pause();
    setTimeout(function(){ hide(); }, 1500);

  });
  wrong(button1, button2, button4);
}

function wrong(buttonA, buttonB, buttonC){
  buttonA.addEventListener('click', function(){
    buttonA.style.backgroundColor = "#ff9696";
    setTimeout(function(){ buttonA.style.backgroundColor = "#fec0ff"; }, 1000);
  });

  buttonB.addEventListener('click', function(){
    buttonB.style.backgroundColor = "#ff9696";
    setTimeout(function(){ buttonB.style.backgroundColor = "#fec0ff"; }, 1000);

  });
  buttonC.addEventListener('click', function(){
    buttonC.style.backgroundColor = "#ff9696";
    setTimeout(function(){ buttonC.style.backgroundColor = "#fec0ff"; }, 1000);
  });

}

function hide(){
  bestieverhad.pause();
  start.style.display = "none";
  question.innerText = "You got them all right!";
}

function reveal() {
    if (start.style.display === "none") {
        start.style.display = "block";
        response.style.display = "none";
        firstSong();
     }  else {
         start.style.display = "none";
    }
}
