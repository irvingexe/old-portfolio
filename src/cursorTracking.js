let cursor;
let dot;
let lastX = 0;
let lastY = 0;
let timeout;
let deformation = false;
let dirX = false;
let dirY = false;
let rotationDir = false;
let rotation = 0;
let lastRotation = 0;

const cursorTracking = (e) => {
  cursor = document.getElementById("cursor");
  dot = document.querySelector("#cursor :first-child");

  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";

  /*
  clearTimeout(timeout);

  dirX = lastX < e.clientX;
  dirY = lastY < e.clientY;
  rotation = (Math.atan2(e.clientY - lastY, e.clientX - lastX) * 180) / Math.PI;
  //rotation = rotation >= 0 ? rotation : rotation + 360;
  //lastRotation = lastRotation >= 0 ? lastRotation : lastRotation + 360;
  rotationDir = rotation - lastRotation < 180;
  rotation = rotationDir ? rotation : rotation - 360;

  //(Math.atan2(e.clientY - lastY, e.clientX - lastX) * 180) / Math.PI +
  if (Math.abs(e.clientY - lastY) > 15 || Math.abs(e.clientX - lastX) > 15) {
    dot.style.width = "1rem";
    dot.style.height = ".6rem";
  }
  dot.style.transform = "rotate(" + rotation + "deg)";

  lastX = e.clientX;
  lastY = e.clientY;
  lastRotation = rotation;
  timeout = setTimeout(() => {
    dot.style.width = ".5rem";
    dot.style.height = ".5rem";
  }, 30);
  */
};

export default cursorTracking;
