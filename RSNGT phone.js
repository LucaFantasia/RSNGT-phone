var studentNames;
var studentDisplay;
var randomNumber;
var count;
var randomSampling = document.getElementById("randomSampling");
var year10;
var year09;
var countDisplay;
document.getElementById("year10").addEventListener("click", function() {
    year10 = true;
    year09 = false;
    generateData();
    randomSampling.innerHTML = "Year10";
});
document.getElementById("year09").addEventListener("click", function() {
    year10 = false;
    year09 = true;
    generateData();
    randomSampling.innerHTML = "Year09";
});
function generateData() {
    if(year10 === true) {
        studentNames = ["Adriana", "Afonso", "Allan", "Carolina", "Cecilia", "Dinis", "Holly", "JJ",
            "JM", "Laura", "Luca", "Luna", "Maria", "Miguel", "Myro", "Sandro",
            "Sebastian", "Sofia F", "Sofia G", "Tian", "Tilly"];
        studentDisplayed = [false, false, false, false, false, false, false, false, false, false,
            false, false, false, false, false, false, false, false, false, false, false];
        count = studentNames.length;
    } else if(year09 === true) {
        studentNames = ["Adam", "Amelia", "Anais", "Beatriz", "Bernado", "Catarina", "Daniela", "Elliot", "Emily", "Guilherme",
            "Kiana", "Lauren", "Lena", "Luca", "Luisa", "Maria", "Mariana", "Pedro", "Sam", "Sarah", "Sofia A", "Sofia C", "Sofia M",
            "Tarushi"];
        studentDisplayed = [false, false, false, false, false, false, false, false,
            false, false, false, false, false,
            false, false, false, false, false, false, false, false, false, false, false];
            count = studentNames.length;
    }
}
function openNav() {
    document.getElementById("sideNav").style.width = "250px";
}
function closeNav() {
    document.getElementById("sideNav").style.width = "0px";
}
function nameDisplay() {
    do {
        randomNumber = Math.floor(Math.random() * studentNames.length);
    } while (studentDisplayed[randomNumber] == true);
    studentDisplayed[randomNumber] = true;
    count--;
    randomSampling.innerHTML = studentNames[randomNumber] + "<sup>" + count + "</sup>";
    if(count == 0) {
        generateData();
        return;
    }
}
