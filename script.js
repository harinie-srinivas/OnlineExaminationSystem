function displayQuestion() {
    document.getElementById("question").innerText =
        "What is HTML?";
}
function calculateResult() {
    let marks = 8;
    document.getElementById("result").innerText =
        "Your marks: " + marks;
}
function login() {
    let name = document.getElementById("student").value;
    if (name !== "") {
        alert("Welcome " + name);
    }
}