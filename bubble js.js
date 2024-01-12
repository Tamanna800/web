var timeer = 30;
var score = 0;
var hitrn = 0;

// jispe click  karoge wo ele par event raise hoga, aur event listener naa milne par event ele ke parent par listner dhundhege, waha bhi na milne par event parent ke parent ke parent par listner dhundega



function IS (){
    score += 1;
    document.querySelector("#score").textContent = score;
}

function getHit(){
    hitrn= Math.floor(Math.random()*10)
    document.querySelector("#hit").textContent = hitrn;
}

function makeBubble(){
    var  clutter = "";
for(var i=1; i<=85; i++){
    var rn = Math.floor(Math.random()*10)
    clutter += `<div class="bubble">${rn}</div>`;
}
document.querySelector(".pbtm").innerHTML = clutter;
}

function runtimer (){
   var timer = setInterval(function(){
        if(timeer>0){
            timeer--;
            document.querySelector("#rt").textContent = timeer;
        }
        else{
            clearInterval(timer);
            document.querySelector(".pbtm").innerHTML = `<h1>Game Over!</h1>`;
        }
    },1000);
}

document.querySelector(".pbtm").addEventListener("click",function(dets){
   var clicked = (Number(dets.target.innerHTML));
  if(clicked===hitrn){
    IS();
    getHit();
    makeBubble();
    runtimer();
  }
});

getHit();
runtimer();
makeBubble();