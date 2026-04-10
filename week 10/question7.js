let table = document.getElementById("table");

for (let i = 1; i <= 4; i++) {
    let row = table.insertRow();

    row.className = (i % 2 === 0) ? "even" : "odd";

    let cell1 = row.insertCell(0);
    cell1.innerHTML = i;

    let cell2 = row.insertCell(1);
    cell2.innerHTML = "Name " + i;

    let cell3 = row.insertCell(2);
    cell3.innerHTML = "<img src='images/" + i + ".jpg' width='80' alt='Image " + i + "'>";
}