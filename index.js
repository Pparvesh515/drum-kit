var btn=document.querySelectorAll(".drum");
for(var i=0; i<btn.length; i++){
    btn[i].addEventListener("click", function(){
        var x=this.innerHTML;
        check(x);
        animation(x);
    });
}
document.addEventListener("keydown", function(event){
    check(event.key);
    animation(event.key)
});
function check(x){
        switch(x){
            case "w":
                document.querySelector(".w").style.color="#fff"
                //this.style.color="white";
                var tom1=new Audio("sounds/tom-1.mp3");
                tom1.play();
                document.querySelector(".w").style.color="#DA0463";
            break;
    
            case 'a':
                //this.style.color="white";
                var tom2=new Audio("sounds/tom-2.mp3");
                tom2.play();
                //this.style.color="#DA0463";
            break;
    
            case 's':
                //this.style.color="white";
                var tom3=new Audio("sounds/tom-3.mp3");
                tom3.play();
                //this.style.color="#DA0463";
            break;
    
            case 'd':
                //this.style.color="white";
                var tom4=new Audio("sounds/tom-4.mp3");
                tom4.play();
                //this.style.color="#DA0463";
            break;
    
            case 'j':
                //this.style.color="#fff";
                var snare=new Audio("sounds/snare.mp3");
                snare.play();
                //this.style.color="#DA0463";
            break;
    
            case 'k':
                //this.style.color="white";
                var crash=new Audio("sounds/crash.mp3");
                crash.play();
                //this.style.color="#DA0463";
            break;
    
            case 'l':
                //this.style.color="white";
                var kick=new Audio("sounds/kick-bass.mp3");
                kick.play();
                //this.style.color="#DA0463";
            break;
    
            default:
                console.log("Error!!!");
        }
}
function animation(x){
    var currentBtn=document.querySelector("."+x);
    currentBtn.classList.toggle("pressed");
    setTimeout(function(){
        currentBtn.classList.toggle("pressed");
    }, 100)
}