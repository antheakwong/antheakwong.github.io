console.log(window.location.pathname);
if (window.location.pathname !== "/" && window.location.pathname !== "") {
    document.getElementById("title-nav").style.opacity = 1;
    document.getElementById("navbar-bg").style.opacity = 1;
}