
var num = 10, flt = 10.5, str = "Hello", bool = true;
document.write("Num: " + num + ", Float: " + flt + ", String: " + str + ", Bool: " + bool + "<br><br>");

var marks = 75;
if (marks >= 80) { document.write("Distinction<br>"); }
else if (marks >= 60) { document.write("First Division<br>"); }
else if (marks >= 50) { document.write("Second Division<br>"); }
else if (marks >= 40) { document.write("Third Division<br>"); }
else { document.write("Fail<br>"); }

for (var i = 1; i <= 4; i++) {
    document.write("<img src='" + i + ".jpg'>");
}
document.write("<br>");

for (var i = 1; i <= 10; i++) {
    document.write("5 * " + i + " = " + (5 * i) + "<br>");
}

document.write("<table><tr><th>S.N.</th><th>Name</th><th>Image</th></tr>");
for (var i = 1; i <= 4; i++) {
    document.write("<tr><td>" + i + "</td><td>Name " + i + "</td><td>" + i + ".jpg</td></tr>");
}
document.write("</table><br>");

var myColor = ["Red", "Green", "White", "Black"];
document.write(myColor.toString() + "<br>");
document.write(myColor.join() + "<br>");
document.write(myColor.join('+') + "<br><br>");

var arr = [1, 2, 3, 4, 5, 6];
var s = 0, p = 1;
for (var i = 0; i < arr.length; i++) {
    s += arr[i];
    p *= arr[i];
}
document.write("Sum: " + s + " Product: " + p + "<br><br>");

function area(l, b) { return l * b; }
document.write("Area: " + area(10, 5) + "<br>");

function exercise2() {
    var name = prompt("Your Name:");
    var id = prompt("Student Id:");
    alert(name + " " + id);
}

function exercise4() {
    var n = parseInt(prompt("Enter Day Number (1-7):"));
    switch(n) {
        case 1: alert("Sunday"); break;
        case 2: alert("Monday"); break;
        case 3: alert("Tuesday"); break;
        case 4: alert("Wednesday"); break;
        case 5: alert("Thursday"); break;
        case 6: alert("Friday"); break;
        case 7: alert("Saturday"); break;
        default: alert("Invalid");
    }
}

var x = 0, array = [];
function add_element_to_array() {
    array[x] = document.getElementById("text1").value;
    alert("Element: " + array[x] + " Added at index " + x);
    x++;
    document.getElementById("text1").value = "";
}
function display_array() {
    var e = "<hr/>";
    for (var y = 0; y < array.length; y++) {
        e += "Element " + y + " = " + array[y] + "<br/>";
    }
    document.getElementById("Result").innerHTML = e;
}