window.onload = function() {
    addTabFocus(); // Call the function on page load
};

function upDate(previewPic) {
    var image = previewPic.src;
    document.getElementById("image").style.backgroundImage = "url('" + image + "')";
    var text = previewPic.alt;
    document.getElementById("image").innerHTML = text;
    console.log("Mouseover event triggered");
}

function unDo() {
    document.getElementById("image").style.backgroundImage = "url('" + null + "')";
    document.getElementById("image").innerHTML = "Hover over an image below to display here";
    console.log("Mouseleave event triggered");
}

function addTabFocus() {
    var previewImages = document.getElementsByClassName("preview");

    for (var i = 0; i < previewImages.length; i++) {
        previewImages[i].setAttribute("tabindex", i + 1);
    }

    console.log("Tabfocus attributes added");
}

function Tabfocus(){
    var previewImages = document.getElementsByClassName("preview");

    for (var i = 0; i < previewImages.length; i++) {
        previewImages[i].addEventListener("focus", function() {
            console.log("TabOver Event Triggered");
            upDate(this);
        });

        previewImages[i].addEventListener("blur", function() {
            unDo();
        });

    }
// Add onfocus and onblur events for each image

}