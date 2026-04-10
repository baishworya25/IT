let myColor = ["Red", "Green", "White", "Black"];

let output1 = myColor.toString();
document.getElementById("output1").innerText = output1;

let output2 = myColor.join();
document.getElementById("output2").innerText = output2;

let output3 = myColor.join('+');
document.getElementById("output3").innerText = output3;