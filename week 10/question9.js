let numbers = [1, 2, 3, 4, 5];

let sum = 0;
let product = 1;

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
    product *= numbers[i];
}

document.getElementById("sumOutput").innerText = "Sum: " + sum;
document.getElementById("productOutput").innerText = "Product: " + product;