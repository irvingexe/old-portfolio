let cursor;
let image;
let message;
let lastX = 0;
let lastY = 0;
let timeout;
let deformation = false;

cursorTracking = (e) => {
    clearTimeout(timeout);
    cursor = document.getElementById("cursor");
    deformation = (document.getElementsByClassName("cursor-default")[0])? true :false;
    image = document.querySelector("#cursor+.img");
    message = document.querySelector("#cursor+.img+.msg");

    cursor.style.left = e.clientX+"px";
    cursor.style.top = e.clientY+"px";
    image.style.left = (e.clientX+4)+"px";
    image.style.top = (e.clientY+4)+"px";
    message.style.left = (e.clientX+4)+"px";
    message.style.top = (e.clientY+4)+"px";

    cursor.style.transform = (Math.abs((e.clientY-lastY)+(e.clientX-lastX))>4)?
        "rotate("+(deformation? Math.atan2((e.clientY-lastY), (e.clientX-lastX))*180/Math.PI :0) 
            +"deg) rotateX("+(deformation? 60 :0)+"deg) scale("+(deformation? 1.5 :1)+")"
        :"none"

    lastX = e.clientX;
    lastY = e.clientY;
    timeout = setTimeout(function(){cursor.style.transform = "none";}, 50);
}
