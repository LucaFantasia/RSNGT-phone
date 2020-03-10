var studentNames = [];
var studentDisplayed = [];
var menu = document.getElementById("myList");
menu.addEventListener("change", generateData);
function generateData(event) {
    if (menu.value == '10') {
        setArrays10();
    } else if (menu.value == '9') {
        setArrays9();
    }
}
var count = 0;
document.getElementById("button").value = count;
generateData(event);
function setArrays10() {
    studentNames = ["Adriana", "Allan", "Luca", "Myro", "JJ", "JM", "Dinis",
        "Tilly", "Laura", "Carolina", "Luna", "Afonso", "Cecilia",
        "Sofia F", "Sofia G", "Sebastian", "Holly", "Sandro", "Tian", "Miguel", "Maria"];
    studentDisplayed = [false, false, false, false, false, false, false, false, false, false,
        false, false, false, false, false, false, false, false, false, false, false];
    count = studentNames.length;
    document.getElementById("button").value = count;
}
function setArrays9() {
    studentNames = ["Luca", "Elliot", "Adam", "Sam", "Pedro", "Guilherme", "Bernado", "Sarah",
        "Mariana", "Daniela", "Anais", "Beatriz", "Emily", "Tarushi", "Lauren",
        "Sofia C", "Luisa", "Kiana", "Lena", "Sofia M", "Amelia", "Sofia A", "Catarina", "Maria"];
    studentDisplayed = [false, false, false, false, false, false, false, false,
        false, false, false, false, false,
        false, false, false, false, false, false, false, false, false, false, false,];
    count = studentNames.length;
    document.getElementById("button").value = count;
}

function setNames() {
    do {
        var randomNumber = Math.floor(Math.random() * studentNames.length);
    } while (studentDisplayed[randomNumber] == true);
    studentDisplayed[randomNumber] = true;
    document.getElementById("test").innerHTML = studentNames[randomNumber];
    count--;
    document.getElementById("button").value = count;
    console.log(studentDisplayed)
    console.log(studentNames[randomNumber])
    console.log(count)
    if (count == 0) {
        generateData(event);
        return;
    }
}