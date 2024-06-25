const rock=document.querySelector(".rock");
const paper=document.querySelector(".paper");
const scizzor=document.querySelector(".scizzor");
const opt=document.querySelectorAll(".opt");
const msg=document.querySelector(".msg");
let number;

const reset=document.querySelector(".Reset");

reset.addEventListener("click",()=>{
    const displayer=document.querySelector(".player");
    displayer.innerHTML=0;
    const disbot=document.querySelector(".bot");
    disbot.innerHTML=0;
})

function botrock(optno){
    console.log(optno);
    if (optno=="rock") {
        msg.innerHTML="Bot chose rock. It's a tie";
    } 
    else if(optno=="paper")
    {
        msg.innerHTML="Bot chose rock. You WIN";
        const display=document.querySelector(".player");
        display.innerHTML=Number(display.innerHTML)+1;
    }
    else if (optno=="scizzor")
    {
        msg.innerHTML="Bot chose rock. You Lose";
        const display=document.querySelector(".bot");
        display.innerHTML=Number(display.innerHTML)+1;
    }

}

function botpaper(optno){
    console.log(optno);
    if (optno=="rock") {
        msg.innerHTML="Bot chose paper. You Lose";
        const display=document.querySelector(".bot");
        display.innerHTML=Number(display.innerHTML)+1;
    } 
    else if(optno=="paper")
    {
        msg.innerHTML="Bot chose paper. It's a tie";
    }
    else if (optno=="scizzor")
    {
        msg.innerHTML="Bot chose paper. You WIN"
        const display=document.querySelector(".player");
        display.innerHTML=Number(display.innerHTML)+1;
    }
}

function botscizzor(optno){
    console.log(optno);
    if (optno=="rock") {
        msg.innerHTML="Bot chose scizzor. You WIN"
        const display=document.querySelector(".player");
        display.innerHTML=Number(display.innerHTML)+1;
    } 
    else if(optno=="paper")
    {
        msg.innerHTML="Bot chose scizzor. You Lose";
        const display=document.querySelector(".bot");
        display.innerHTML=Number(display.innerHTML)+1;
    }
    else if (optno=="scizzor")
    {
        msg.innerHTML="Bot chose scizzor. It's a tie";
    }
}

opt.forEach((option)=>{
    option.addEventListener("click",()=>{
        number=Math.random()*3;
        number=Math.floor(number);
        console.log(number);
        let optno=option.id;
        // console.log(optno);
        if (number==0) {
            botrock(optno);
        }
        else if (number==1) {
            botpaper(optno);
        }
        else if (number==2) {
            botscizzor(optno);
        }
    })
})

