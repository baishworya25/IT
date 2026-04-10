var marks = parseFloat(prompt("Enter your marks (0-100):"))

if (marks >= 80 && marks <= 100) {
    alert("Distinction");
} else if (marks >= 60 && marks < 80) {
    alert("First Division");
} else if (marks >= 50 && marks < 60) {
    alert("Second Division");
} else if (marks >=40 && marks < 50) {
    alert("Third Division");
} else if (marks <40 && marks >= 0) {
    alert("Fail");
} else {
    alert("Invalid marks entered!");
}