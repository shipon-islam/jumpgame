let dino=document.querySelector('.dino');
let stone=document.querySelector('.stone');
let scoreVal=document.querySelector('.score');
const rotate=document.querySelector(".rotate");
let score=0;
cross=true;
var game=new Audio("audio/gameover.mp3")


function up(){
   
        dino.classList.add("dinofor")
 
    setTimeout(()=>{
        dino.classList.remove("dinofor")
    },1000)
}
function right(){
    let dinox=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
    dino.style.left=dinox+240+"px"
}
function left(){
    let dinox=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
    dino.style.left=dinox-120+"px"
}
function plus(){
    let duration=parseInt(window.getComputedStyle(stone,null).getPropertyValue('animation-duration'));
    stone.style.animationDuration=duration-1+"s"
  
}
function minus(){
    let duration=parseInt(window.getComputedStyle(stone,null).getPropertyValue('animation-duration'));
    stone.style.animationDuration=duration+1+"s"
  
}

window.addEventListener("keydown",(e)=>{
console.log(e.keyCode)
if(e.keyCode===38){
    dino.classList.add("dinofor")
}
setTimeout(()=>{
    dino.classList.remove("dinofor")
},1000)
if(e.keyCode===37){
    let dinox=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
    dino.style.left=dinox-250+"px"
}
if(e.keyCode===39){
    let dinox=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
    dino.style.left=dinox+250+"px"
}
})
setInterval(() => {
    let dx=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
    let dy=parseInt(window.getComputedStyle(dino,null).getPropertyValue('top'));
       let sx=parseInt(window.getComputedStyle(stone,null).getPropertyValue('left'));
    let sy=parseInt(window.getComputedStyle(stone,null).getPropertyValue('top'));

    offsetX=Math.abs(dx-sx);
    
    offsetY=Math.abs(dy-sy);
    
    if(offsetX<180 && offsetY<95){
        stone.classList.remove("stonefor");
        document.querySelector(".gameover").style.visibility="visible";
        document.querySelector(".develop").style.visibility="visible";
        document.querySelector(".gameStatus").style.visibility="hidden";
        document.querySelector(".control").style.visibility="hidden";
        document.querySelector(".image").style.display="block";
      
        game.play()
        
    }
    else if(offsetX<260 && cross){
        score+=1;
        updateScore(score)
        cross=false;
        
        setTimeout(()=>{
            cross=true

        },1000)
        setInterval(() => {
            aniDur=parseFloat(window.getComputedStyle(stone,null).getPropertyValue('animation duration'));
        newDur=aniDur-0.1;
        stone.style.animationDuration=newDur+"s"
     
        },500);
     audio.play()

      
        
    }
        
     
   
},100);
const updateScore=()=>{
    scoreVal.innerHTML=`your score is:${score}`
    let scoreCount=document.getElementById("scoreCount").innerText=score;
   
   
}
let audio=new Audio("audio/1.mp3");


let btn=document.getElementById("btn");
btn.addEventListener("click",()=>{
    window.location.reload();
})

function paused(){
    
    stone.classList.toggle("stonefor");
    let i=document.querySelector(".paused");
    
    i.classList.toggle("fa-play")
}
window.onload=()=>{
  
        if(screen.orientation.type==="portrait-primary"){
            paused()
     
        rotate.style.display="block"
        game.pause()
    }else{
        
        rotate.style.display="none"
       
    }
    
    
}

screen.orientation.addEventListener("change",()=>{
    if(screen.orientation.type==="portrait-primary"){
 
    rotate.style.display="block"
    
}else{
    
    rotate.style.display="none"
   
}
})