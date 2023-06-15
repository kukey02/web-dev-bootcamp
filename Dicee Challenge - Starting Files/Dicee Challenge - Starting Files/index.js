var randomNumber1 = Math.floor( Math.random()*6 + 1);
var diceImage = "dice"+randomNumber1+".png";
var imageSource = "./images/"+diceImage;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",imageSource);


var randomNumber2 = Math.floor( Math.random()*6 + 1);
var diceImage2 = "dice"+randomNumber2+".png";
var imageSource2 = "./images/"+diceImage2;
 document.querySelectorAll("img")[1].setAttribute("src",imageSource2);


if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 Wins!";
}
else if(randomNumber1===randomNumber2){
    document.querySelector("h1").innerHTML="It's a Tie!";
}
else{
    document.querySelector("h1").innerHTML="Player 2 Wins!";
}


