let name = prompt("What is your name?");
if(name === null){
    name = "Anonymous Wizard";

}else if(name.trim() === ""){
    name = "Nameless Wonder";
}else{
    name = name.trim();
}

const nameSpan = document.getElementById("studentName")
nameSpan.innerText = name;

function fixLucky(lucky){
    if (isNaN(lucky)) {
        return "You don't have a lucky number";

    } else {
        return lucky.toString()
    }
}

let luckyOutput = fixLucky(luckyNumber);

const luckyNumberSpan = document.getElementById("luckyNumber");
luckyNumberSpan.innerText = luckyOutput;


const facts = {name, luckyOutput, name, luckyNumberSpan, fixLucky};
const statusMessageSpan = document.getElementById("statusMessage");
statusMessageSpan.innerText = facts.toString();