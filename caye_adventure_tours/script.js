window.addEventListener("DOMContentLoaded", (event)=>{
    /* get the hamburger icon element and store it in a variable */
    const menuIcon = document.getElementById("hamburger-menu");
    menuIcon.addEventListener("click", showMenuPanel);
})

function showMenuPanel(){
    const verticalMenu = document.getElementById("vertical-menu");
    verticalMenu.innerHTML = `
    <a href="" class="link" style="color:white;">About</a>
    <a href="" class="link">Gallery</a>
    <a href="" class="link">Contact</a>
    `;
    if (verticalMenu.style.display === "block"){
        verticalMenu.style.display = "none";
    }else{
        verticalMenu.style.display = "block";
    }
}