//Erstellen des Decks
var deck = [
    2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11,
    2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11,
    2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11,
    2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11];

//Erstellen der Spieler & Dealer Blattes
var playerHand = [];
var dealerHand = [];

var startbtn = document.getElementById("startbtn")
var hitbtn = document.getElementById("hitbtn")
var standbtn = document.getElementById("standbtn")

//willkürliche Werte aus dem Deck auswählen
function startGame() {

    //Zeigt ob gewonnen oder nicht


    playerHand = []
    dealerHand = []

    //Randomgen für zufällige Karte
    function rand(min, max) {
        return Math.floor(Math.random() * max) + min
    }

    //2 jener Karten zu den 2 Blatts hinzufügen
    playerHand.push(deck[rand(0, deck.length)])
    playerHand.push(deck[rand(0, deck.length)])

    dealerHand.push(deck[rand(0, deck.length)])
    dealerHand.push(deck[rand(0, deck.length)])

    //Summen der Werte der Blätter
    var dH = dealerHand.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue;
    }, 0);

    var pH = playerHand.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue;
    }, 0);

    if (dH > 21) {
        dealerHand[1] = dealerHand[1] - 10;
    } else if (pH > 21) {
        playerHand[1] = playerHand[1] - 10;
    } else if (pH > 21 && dH > 21) {
        dealerHand[1] = dealerHand[1] - 10;
        playerHand[1] = playerHand[1] - 10;
    }

    var dH = dealerHand.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue;
    }, 0);

    var pH = playerHand.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue;
    }, 0);

    if (pH == 21 && dH ==21) {
        console.log("Draw!");
        console.log("playerHand:" + pH);
        console.log("dealerHand:" + dH);
        hitbtn.disabled = true
        standbtn.disabled = true
        document.getElementById("status").innerHTML = "Draw"
    } else if (pH == 21) {
        console.log("Victory!");
        console.log("playerHand:" + pH);
        console.log("dealerHand:" + dH);
        hitbtn.disabled = true
        standbtn.disabled = true
        document.getElementById("status").innerHTML = "Victory"
    } else if (dH == 21) {
        console.log("Loss!");
        console.log("playerHand:" + pH);
        console.log("dealerHand:" + dH);
        hitbtn.disabled = true
        standbtn.disabled = true
        document.getElementById("status").innerHTML = "Loss"
    } 


    console.log("Player cards: " + playerHand);
    console.log("Dealer card: " + dealerHand[0]);


    if (dH == 21) {
    }
    
}

//HIT!
function hit() {

    function rand(min, max) {
        return Math.floor(Math.random() * max) + min
    }

    playerHand.push(deck[rand(0, deck.length)])
    console.log("Player cards: " + playerHand);
    

    var pH = playerHand.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue;
      }, 0);
    
    var dH = dealerHand.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue;
      }, 0);
    
    if (pH > 21) {

        for (var i = 0; i < playerHand.length; i++) {
            if(playerHand[i]==11) {
                playerHand[i] = 1
                break;
            } 
        }

    }

    var pH = playerHand.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue;
      }, 0);
    
    var dH = dealerHand.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue;
      }, 0);

      if (pH > 21) {
        console.log("Bust!");
        console.log("playerHand:" + pH);
        document.getElementById("status").innerHTML = "Loss"
        hitbtn.disabled = true
    } else if (pH == 21) {
        console.log("Victory!");
        console.log("playerHand:" + pH);
        hitbtn.disabled = true
        document.getElementById("status").innerHTML = "Victory"
    } else {
        console.log("playerHand:" + pH);
        document.getElementById("status").innerHTML = "Black Jack"
    }


    var playerOutput = document.getElementById("playerHandOutput")

    document.getElementById("playerHand0").innerHTML = playerHand;
    document.getElementById("playerHandSum").innerHTML = "= " + pH;
    
    if (pH > 21) {
        document.getElementById("dealerHand0").innerHTML = dealerHand + " = " + dH;
    }

    if (pH == 21) {
        document.getElementById("dealerHand0").innerHTML = dealerHand + " = " + dH;
    }


}

//Gewinner auswahl
function stand() {

    function rand(min, max) {
        return Math.floor(Math.random() * max) + min
    }
    var dH = dealerHand.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue;
      }, 0);

    var pH = playerHand.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue;
      }, 0);

    while(dH < 15) {
        dealerHand.push(deck[rand(0, deck.length)])

        var dH = dealerHand.reduce(function (accumulator, currentValue) {
            return accumulator + currentValue;
          }, 0);

    }

    if (dH > 21) {
        console.log("Victory!");
        console.log("playerHand:" + pH);
        console.log("dealerHand:" + dH);
        document.getElementById("status").innerHTML = "Victory"
        hitbtn.disabled = true
    } else if (21-pH > 21-dH) {
        console.log("Lost!");
        console.log("playerHand:" + pH);
        console.log("dealerHand:" + dH);
        document.getElementById("status").innerHTML = "Loss"
        hitbtn.disabled = true
    } else if (pH == dH) {
        console.log("Draw!");
        console.log("playerHand:" + pH);
        console.log("dealerHand:" + dH);
        document.getElementById("status").innerHTML = "Draw"
        hitbtn.disabled = true
    } else {
        console.log("Victory!");
        console.log("playerHand:" + pH);
        console.log("dealerHand:" + dH);
        document.getElementById("status").innerHTML = "Victory"
        hitbtn.disabled = true
    }


    document.getElementById("playerHand0").innerHTML = playerHand;
    document.getElementById("dealerHand0").innerHTML = dealerHand + " = " + dH;
 
    document.getElementById("dealerHand0").innerHTML = dealerHand + " = " + dH;
}