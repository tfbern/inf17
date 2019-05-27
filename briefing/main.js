$(document).ready(function () {

    $('#send').fadeIn(300);

})

// Initialize Firebase
var config = {
    apiKey: "AIzaSyBw2eB3co6QarVFAxoVhtapW7Nl8ZPJOjw",
    authDomain: "test-32152.firebaseapp.com",
    databaseURL: "https://test-32152.firebaseio.com",
    projectId: "test-32152",
    storageBucket: "test-32152.appspot.com",
    messagingSenderId: "499109080935"
};
firebase.initializeApp(config);



// Referenz zur DB
var db = firebase.database()

// Aktuelles Datum als String speichern ---> Wird als Index / Parent benutzt
var year = new Date().getFullYear()
var month = new Date().getMonth()
var day = new Date().getDate()
var date = new Date().toDateString()
var timeStamp = Date.now()

// Trägt die Daten in DB ein ---> Muss in pushValue() aufgerufen werden
function writeUserData(name, task, date, timeStamp) {
    firebase.database().ref(`${name}/${year}/${month}/${day}`).set({

        Name: name,
        task: task,
        Datum: date,
        Zeitstempel: timeStamp
    });
}

// Durch diese Funktion entnehme ich dem Benutzer die nötigen Daten und mache ein push in die Firebase DB.
function pushValue() {

    // Wert im Input "nameIn" und "taskIn"
    var name = document.getElementById('nameIn').value
    var task = document.getElementById('taskIn').value

    var nameIn = name.toUpperCase().trim()
    var taskIn = task.toUpperCase()

    // Wenn der Wert der beiden Inputs '' entspricht ---> Nichts machen
    if (nameIn !== '' && taskIn !== '') {

        console.log('Inputs are filled in')
        console.log(`Name: ${nameIn} | Task: ${taskIn}`);

        // Funktion "writeData" wird aufgerufen und speichert die Daten in die DB
        writeUserData(nameIn, taskIn, date, timeStamp)

        // Leert die Inputs und setzt den Fokus auf "nameIn"
        document.getElementById('nameIn').value = ''
        document.getElementById('taskIn').value = ''
        document.getElementById('nameIn').focus()

    } else {
        // Fehlermeldung ---> Eines der Inputs oder beide wurden nicht ausgefüllt
        console.log('Both inputs need to be filled out')
        document.getElementById('nameIn').style.border = '1px solid #ff3333'
        document.getElementById('taskIn').style.border = '1px solid #ff3333'
    }
}

// Neue Referenz auf DB
var addDB = firebase.database().ref()

// Bei jeglicher Änderung wird ein snap geamcht ---> "grid-1" wird neu geladen und die DOM werden eingefügt.
addDB.on("value", snap => {
    var kill = document.getElementById('grid-1')

    // Der Wert von "grid-1" wir auf 0 gesetzt
    kill.innerHTML = ""

    var db = snap.val()

    // "grid-1" wird erfasst
    var grid = document.getElementById('grid-1')

    // Diese For-Loops bauen den Pfad zu den Schülerdaten auf.
    for (name in db) {

        for (jahr in db[name]) {
            
            for (monat in db[name][jahr]) {
                
                for (tag in db[name][jahr][monat]) {
                    console.log(tag);

                    for (register in db[name][jahr][monat][tag]) { 

                        var objName = db[name][jahr][monat][tag][register]

                        if (jahr == year && monat == month && tag == day) {

                            if (register == 'Name') {

                                // "grid-1-item" wird erstellt + Klasse
                                var newBox = document.createElement('div')
                                newBox.className = 'grid-box-1'

                                // Definiert Parent- und Child-Elemente
                                grid.append(newBox)
                            }

                            // Wenn der Name der Property = Name ---> Name wird in Variable gespeichert
                            if (register == 'Name') {

                                var name = objName

                                // Erstell "p DOM" mit der Klasse "who" und weist es dem "grid-1-item" zu
                                var newName = document.createElement('p')
                                newName.className = 'who'
                                newBox.appendChild(newName)
                                newName.innerHTML = name
                            }

                            // Erstell "p DOM" mit der Klasse "what" und weist es dem "grid-1-item" zu
                            if (register == 'task') {
                                var task = objName
                                var newTask = document.createElement('p')
                                newTask.className = 'what'
                                newBox.appendChild(newTask)
                                newTask.innerHTML = task
                            }
                        }

                    }
                }
            }
        }
    }
})