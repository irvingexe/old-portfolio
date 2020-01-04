let cursor;
let lastX = 0;
let lastY = 0;
let timeout;
let hover = false;

cursorTracking = (e) => {
    clearTimeout(timeout);
    cursor = document.getElementById("cursor");
    cursor.style.left = e.clientX+"px";
    cursor.style.top = e.clientY+"px";
    hover = (document.getElementsByClassName("hover")[0])? true :false;

    console.log(document.getElementsByClassName("hover"))

    cursor.style.transform = (Math.abs((e.clientY-lastY)+(e.clientX-lastX))>4)?
        "rotate("+(hover? 0 :Math.atan2((e.clientY-lastY), (e.clientX-lastX))*180/Math.PI)
            +"deg) rotateX("+(hover? 0 :60)+"deg) scale("+(hover? 1 :1.5)+")"
        :"none"

    lastX = e.clientX;
    lastY = e.clientY;
    timeout = setTimeout(function(){cursor.style.transform = "none";}, 50);
}
