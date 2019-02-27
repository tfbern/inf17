var kScore = 0
var hScore = 0
var jScore = 0
var aScore = 0
var dScore = 0

function addKabi() {
    kScore = kScore + 1
    var kSpace = document.getElementById('kabi-score').innerHTML = kScore
}
function addHeze() {
    hScore = hScore + 1
    var hSpace = document.getElementById('heze-score').innerHTML = hScore
}
function addJames() {
    jScore = jScore + 1
    var jSpace = document.getElementById('james-score').innerHTML = jScore
}
function addAli() {
    aScore = aScore + 1
    var aSpace = document.getElementById('ali-score').innerHTML = aScore
}
function addDomi() {
    dScore = dScore + 1
    var dSpace = document.getElementById('domi-score').innerHTML = dScore
}