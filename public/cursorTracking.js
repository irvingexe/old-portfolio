let cursor;
let lastX = 0;
let lastY = 0;
let timeout;

cursorTracking = (e) => {
    cursor = document.getElementById("cursor");
    cursor.style.left = e.clientX+"px";
    cursor.style.top = e.clientY+"px";
    if(Math.abs((e.clientY-lastY)+(e.clientX-lastX))>4){
        cursor.style.transform = "rotate("+(Math.atan2((e.clientY-lastY), (e.clientX-lastX))*180/Math.PI)+"deg) rotateX("+45+"deg)";
    }
    else{
        cursor.style.transform = "none";
    }
    lastX = e.clientX;
    lastY = e.clientY;
    clearTimeout(timeout);
    timeout = setTimeout(function(){cursor.style.transform = "none";}, 50);
    
}
