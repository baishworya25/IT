for (let i = 1; i <= 4; i++) {
    let img = document.createElement("img");
    img.src = "images/" + i + ".jpg";
    img.alt = "Image " + i;
    img.width = 200;
    img.style.margin = "10px";


    document.getElementById("imageContainer").appendChild(img);
}