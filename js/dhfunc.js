"use strict";


/* Exported toggleDiv */
function toggleDiv(id) {

    var d = document.getElementById(id);
    if(d.style.display === "none" || d.style.display === ""){
        d.style.display = "block";
    }
    else{
        d.style.display = "none";
    }
}

function toggleDivinline(id){
    var d = document.getElementById(id);
    if(d.style.display === "none"){
        d.style.display = "inline-block";
    }
    else{
        d.style.display = "none";
    }
}

function initInline(id){
    var o = document.getElementById(id);
    if(o.style.display === ""){
        o.style.display = "inline-block";
    }
}

function initNone(id){
    var o = document.getElementById(id);
    if(o.style.display === ""){
        o.style.display = "none";
    }
}

function initPadding(id){
    var o = document.getElementById(id);
    if(o.style.padding === ""){
        o.style.padding = "0px";
    }
}


/* Exported showTakeout */
function showMenu(name){
    if(name == "takeout"){
        initInline("triangle1");
        initNone("triangle1down");
        initPadding("takeoutheader"); /* Padding of 0 is a toggle for toggleDropdown*/
        toggleDivinline("triangle1");
        toggleDivinline("triangle1down");
        toggleDiv("dhmenuto");
      
    }
    else if(name == "dinein"){
        initInline("triangle2");
        initNone("triangle2down");
        initPadding("dineinheader");
        toggleDivinline("triangle2");
        toggleDivinline("triangle2down");
        toggleDiv("dhmenudi");
   
    }
    else if(name == "bbq"){
        initInline("triangle3");
        initNone("triangle3down");
        initPadding("bbqheader");
        toggleDivinline("triangle3");
        toggleDivinline("triangle3down");
        toggleDiv("dhmenub");
   
    }
    else if(name == "frozends"){
        initInline("triangle4");
        initNone("triangle4down");
        initPadding("frozenheader");
        toggleDivinline("triangle4");
        toggleDivinline("triangle4down");
        toggleDiv("dhmenuf");
     
    }
    else if(name == "partytray"){
        initInline("triangle5");
        initNone("triangle5down");
        initPadding("partytrayheader");
        toggleDivinline("triangle5");
        toggleDivinline("triangle5down");
        toggleDiv("dhmenupt");

    }
}


/* Nav Functions */
function nav(name){
    var x = window.innerWidth;
    var y = window.innerHeight;
    if(name == "home"){
        window.open("home.html", "_self", "width=200,height=200");
    }
    else if(name == "menu"){
        window.open("menu.html", "_self", "width=200,height=200");
    }
    else if(name == "about"){
        window.open("about.html", "_self", "width=200,height=200");
    }
    else if(name == "contact"){
        window.open("contact.html", "_self", "width=200,height=200");
    }
}

/* Home menu collage */
function hideallbutthis(id){
  /* Set all but the given id to a lower opacity.*/
  var numpic = 4;
  var obj, name;
  for(var i = 1; i <= numpic; i++){
     name = "cl" + i;
     if(name === id){
       continue;
     }
     obj = document.getElementById(name);
     obj.style.opacity = "1";
     obj.style.transition = "opacity 0.5s";
     obj.style.opacity = "0.5";


  }
}

function restorehide(){
  /* Set all image elements to opacity 1*/
  var numpic = 4;
  var obj, name;
  for(var i = 1; i <= numpic; i++){
     name = "cl" + i;
     obj = document.getElementById(name);
     obj.style.opacity = "1";
  }
}


/* Contact page google maps link*/
function viewmapover(){
  var o = document.getElementById("viewonmaps");
  o.style.backgroundColor = "white";
  o.style.mozTransition = "background 0.5s";
  o.style.transition = "background 0.5s";
  o.style.backgroundColor = "orange";

}

function viewmapout(){
  var o = document.getElementById("viewonmaps");
  o.style.backgroundColor = "white";
}
