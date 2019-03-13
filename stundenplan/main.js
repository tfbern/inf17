// GetDate = 1 - 31
// GetDay = 0 -6, 0 = Sunday...
// GetMonth = 0 -11

function checkTime(i) {
    if (i < 10) {
        i = "0" + i
    }
    return i;
}

function startTime() {
    var time = new Date()
    var h = time.getHours()
    var m = time.getMinutes()
    var s = time.getSeconds()
    h = checkTime(h)
    m = checkTime(m)
    document.getElementById('txt').innerHTML = h + ":" + m
    var t = setTimeout(startTime, 500)
}

function swissDate() {
    var today = new Date()

    var day = today.getDate()
    var week = today.getDay()
    var month = today.getMonth()
    var year = today.getFullYear()

    var dayArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    var monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'Juli', 'August', 'September', 'October', 'November', 'December']

    if (week == 0) {
        if (month === 0) {
            console.log(dayArray[0] + ' - ' + day + '. ' + monthArray[0] + ' ' + year)
        } else if (month === 1) {
            console.log(dayArray[0] + ' - ' + day + '. ' + monthArray[1] + ' ' + year)
        } else if (month === 2) {
            console.log(dayArray[0] + ' - ' + day + '. ' + monthArray[2] + ' ' + year)
        } else if (month === 3) {
            console.log(dayArray[0] + ' - ' + day + '. ' + monthArray[3] + ' ' + year)
        } else if (month === 4) {
            console.log(dayArray[0] + ' - ' + day + '. ' + monthArray[4] + ' ' + year)
        } else if (month === 5) {
            console.log(dayArray[0] + ' - ' + day + '. ' + monthArray[5] + ' ' + year)
        } else if (month === 6) {
            console.log(dayArray[0] + ' - ' + day + '. ' + monthArray[6] + ' ' + year)
        } else if (month === 7) {
            console.log(dayArray[0] + ' - ' + day + '. ' + monthArray[7] + ' ' + year)
        } else if (month === 8) {
            console.log(dayArray[0] + ' - ' + day + '. ' + monthArray[8] + ' ' + year)
        } else if (month === 9) {
            console.log(dayArray[0] + ' - ' + day + '. ' + monthArray[9] + ' ' + year)
        } else if (month === 10) {
            console.log(dayArray[0] + ' - ' + day + '. ' + monthArray[10] + ' ' + year)
        } else {
            console.log(dayArray[0] + ' - ' + day + '. ' + monthArray[11] + ' ' + year)
        }
    } else if (week == 1) {
        if (month === 0) {
            console.log(dayArray[1] + ' - ' + day + '. ' + monthArray[0] + ' ' + year)
        } else if (month === 1) {
            console.log(dayArray[1] + ' - ' + day + '. ' + monthArray[1] + ' ' + year)
        } else if (month === 2) {
            console.log(dayArray[1] + ' - ' + day + '. ' + monthArray[2] + ' ' + year)
        } else if (month === 3) {
            console.log(dayArray[1] + ' - ' + day + '. ' + monthArray[3] + ' ' + year)
        } else if (month === 4) {
            console.log(dayArray[1] + ' - ' + day + '. ' + monthArray[4] + ' ' + year)
        } else if (month === 5) {
            console.log(dayArray[1] + ' - ' + day + '. ' + monthArray[5] + ' ' + year)
        } else if (month === 6) {
            console.log(dayArray[1] + ' - ' + day + '. ' + monthArray[6] + ' ' + year)
        } else if (month === 7) {
            console.log(dayArray[1] + ' - ' + day + '. ' + monthArray[7] + ' ' + year)
        } else if (month === 8) {
            console.log(dayArray[1] + ' - ' + day + '. ' + monthArray[8] + ' ' + year)
        } else if (month === 9) {
            console.log(dayArray[1] + ' - ' + day + '. ' + monthArray[9] + ' ' + year)
        } else if (month === 10) {
            console.log(dayArray[1] + ' - ' + day + '. ' + monthArray[10] + ' ' + year)
        } else {
            console.log(dayArray[5] + ' - ' + day + '. ' + monthArray[11] + ' ' + year)
        }
    } else if (week == 2) {
        if (month === 0) {
            console.log(dayArray[2] + ' - ' + day + '. ' + monthArray[0] + ' ' + year)
        } else if (month === 1) {
            console.log(dayArray[2] + ' - ' + day + '. ' + monthArray[1] + ' ' + year)
        } else if (month === 2) {
            console.log(dayArray[2] + ' - ' + day + '. ' + monthArray[2] + ' ' + year)
        } else if (month === 3) {
            console.log(dayArray[2] + ' - ' + day + '. ' + monthArray[3] + ' ' + year)
        } else if (month === 4) {
            console.log(dayArray[2] + ' - ' + day + '. ' + monthArray[4] + ' ' + year)
        } else if (month === 5) {
            console.log(dayArray[2] + ' - ' + day + '. ' + monthArray[5] + ' ' + year)
        } else if (month === 6) {
            console.log(dayArray[2] + ' - ' + day + '. ' + monthArray[6] + ' ' + year)
        } else if (month === 7) {
            console.log(dayArray[2] + ' - ' + day + '. ' + monthArray[7] + ' ' + year)
        } else if (month === 8) {
            console.log(dayArray[2] + ' - ' + day + '. ' + monthArray[8] + ' ' + year)
        } else if (month === 9) {
            console.log(dayArray[2] + ' - ' + day + '. ' + monthArray[9] + ' ' + year)
        } else if (month === 10) {
            console.log(dayArray[2] + ' - ' + day + '. ' + monthArray[10] + ' ' + year)
        } else {
            console.log(dayArray[2] + ' - ' + day + '. ' + monthArray[11] + ' ' + year)
        }
    } else if (week == 3) {
        if (month === 0) {
            console.log(dayArray[3] + ' - ' + day + '. ' + monthArray[0] + ' ' + year)
        } else if (month === 1) {
            console.log(dayArray[3] + ' - ' + day + '. ' + monthArray[1] + ' ' + year)
        } else if (month === 2) {
            console.log(dayArray[3] + ' - ' + day + '. ' + monthArray[2] + ' ' + year)
        } else if (month === 3) {
            console.log(dayArray[3] + ' - ' + day + '. ' + monthArray[3] + ' ' + year)
        } else if (month === 4) {
            console.log(dayArray[3] + ' - ' + day + '. ' + monthArray[4] + ' ' + year)
        } else if (month === 5) {
            console.log(dayArray[3] + ' - ' + day + '. ' + monthArray[5] + ' ' + year)
        } else if (month === 6) {
            console.log(dayArray[3] + ' - ' + day + '. ' + monthArray[6] + ' ' + year)
        } else if (month === 7) {
            console.log(dayArray[3] + ' - ' + day + '. ' + monthArray[7] + ' ' + year)
        } else if (month === 8) {
            console.log(dayArray[3] + ' - ' + day + '. ' + monthArray[8] + ' ' + year)
        } else if (month === 9) {
            console.log(dayArray[3] + ' - ' + day + '. ' + monthArray[9] + ' ' + year)
        } else if (month === 10) {
            console.log(dayArray[3] + ' - ' + day + '. ' + monthArray[10] + ' ' + year)
        } else {
            console.log(dayArray[3] + ' - ' + day + '. ' + monthArray[11] + ' ' + year)
        }
    } else if (week == 4) {
        if (month === 0) {
            console.log(dayArray[4] + ' - ' + day + '. ' + monthArray[0] + ' ' + year)
        } else if (month === 1) {
            console.log(dayArray[4] + ' - ' + day + '. ' + monthArray[1] + ' ' + year)
        } else if (month === 2) {
            console.log(dayArray[4] + ' - ' + day + '. ' + monthArray[2] + ' ' + year)
        } else if (month === 3) {
            console.log(dayArray[4] + ' - ' + day + '. ' + monthArray[3] + ' ' + year)
        } else if (month === 4) {
            console.log(dayArray[4] + ' - ' + day + '. ' + monthArray[4] + ' ' + year)
        } else if (month === 5) {
            console.log(dayArray[4] + ' - ' + day + '. ' + monthArray[5] + ' ' + year)
        } else if (month === 6) {
            console.log(dayArray[4] + ' - ' + day + '. ' + monthArray[6] + ' ' + year)
        } else if (month === 7) {
            console.log(dayArray[4] + ' - ' + day + '. ' + monthArray[7] + ' ' + year)
        } else if (month === 8) {
            console.log(dayArray[4] + ' - ' + day + '. ' + monthArray[8] + ' ' + year)
        } else if (month === 9) {
            console.log(dayArray[4] + ' - ' + day + '. ' + monthArray[9] + ' ' + year)
        } else if (month === 10) {
            console.log(dayArray[4] + ' - ' + day + '. ' + monthArray[10] + ' ' + year)
        } else {
            console.log(dayArray[5] + ' - ' + day + '. ' + monthArray[11] + ' ' + year)
        }
    } else if (week == 5) {
        if (month === 0) {
            console.log(dayArray[5] + ' - ' + day + '. ' + monthArray[0] + ' ' + year)
        } else if (month === 1) {
            console.log(dayArray[5] + ' - ' + day + '. ' + monthArray[1] + ' ' + year)
        } else if (month === 2) {
            console.log(dayArray[5] + ' - ' + day + '. ' + monthArray[2] + ' ' + year)
        } else if (month === 3) {
            console.log(dayArray[5] + ' - ' + day + '. ' + monthArray[3] + ' ' + year)
        } else if (month === 4) {
            console.log(dayArray[5] + ' - ' + day + '. ' + monthArray[4] + ' ' + year)
        } else if (month === 5) {
            console.log(dayArray[5] + ' - ' + day + '. ' + monthArray[5] + ' ' + year)
        } else if (month === 6) {
            console.log(dayArray[5] + ' - ' + day + '. ' + monthArray[6] + ' ' + year)
        } else if (month === 7) {
            console.log(dayArray[5] + ' - ' + day + '. ' + monthArray[7] + ' ' + year)
        } else if (month === 8) {
            console.log(dayArray[5] + ' - ' + day + '. ' + monthArray[8] + ' ' + year)
        } else if (month === 9) {
            console.log(dayArray[5] + ' - ' + day + '. ' + monthArray[9] + ' ' + year)
        } else if (month === 10) {
            console.log(dayArray[5] + ' - ' + day + '. ' + monthArray[10] + ' ' + year)
        } else {
            console.log(dayArray[5] + ' - ' + day + '. ' + monthArray[11] + ' ' + year)
        }
    } else if (week == 6) {
        if (month === 0) {
            console.log(dayArray[6] + ' - ' + day + '. ' + monthArray[0] + ' ' + year)
        } else if (month === 1) {
            console.log(dayArray[6] + ' - ' + day + '. ' + monthArray[1] + ' ' + year)
        } else if (month === 2) {
            console.log(dayArray[6] + ' - ' + day + '. ' + monthArray[2] + ' ' + year)
        } else if (month === 3) {
            console.log(dayArray[6] + ' - ' + day + '. ' + monthArray[3] + ' ' + year)
        } else if (month === 4) {
            console.log(dayArray[6] + ' - ' + day + '. ' + monthArray[4] + ' ' + year)
        } else if (month === 5) {
            console.log(dayArray[6] + ' - ' + day + '. ' + monthArray[5] + ' ' + year)
        } else if (month === 6) {
            console.log(dayArray[6] + ' - ' + day + '. ' + monthArray[6] + ' ' + year)
        } else if (month === 7) {
            console.log(dayArray[6] + ' - ' + day + '. ' + monthArray[7] + ' ' + year)
        } else if (month === 8) {
            console.log(dayArray[6] + ' - ' + day + '. ' + monthArray[8] + ' ' + year)
        } else if (month === 9) {
            console.log(dayArray[6] + ' - ' + day + '. ' + monthArray[9] + ' ' + year)
        } else if (month === 10) {
            console.log(dayArray[6] + ' - ' + day + '. ' + monthArray[10] + ' ' + year)
        } else {
            console.log(dayArray[6] + ' - ' + day + '. ' + monthArray[11] + ' ' + year)
        }
    }
}

swissDate()

function specialDate() {
    var today = new Date()

    if (today.getDate() === 1 && today.getMonth() === 0) {
        console.log('Happy new year!')
    } else if (today.getDate() === 15 && today.getMonth() === 1) {
        document.getElementById('stundentafel').style.backgroundImage = 'linear-gradient(120deg, #FFC0CB 70%, #FFAABB 30%)'
        document.getElementById('logo').src = '../img/like.png'
        document.getElementById('logo').style.animation = 'beat 700ms infinite alternate'
        console.log('Happy valentines day!')
    } else if (today.getDate() === 25 && today.getMonth() === 11) {
        console.log('Merry christmas!')
    } else {
        console.log('Hava a nive day!')
    }
}

specialDate()


function today() {
    var today = new Date()

    var montag = document.getElementById('montag')
    var dienstag = document.getElementById("dienstag")
    var mittwoch = document.getElementById("mittwoch")
    var donnerstag = document.getElementById("donnerstag")
    var freitag = document.getElementById("freitag")

    if (today.getDay() == 1) {
        montag.style.animation = "beat-2 1000ms infinite alternate"
    } else if (today.getDay() == 2) {
        dienstag.style.animation = "beat-2 1000ms infinite alternate"
    } else if (today.getDay() == 3) {
        mittwoch.style.animation = "beat-2 1000ms infinite alternate"
    } else if (today.getDay() == 4) {
        donnerstag.style.animation = "beat-2 1000ms infinite alternate"
    } else if (today.getDay() == 5) {
        freitag.style.animation = "beat-2 1000ms infinite alternate"
    } else {
        console.log('Kein Schultag.')
    }
}

today()

if (window.innerWidth < 820) {
    document.getElementById('montag').innerHTML = "Mo"
    document.getElementById('dienstag').innerHTML = "Di"
    document.getElementById('mittwoch').innerHTML = "Mi"
    document.getElementById('donnerstag').innerHTML = "Do"
    document.getElementById('freitag').innerHTML = "Fr"
}

//josiah version
var test = new Date
console.log(test.toLocaleDateString());
