var deck = [
    2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11,
    2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11,
    2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11,
    2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11
]

var player = []
var dealer = []

var grid1 = document.getElementById('grid-one')
var grid2 = document.getElementById('grid-two')
var gridBox2 = document.getElementsByClassName('grid-box-2')

var player1 = document.getElementById('player-1')
var player2 = document.getElementById('player-2')

var dealer1 = document.getElementById('dealer-1')
var dealer2 = document.getElementById('dealer-2')

var winBox = document.getElementById('w')
var loseBox = document.getElementById('l')

var title = document.getElementById('title')

const reducer = (accumulator, currentValue) => accumulator + currentValue

var wins = 0
var loss = 0

winBox.innerHTML = 'Win: ' + wins
loseBox.innerHTML = 'Loss: ' + loss

function newGame() {

    if (wins == 3 || loss == 3) {
        wins = 0
        loss = 0
        winBox.innerHTML = 'Win: ' + wins
        loseBox.innerHTML = 'Loss: ' + loss
    } else {
        console.log('Never surrender!');
    }

    player = []
    dealer = []

    grid1.innerHTML = ''
    grid2.innerHTML = ''

    player.push(deck[Math.floor(Math.random() * deck.length)])
    player.push(deck[Math.floor(Math.random() * deck.length)])

    dealer.push(deck[Math.floor(Math.random() * deck.length)])
    dealer.push(deck[Math.floor(Math.random() * deck.length)])

    document.getElementById('body').style.backgroundColor = '#ffffff'
    title.innerHTML = 'BLACK JACK'

    console.log('Your hand: ', player)
    console.log('Dealer hand :', dealer[0])

    for (card in player) {
        // "grid-1-item" wird erstellt + Klasse
        var newBox = document.createElement('div')
        newBox.className = 'grid-box-2'
        newBox.innerHTML = player[card]

        // Definiert Parent- und Child-Elemente
        grid2.append(newBox)
    }

    // "grid-1-item" wird erstellt + Klasse
    var newBox = document.createElement('div')
    newBox.className = 'grid-box-1'
    newBox.innerHTML = dealer[0]

    // Definiert Parent- und Child-Elemente
    grid1.append(newBox)

    console.log()
    console.log('(Hit) or (stand)?')
    console.log()

    if (player.reduce(reducer) == 21) {
        console.log('Black Jack!');
        document.getElementById('body').style.backgroundColor = '#00cc88'
        title.innerHTML = 'Black Jack! You won!'

        wins++
        console.log(wins, loss);
        winBox.innerHTML = 'Win: ' + wins
        loseBox.innerHTML = 'Loss: ' + loss

        grid1.innerHTML = ''

        for (card in dealer) {
            // "grid-1-item" wird erstellt + Klasse
            var newBox = document.createElement('div')
            newBox.className = 'grid-box-1'
            newBox.innerHTML = dealer[card]

            // Definiert Parent- und Child-Elemente
            grid1.append(newBox)
        }
    } else {
        console.log('Normal hand');
    }
}

function hit() {
    player.push(deck[Math.floor(Math.random() * deck.length)])
    console.log("New hand: ", player)
    console.log('Sum: ', player.reduce(reducer))

    grid2.innerHTML = ''

    for (card in player) {

        // "grid-1-item" wird erstellt + Klasse
        var newBox = document.createElement('div')
        newBox.className = 'grid-box-2'
        newBox.innerHTML = player[card]

        // Definiert Parent- und Child-Elemente
        grid2.append(newBox)
    }


    if (player.reduce(reducer) == 21 && dealer.reduce(reducer) !== 21) {
        console.log('Black Jack!')
        document.getElementById('body').style.backgroundColor = '#00cc88'
        title.innerHTML = 'Black Jack! You won!'

        wins++
        console.log(wins, loss)
        winBox.innerHTML = 'Win: ' + wins
        loseBox.innerHTML = 'Loss: ' + loss

        console.log();

        grid1.innerHTML = ''
        grid2.innerHTML = ''

        for (card in player) {

            // "grid-1-item" wird erstellt + Klasse
            var newBox = document.createElement('div')
            newBox.className = 'grid-box-2'
            newBox.innerHTML = player[card]

            // Definiert Parent- und Child-Elemente
            grid2.append(newBox)
        }

        for (card in dealer) {
            // "grid-1-item" wird erstellt + Klasse
            var newBox = document.createElement('div')
            newBox.className = 'grid-box-1'
            newBox.innerHTML = dealer[card]

            // Definiert Parent- und Child-Elemente
            grid1.append(newBox)
        }

    } else if (player.reduce(reducer) == [7, 7, 7]) {
        console.log('Triplet!')
        document.getElementById('body').style.backgroundColor = '#00cc88'
        title.innerHTML = 'Tripplet! You won!'

        wins++
        console.log(wins, loss)
        winBox.innerHTML = 'Win: ' + wins
        loseBox.innerHTML = 'Loss: ' + loss

        grid1.innerHTML = ''
        grid2.innerHTML = ''

        for (card in player) {

            // "grid-1-item" wird erstellt + Klasse
            var newBox = document.createElement('div')
            newBox.className = 'grid-box-2'
            newBox.innerHTML = player[card]

            // Definiert Parent- und Child-Elemente
            grid2.append(newBox)
        }

        for (card in dealer) {
            // "grid-1-item" wird erstellt + Klasse
            var newBox = document.createElement('div')
            newBox.className = 'grid-box-1'
            newBox.innerHTML = dealer[card]

            // Definiert Parent- und Child-Elemente
            grid1.append(newBox)
        }

    } else if (player.reduce(reducer) > 21) {
        if (loss >= 2) {
            console.log('Bust!')
            document.getElementById('body').style.backgroundColor = '#cc0044'
            title.innerHTML = 'Bust! You lost!'

            loss++
            console.log(wins, loss);
            winBox.innerHTML = 'Win: ' + wins
            loseBox.innerHTML = 'Loss: ' + loss

            console.log();

            grid1.innerHTML = ''
            grid2.innerHTML = ''

            for (card in player) {

                // "grid-1-item" wird erstellt + Klasse
                var newBox = document.createElement('div')
                newBox.className = 'grid-box-2'
                newBox.innerHTML = player[card]

                // Definiert Parent- und Child-Elemente
                grid2.append(newBox)
            }

            for (card in dealer) {
                // "grid-1-item" wird erstellt + Klasse
                var newBox = document.createElement('div')
                newBox.className = 'grid-box-1'
                newBox.innerHTML = dealer[card]

                // Definiert Parent- und Child-Elemente
                grid1.append(newBox)
            }

        } else {
            console.log('Bust!')
            document.getElementById('body').style.backgroundColor = '#cc0044'
            title.innerHTML = 'Fucked...! You lost!'

            loss++
            console.log(wins, loss);
            winBox.innerHTML = 'Win: ' + wins
            loseBox.innerHTML = 'Loss: ' + loss

            grid1.innerHTML = ''
            grid2.innerHTML = ''

            for (card in player) {

                // "grid-1-item" wird erstellt + Klasse
                var newBox = document.createElement('div')
                newBox.className = 'grid-box-2'
                newBox.innerHTML = player[card]

                // Definiert Parent- und Child-Elemente
                grid2.append(newBox)
            }

            for (card in dealer) {
                // "grid-1-item" wird erstellt + Klasse
                var newBox = document.createElement('div')
                newBox.className = 'grid-box-1'
                newBox.innerHTML = dealer[card]

                // Definiert Parent- und Child-Elemente
                grid1.append(newBox)
            }
        }
    }
}

function stand() {
    console.log('Dealers turn...')

    while (dealer.reduce(reducer) <= 16) {
        dealer.push(deck[Math.floor(Math.random() * deck.length)])

        grid1.innerHTML = ''

        for (card in dealer) {
            // "grid-1-item" wird erstellt + Klasse
            var newBox = document.createElement('div')
            newBox.className = 'grid-box-1'
            newBox.innerHTML = dealer[card]

            // Definiert Parent- und Child-Elemente
            grid1.append(newBox)
        }
    }

    console.log('Dealer hand: ', dealer);


    if (dealer.reduce(reducer) < player.reduce(reducer)) {
        console.log('You won!')
        document.getElementById('body').style.backgroundColor = '#00cc88'
        title.innerHTML = 'You won!'

        wins++
        console.log(wins, loss)
        winBox.innerHTML = 'Win: ' + wins
        loseBox.innerHTML = 'Loss: ' + loss
        console.log()
        console.log()

        grid1.innerHTML = ''
        grid2.innerHTML = ''

        for (card in player) {

            // "grid-1-item" wird erstellt + Klasse
            var newBox = document.createElement('div')
            newBox.className = 'grid-box-2'
            newBox.innerHTML = player[card]

            // Definiert Parent- und Child-Elemente
            grid2.append(newBox)
        }

        for (card in dealer) {
            // "grid-1-item" wird erstellt + Klasse
            var newBox = document.createElement('div')
            newBox.className = 'grid-box-1'
            newBox.innerHTML = dealer[card]

            // Definiert Parent- und Child-Elemente
            grid1.append(newBox)
        }
    } else if (dealer.reduce(reducer) > player.reduce(reducer) && dealer.reduce(reducer) > 21) {
        console.log('You won!')
        document.getElementById('body').style.backgroundColor = '#00cc88'
        title.innerHTML = 'You won!'

        wins++
        console.log(wins, loss)
        winBox.innerHTML = 'Win: ' + wins
        loseBox.innerHTML = 'Loss: ' + loss
        console.log()
        console.log()

        grid1.innerHTML = ''
        grid2.innerHTML = ''

        for (card in player) {

            // "grid-1-item" wird erstellt + Klasse
            var newBox = document.createElement('div')
            newBox.className = 'grid-box-2'
            newBox.innerHTML = player[card]

            // Definiert Parent- und Child-Elemente
            grid2.append(newBox)
        }

        for (card in dealer) {
            // "grid-1-item" wird erstellt + Klasse
            var newBox = document.createElement('div')
            newBox.className = 'grid-box-1'
            newBox.innerHTML = dealer[card]

            // Definiert Parent- und Child-Elemente
            grid1.append(newBox)
        }
    } else if (dealer.reduce(reducer) > player.reduce(reducer) && dealer.reduce(reducer) <= 21) {
        console.log('You lost!');
        document.getElementById('body').style.backgroundColor = '#cc0044'
        title.innerHTML = 'You lost!'

        loss++
        console.log(wins, loss);
        winBox.innerHTML = 'Win: ' + wins
        loseBox.innerHTML = 'Loss: ' + loss
        console.log();
        console.log();

        grid1.innerHTML = ''
        grid2.innerHTML = ''

        for (card in player) {

            // "grid-1-item" wird erstellt + Klasse
            var newBox = document.createElement('div')
            newBox.className = 'grid-box-2'
            newBox.innerHTML = player[card]

            // Definiert Parent- und Child-Elemente
            grid2.append(newBox)
        }

        for (card in dealer) {
            // "grid-1-item" wird erstellt + Klasse
            var newBox = document.createElement('div')
            newBox.className = 'grid-box-1'
            newBox.innerHTML = dealer[card]

            // Definiert Parent- und Child-Elemente
            grid1.append(newBox)
        }
    } else if (dealer.reduce(reducer) == player.reduce(reducer)) {
        console.log('Draw');
        document.getElementById('body').style.backgroundColor = '#ffab00'
        title.innerHTML = 'Draw!'

        winBox.innerHTML = 'Win: ' + wins
        loseBox.innerHTML = 'Loss: ' + loss
        console.log();
        console.log();

        grid1.innerHTML = ''
        grid2.innerHTML = ''

        for (card in player) {

            // "grid-1-item" wird erstellt + Klasse
            var newBox = document.createElement('div')
            newBox.className = 'grid-box-2'
            newBox.innerHTML = player[card]

            // Definiert Parent- und Child-Elemente
            grid2.append(newBox)
        }

        for (card in dealer) {
            // "grid-1-item" wird erstellt + Klasse
            var newBox = document.createElement('div')
            newBox.className = 'grid-box-1'
            newBox.innerHTML = dealer[card]

            // Definiert Parent- und Child-Elemente
            grid1.append(newBox)
        }
    } else if (dealer.reduce(reducer) == player.reduce(reducer) && dealer.reduce(reducer) == 21) {
        console.log('Shit is invalid... *Gun Shot*');
        document.getElementById('body').style.backgroundColor = '#ffab00'
        title.innerHTML = 'Son of a bitch!'
        console.log(wins, loss);
        winBox.innerHTML = 'Win: ' + wins
        loseBox.innerHTML = 'Loss: ' + loss
        console.log();
        console.log();

        grid1.innerHTML = ''
        grid2.innerHTML = ''

        for (card in player) {

            // "grid-1-item" wird erstellt + Klasse
            var newBox = document.createElement('div')
            newBox.className = 'grid-box-2'
            newBox.innerHTML = player[card]

            // Definiert Parent- und Child-Elemente
            grid2.append(newBox)
        }

        for (card in dealer) {
            // "grid-1-item" wird erstellt + Klasse
            var newBox = document.createElement('div')
            newBox.className = 'grid-box-1'
            newBox.innerHTML = dealer[card]

            // Definiert Parent- und Child-Elemente
            grid1.append(newBox)
        }
    }
}