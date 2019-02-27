

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCSxJ8CACoLlBCULan7xaw48d-_79oUBq0",
    authDomain: "studentdb-2d475.firebaseapp.com",
    databaseURL: "https://studentdb-2d475.firebaseio.com",
    projectId: "studentdb-2d475",
    storageBucket: "studentdb-2d475.appspot.com",
    messagingSenderId: "777255035712"
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

    var nameIn = name.toUpperCase()
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

    }

}

// Trägt die Daten in DB ein ---> Muss in pushValue() aufgerufen werden
function delUserData(name) {
    console.log('No data was selected to delete');
}

function delValue() {
    // Wert im Input "nameIn" und "taskIn"
    var name = document.getElementById('nameIn').value
    var task = document.getElementById('taskIn').value

    var nameOut = name.toUpperCase()
    var taskOut = task.toUpperCase()

    delUserData()
}

// Neue Referenz auf DB
var addDB = firebase.database().ref()

// Bei jeglicher Änderung wird ein snap geamcht ---> "grid-1" wird neu geladen und die DOM werden eingefügt.
addDB.on("value", snap => {
    var kill = document.getElementById('grid-1')

    // Der Wert von "grid-1" wir auf 0 gesetzt
    kill.innerHTML = ""


    var kek = snap.val()

    // "grid-1" wird erfasst
    var grid = document.getElementById('grid-1')

    // Diese For-Loops bauen den Pfad zu den Schülerdaten auf.
    for (x in kek) {

        for (kys in kek[x]) {

            for (killme in kek[x][kys]) {

                for (pls in kek[x][kys][killme]) {

                    for (endmylife in kek[x][kys][killme][pls]) {

                        var objName = kek[x][kys][killme][pls][endmylife]
                        console.log(pls);

                        /* if (endmylife == 'Name') {

                            // "grid-1-item" wird erstellt + Klasse
                            var newBox = document.createElement('div')
                            newBox.className = 'grid-box-1'

                            // Definiert Parent- und Child-Elemente
                            grid.append(newBox)

                        }

                        // Wenn der Name der Property = Name ---> Name wird in Variable gespeichert
                        if (endmylife == 'Name') {

                            var name = objName

                            // Erstell "p DOM" mit der Klasse "who" und weist es dem "grid-1-item" zu
                            var newName = document.createElement('p')
                            newName.className = 'who'
                            newBox.appendChild(newName)
                            newName.innerHTML = name
                        }

                        // Erstell "p DOM" mit der Klasse "what" und weist es dem "grid-1-item" zu
                        if (endmylife == 'task') {
                            var task = objName
                            var newTask = document.createElement('p')
                            newTask.className = 'what'
                            newBox.appendChild(newTask)
                            newTask.innerHTML = task
                        } */

                        if (pls == day) {
                            if (endmylife == 'Name') {

                                // "grid-1-item" wird erstellt + Klasse
                                var newBox = document.createElement('div')
                                newBox.className = 'grid-box-1'
    
                                // Definiert Parent- und Child-Elemente
                                grid.append(newBox)
    
                            }
    
                            // Wenn der Name der Property = Name ---> Name wird in Variable gespeichert
                            if (endmylife == 'Name') {
    
                                var name = objName
    
                                // Erstell "p DOM" mit der Klasse "who" und weist es dem "grid-1-item" zu
                                var newName = document.createElement('p')
                                newName.className = 'who'
                                newBox.appendChild(newName)
                                newName.innerHTML = name
                            }
    
                            // Erstell "p DOM" mit der Klasse "what" und weist es dem "grid-1-item" zu
                            if (endmylife == 'task') {
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