 ////////toogle start/////////
 function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active');
}
////////toogle end//////////
////////loader start///////
document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        document.querySelector(".loader-container").classList.add("hidden");
    }, 2500);
});
//////Loader end///////

   ////////Scroll animation start////////
document.addEventListener("DOMContentLoaded", () => {
    AOS.init({
        duration: 800, 
        easing: 'ease-in-out', 
        once: true, 
    });
});
////////Scroll animation end////////