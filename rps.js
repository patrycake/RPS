function game(playerEle){
    var player = playerEle.id;
    console.log("Player: " + player);
    
    var ranNum = Math.floor(Math.random() * Math.floor(3));
    var RpsArray = ["rock", "paper", "scissors"];
    var computer = RpsArray[ranNum];
    console.log("Computer: "+ computer);

    if(player == computer){
        document.getElementById("winner").innerText = "Tie!"
        //TIE
    }
    else if((computer == "rock" && player =="scissors") || (computer == "paper" && player =="rock") ||(computer == "scissors" && player == "paper")){
        document.getElementById("winner").innerText = "Computer Wins!!"
        //COM
    }
    else {
        document.getElementById("winner").innerText = "Player Wins!!";
        //PLAYER
    }
    document.getElementById("results").style.display = "block";
    document.getElementById("PResults").src = "assets/" +player + ".png";
    document.getElementById("CResults").src = "assets/" +computer + ".png";




}