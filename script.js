function draw() {
  const canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");

    ctx.fillRect(25, 25, 100, 100);
    ctx.clearRect(45, 45, 60, 60);
    ctx.strokeRect(50, 50, 50, 50);
  }
}

function drawcurve()
{
  const canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(0,28);
    ctx.bezierCurveTo(0,28,31,7,70,8);
    ctx.bezierCurveTo(109,9,313,99,425,90);
    ctx.bezierCurveTo(516,82.5,526,55,526,55);
}

draw();
drawcurve();
