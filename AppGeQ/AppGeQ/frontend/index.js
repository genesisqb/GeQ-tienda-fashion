function menu() {
    const myMenu = document.getElementById("myLinks");
    if (myMenu.style.display === "block") {
        myMenu.style.display = "none";
    } else {
        myMenu.style.display = "block";
    }
}