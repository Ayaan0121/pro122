x = 0;
y = 0;
screen_width=0;
screen_height=0;
apple="";
speak_data ="";
to_number="";

function preload() {
    apple = loadImage('https://i.postimg.cc/qqjH8Hdm/apple.png');
}
draw_apple = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 

 to_number=Number(content);

 if (Number.isInteger(to_number)) {
  document.getElementById("status").innerHTML = "Started drawing apple";
  draw_apple="set";
 }else{
  document.getElementById("status").innerHTML ="The speech has not recognized a number";
 }

}

function setup() {
 screen_width= window.innerWidth;
 screen_height=window.innerHeight;
 canvas = createCanvas(screen_width, screen_height-150);
 canvas.position(0 , 150);
 
}

function draw() {
  if(draw_apple == "set")
  {
    draw_apple = "";
    for (let index = 1; index <= to_number ; index++) {
       x = Math.floor(Math.random() *   800);
       y =  Math.floor(Math.random() *   500);
       image(apple , x , y , 50 , 50);
    }
    speak()
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    speak_data = to_number + "Apples Drawn";
    speak()
   

   



  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    
}
