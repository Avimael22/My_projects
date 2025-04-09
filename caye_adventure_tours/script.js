window.addEventListener("DOMContentLoaded", (event)=>{
    const menuIcon = document.getElementById("hamburger-menu");
    menuIcon.addEventListener("click", openNav);
})

function openNav() {
    document.getElementById("myNav").style.height = "100%";
  }
  
function closeNav() {
    document.getElementById("myNav").style.height = "0%";}

  let targetSection;

  window.addEventListener("load", (event)=>{
    targetSection = document.getElementById("change-color");

    createObserver();
}, false)

function createObserver(){
    let observer;
    const sectionHeading = document.getElementById("change-heading-color");
    const options = {
        root: null,
        rootMargin: "0px",
        threshold: [0.17]
    }
    observer = new IntersectionObserver((entries)=>{
        entries.forEach((entry)=>{
            if (entry.isIntersecting){
                entry.target.style.backgroundColor = "#08546C";
                sectionHeading.style.color = "#fff";
                entry.target.style.color = "#fff"
            }else{
                entry.target.style.backgroundColor = "#fff";
                entry.target.style.color = "#000";
                sectionHeading.style.color = "#08546C";
            }
        })
    },options)
    observer.observe(targetSection);

}

