function Yes() {
    // Hide both containers
    document.getElementById("intro").style.display = "none";
    document.getElementById("no-container").style.display = "none";

    // Display the "yes-container"
    document.getElementById("yes-container").style.display = "block";
}

function No() {
    // Hide the "intro" container
    document.getElementById("intro").style.display = "none";

    // Display the "no-container"
    document.getElementById("no-container").style.display = "block";
}

function secYes() {
    // Hide both containers
    document.getElementById("sec-no-container").style.display = "block";
    document.getElementById("no-container").style.display = "none";

    // Display the sec no-container 
    document.getElementById("yes-container").style.display = "none";
}

function lastNo() {
    // Hide all containers
    // document.getElementById("intro").style.display = "none";
    document.getElementById("no-container").style.display = "none";
    document.getElementById("yes-container").style.display = "none";

    document.getElementById("sec-no-container").style.display = "block";
}