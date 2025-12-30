function add() {
    let a = Number(document.getElementById("n1").value);
    let b = Number(document.getElementById("n2").value);
    document.getElementById("result").innerHTML = a + b;
}


for (let i = 1; i <= 5; i++) {
    console.log(i);
}

function validateForm() {
    if (document.getElementById("name").value == "") {
        alert("Name required");
        return false;
    }
    return true;
}

function checkInput() {
    console.log("Typing...");
}
