const moonPath 
="M76.5 205C76.5 318.218 339.174 410 218.5 410C97.8258 410 0 318.218 0 205C0 91.7816 97.8258 0 218.5 0C339.174 0 76.5 91.7816 76.5 205Z"; 

const sunPath =
"M437 205C437 318.218 339.174 410 218.5 410C97.8258 410 0 318.218 0 205C0 91.7816 97.8258 0 218.5 0C339.174 0 437 91.7816 437 205Z";

const darkMode = document.querySelector("#darkMode");
let toggle = false;

//WE NEED TO CLICK  ON THE SUN

darkMode.addEventListener('click' , () => {
    //WE NEED TO USE ANIME.JS
    //HERE WE SET UP THE TIMELINE
    const timeline = anime.timeline({
        duration :750,
        easing : "easeOutExpo"
    });
    //ADD DIFFERENT ANIMATION TO THE TIMELINE
    timeline.add({
        targets: ".sun",
        d: [{value: moonPath}]
    })
});
