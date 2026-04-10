function areaRectangle(length, breadth) {
    return length * breadth;
}

let length = 5;
let breadth = 10;

let area = areaRectangle(length, breadth);

document.getElementById("output").innerText = "Area of rectangle: " + area;