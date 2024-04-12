function calculate() {
    var num1 = parsefloat(document.getElementById("num1").value);
    var num2 = parsefloat(document.getElementById("num2").value);
    var num3 = 1.72;
    if (document.getElementById("num1").value != 0) {
       document.getElementById("total").innertext = num1 * num2;
    }
    if (document.getElementById("num1").value == 0)  {
       document.getElementById("total").innertext = num3 * num2;
    }
    if (
        document.getElementById("num1").value == 0 &&
        document.getElementById("num2").value == 0
    ) {
        document.getElementById("total").innertext = "Please enter a value"
    }

}