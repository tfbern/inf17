// Initialisiert Firebase
var config = {
    apiKey: "AIzaSyBw2eB3co6QarVFAxoVhtapW7Nl8ZPJOjw",
    authDomain: "test-32152.firebaseapp.com",
    databaseURL: "https://test-32152.firebaseio.com",
    projectId: "test-32152",
    storageBucket: "test-32152.appspot.com",
    messagingSenderId: "499109080935"
};

// Intialisierung mit config Parameter
firebase.initializeApp(config);

// Referenz zur DB
var db = firebase.database()

// Aktuelles Datum als String speichern ---> Wird als Index / Parent benutzt
var year = new Date().getFullYear()
var month = new Date().getMonth()
var day = new Date().getDate()
var date = new Date().toDateString()
var timestamp = Date.now()
console.log(now);


// Trägt die Daten in DB ein ---> Muss in pushValue() aufgerufen werden
function writeUserData(name, task, date) {
    firebase.database().ref(`${name}/${year}/${month}/${day}`).set({

        A_Name: name,
        B_Aufgabe: task,
        C_Datum: date,
        D_Zeitstempel: timestamp

    });
}

// Durch diese Funktion entnehme ich dem Benutzer die nötigen Daten und mache ein push in die Firebase DB.
function pushValue() {

    // Wert im Input "nameIn" und "taskIn"
    var nameIn = document.getElementById('nameIn').value
    var taskIn = document.getElementById('taskIn').value

    // Wenn der Wert der beiden Inputs '' entspricht ---> Nichts machen
    if (nameIn !== '' && taskIn !== '') {

        console.log('Inputs are filled in')
        console.log(`Name: ${nameIn} | Task: ${taskIn}`);

        writeUserData(nameIn, taskIn, date)

    } else {

        console.log('Both inputs need to be filled out')

    }
}


// Jojo Code
// Initialize Firebase
var config = {
	apiKey: "AIzaSyA1xcpVW-PvfTWOh5UgklwwCOVrAdj3qg8",
	authDomain: "tfbern-21ae1.firebaseapp.com",
	databaseURL: "https://tfbern-21ae1.firebaseio.com",
	projectId: "tfbern-21ae1",
	storageBucket: "",
	messagingSenderId: "170420198592"
}

firebase.initializeApp(config)
console.log(firebase)

var dateID = new Date().toDateString()
console.log(dateID);

// Get a reference to the database service
var database = firebase.database()
var dataDay = firebase.database().ref().child(`${dateID}`)

var ded = [];

var arrName = []
var arrTask = []
var arrTime = []

var arrCount = []

// function pushValue() {

// var x = document.getElementById('name').value
// var y = document.getElementById('aufgabe').value

// if (x !== '' && y !== '') {

// 	arrName.push(x)
// 	arrTask.push(y)

// 	var oneLenght = arrName.length

// 	arrCount.push('box ' + oneLenght)

// 	for (element in arrCount) {

// 		var grid = document.getElementById('grid-1')

// 		var newBox = document.createElement('div')
// 		document.getElementById('grid-1').appendChild(newBox)
// 		newBox.className = 'grid-box-1'
// 	}

// 	for (element in arrName) {
// 		var newName = document.createElement('p')
// 		newName.className = 'who'
// 		newBox.appendChild(newName)
// 		newName.innerHTML = arrName[element]
// 	}

// 	for (element in arrTask) {
// 		var newTask = document.createElement('p')
// 		newTask.className = 'what'
// 		newBox.appendChild(newTask)
// 		newTask.innerHTML = arrTask[element]
// 	}

// 	arrName = []
// 	arrTask = []
// 	arrTime = []

// 	arrCount = []

// 	document.getElementById('name').value = ''
// 	document.getElementById('aufgabe').value = ''

// 	document.getElementById('name').focus()

// 	writeUserData(x, y)

// } else {
// 	console.log('Name and task must be filled out.')
// }
// }


function writeUserData(name, aufgabe) {

	console.log(ded);
	var tag = Date.now()

	// var tempobj;


	if (ded) {

		ded.push({
			a_Name: name,
			b_Aufgabe: aufgabe,
			c_Zeitstempel: tag

		})
	} else {
		ded = {
			a_Name: name,
			b_Aufgabe: aufgabe
		}

	}
	// database.ref('students/').set(ded)
	database.ref(`${dateID}`).set(ded)
}

function pushValue() {
	//database.ref().child("students/").once("value", snap => {
	//ded = snap.val()
	database.ref().child(`${dateID}`).once("value", snap => {
		ded = snap.val()
		console.log(ded);

		var x = document.getElementById('name').value
		var y = document.getElementById('aufgabe').value

		if (x !== '' && y !== '') {

			arrName.push(x)
			arrTask.push(y)

			// var oneLenght = arrName.length

			// arrCount.push('box ' + oneLenght)

			// for (element in arrCount) {
			// 	var grid = document.getElementById('grid-1')
			// 	var newBox = document.createElement('div')
			// 	document.getElementById('grid-1').appendChild(newBox)
			// 	newBox.className = 'grid-box-1'
			// }

			// for (element in arrName) {
			// 	var newName = document.createElement('p')
			// 	newName.className = 'who'
			// 	newBox.appendChild(newName)
			// 	newName.innerHTML = arrName[element]
			// }

			// for (element in arrTask) {
			// 	var newTask = document.createElement('p')
			// 	newTask.className = 'what'
			// 	newBox.appendChild(newTask)
			// 	newTask.innerHTML = arrTask[element]
			// }

			arrName = []
			arrTask = []
			arrTime = []

			arrCount = []

			document.getElementById('name').value = ''
			document.getElementById('aufgabe').value = ''

			document.getElementById('name').focus()

			writeUserData(x, y)

		} else {
			console.log('Name and task must be filled out.')
		}

	})
}

function scrollToView() {
	document.getElementById('grid-1').style.display = 'grid'
	document.querySelector('#grid-1').scrollIntoView({
		behavior: 'smooth'
	});
}

// repair code
function fix() {
	console.log("DB got purged.");

	database.ref(`${dateID}`).set([{
		a_Name: "test",
		b_Aufgabe: "test",
		c_Zeitstempel: 'test'
	}])
}