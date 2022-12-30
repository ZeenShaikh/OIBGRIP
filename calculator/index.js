function clearScreen() {
        document.getElementById("output").value = "";
    }
function backScreen() {
    document.getElementById("output").value=document.getElementById("output").value.slice(0, -1);
}
function display(value) {
        document.getElementById("output").value += value;
}
function calculate() {
        var p = document.getElementById("output").value;
        var q = eval(p);
        document.getElementById("output").value = q;
    }

