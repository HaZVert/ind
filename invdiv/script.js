function navigateToPage(page) {
    window.location.href = page;
}

function hoverBox(boxId) {
    var box = document.getElementById(boxId);
    box.style.backgroundColor = "#2c3e50";
}

function unhoverBox(boxId) {
    var box = document.getElementById(boxId);
    box.style.backgroundColor = "#3498db";
}
