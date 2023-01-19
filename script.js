var rno1=Math.random();
rno1=Math.floor(rno1*6)+1;
var rno2=Math.random();
rno2=Math.floor(rno2*6)+1;
if (rno1==1){
    document.querySelector("#p1").setAttribute("src","1.jpg");
}else if(rno1==2){
    document.querySelector("#p1").setAttribute("src","2.jpg");
}else if(rno1==3){
    document.querySelector("#p1").setAttribute("src","3.jpg");
}else if(rno1==4){
    document.querySelector("#p1").setAttribute("src","4.jpg");
}else if(rno1==5){
    document.querySelector("#p1").setAttribute("src","5.jpg");
}else if(rno1==6){
    document.querySelector("#p1").setAttribute("src","6.jpg");
}

if (rno2==1){
    document.querySelector("#p2").setAttribute("src","1.jpg");
}else if(rno2==2){
    document.querySelector("#p2").setAttribute("src","2.jpg");
}else if(rno2==3){
    document.querySelector("#p2").setAttribute("src","3.jpg");
}else if(rno2==4){
    document.querySelector("#p2").setAttribute("src","4.jpg");
}else if(rno2==5){
    document.querySelector("#p2").setAttribute("src","5.jpg");
}else if(rno2==6){
    document.querySelector("#p2").setAttribute("src","6.jpg");
}

if (rno1>rno2){
    document.querySelector("h1").innerHTML='<img src="flag.png"  style="width:1em;height:1em;"> Player 1 Wins';
}else if(rno2>rno1){
    document.querySelector("h1").innerHTML='Player 2 Wins <img src="flag.png" style="width:1em;height:1em;">';
}else{
    document.querySelector("h1").innerHTML="It's a Tie";
}
