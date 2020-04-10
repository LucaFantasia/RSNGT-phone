var studentNames;
var studentDisplay;
var randomNumber;
var count;
var randomSampling = document.getElementById("randomSampling");
var year10;
var year09;
var displayCell = document.getElementById("nameDisplay");
var correctArray;
var wrongArray;
var countDisplay;
var absentArray;
var absentCount;
var absentClicked = false;
var correctButton = document.getElementById("correctButton");
var wrongButton = document.getElementById("wrongButton");
var absentButton = document.getElementById("absentButton");
var table;
var resultsTable = document.getElementById("resultsTable");
document.getElementById("year10").addEventListener("click", function() {
    year10 = true;
    year09 = false;
    generateData();
    absentData();
    scoresData();
    randomSampling.innerHTML = "Year10";
});
document.getElementById("year09").addEventListener("click", function() {
    year10 = false;
    year09 = true;
    generateData();
    absentData();
    scoresData();
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
function scoresData() {
    console.log("scores generated");
    if(year10 == true) {
        correctArray = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
        wrongArray = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
        console.log(correctArray.length);
        console.log(wrongArray.length);
    } else if(year09 == true) {
        correctArray = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
        wrongArray = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
        console.log(correctArray.length);
        console.log(wrongArray.length);
    }
}
correctButton.addEventListener("click", function() {
    correctArray[randomNumber]++;
    displayCell.style.backgroundColor = "#00FF00";
    setTimeout(function() {
        displayCell.style.backgroundColor = "#FFFFFF";
    }, 100);
});
wrongButton.addEventListener("click", function() {
    wrongArray[randomNumber]++;
    displayCell.style.backgroundColor = "#FF0000";
    setTimeout(function() {
        displayCell.style.backgroundColor = "#FFFFFF";
    }, 100);
});
function generateTableResults() {
    table = "<table id='tableDisplay' class='resultasTable'>";
    table = table + "<tr>" + "<td width='75px' class='tableCells'>" + "<h1>Student</h1>" + "</td>" +
     "<td width='75px' class='tableCells'>" +
   "<h1>Correct</h1>" + "</td>" + "<td width='75px' class='tableCells'>" + "<h1>Wrong</h1>" + "</td>" + 
   "<td width='75px' class='tableCells'>" + 
   "<h1>Absent</h1>" +"</td>" + "</tr>";
    for(i = 0; i < studentNames.length; i++) {
        table = table + "<tr>";
        table = table + "<td width='75px' class='tableCells'>";
        table = table + studentNames[i];
        table = table + "</td>";
        table = table + "<td width='75px' class='tableCells'>";
        table = table + correctArray[i];
        table = table + "</td>";
        table = table + "<td width='75px' class='tableCells'>";
        table = table + wrongArray[i];
        table = table + "</td>";
        if(absentArray[i] == false) {
            table = table + "<td style='background-color:#00FF00;width:75px'></td>"
        } else if(absentArray[i] = true) {
            table = table + "<td style='background-color:#FF0000;width:75px'></td>"
        }
        table = table + "</tr>";
    }
    table = table + "</table>";
    resultsTable.innerHTML = table;
}
function absentData() {
    if(year10 == true) {
        absentArray = [false,false,false,false,false,false,false,false,false,false,false,false,
            false,false,false,false,false,false,false,false,false];
            absentCount = 0;
            absentClicked = true;

    } else if(year09 == true) {
            absentArray = [false,false,false,false,false,false,false,false,false,false,false,false,
            false,false,false,false,false,false,false,false,false,false,false,false];
            absentCount = 0;
            absentClicked = true;
    }
}
absentButton.addEventListener("click", function() {
    if(absentArray[randomNumber] == true) {
        alert("This student is already absent");
        console.log("This student is already absent");
    } else{
        absentArray[randomNumber] = true;
        absentCount++;
        absentClicked = true;
        randomSampling.style.color = "#FF0000";
        randomSampling.innerHTML = studentNames[randomNumber] + "(absent)" + "<sup>" + count + "</sup>";
        setTimeout(function() {
            randomSampling.style.color = "#000000";
        }, 100);

    }
});
function openNav() {
    document.getElementById("sideNav").style.width = "250px";
}
function closeNav() {
    document.getElementById("sideNav").style.width = "0px";
}
function nameDisplay() {
    do {
        randomNumber = Math.floor(Math.random() * studentNames.length);
    } while (studentDisplayed[randomNumber] == true || absentArray[randomNumber] == true);
    studentDisplayed[randomNumber] = true;
    count--;
    randomSampling.innerHTML = studentNames[randomNumber] + "<sup>" + count + "</sup>";
    if(count == 0) {
        generateData();
        if(absentClicked == true) {
            for(i = 0; i < absentCount; i++) {
                count--;
            }
        }
        return;
    }
}
