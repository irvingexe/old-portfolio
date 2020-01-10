let cursor;
let dot;
let lastX = 0;
let lastY = 0;
let timeout;
let deformation = false;

cursorTracking = (e) => {
    clearTimeout(timeout);
    cursor = document.getElementById("cursor");
    deformation = (document.getElementsByClassName("cursor-default")[0])? true :false;
    dot = document.querySelector("#cursor :first-child");

    cursor.style.left = e.clientX+"px";
    cursor.style.top = e.clientY+"px";

    dot.style.transform = (Math.abs((e.clientY-lastY)+(e.clientX-lastX))>4)?
        "rotate("+(deformation? Math.atan2((e.clientY-lastY), (e.clientX-lastX))*180/Math.PI :0) 
            +"deg) rotateX("+(deformation? 60 :0)+"deg) scale("+(deformation? 1.5 :1)+")"
        :"none"

    lastX = e.clientX;
    lastY = e.clientY;
    timeout = setTimeout(function(){dot.style.transform = "none";}, 50);
}
