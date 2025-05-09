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

    const tourPackages = document.getElementsByClassName("tour-package");
    console.log(tourPackages); 
}, false)

function createObserver(){
    let observer;
    const sectionHeading = document.getElementById("change-heading-color");
    const options = {
        root: null,
        rootMargin: "0px",
        threshold: [0.09]
    }
    observer = new IntersectionObserver((entries)=>{
        entries.forEach((entry)=>{
            if (entry.isIntersecting){
                entry.target.style.backgroundColor = "#11212D";
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

