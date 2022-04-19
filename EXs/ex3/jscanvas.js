function draw() {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
  
        //triangulo so com bordas
        ctx.beginPath();
        ctx.fillStyle = "white"
        ctx.moveTo(10, 10)
        ctx.lineTo(10, 70)
        ctx.lineTo(70, 10)
        ctx.closePath()
        ctx.stroke();

        //triangulo pintado
        ctx.beginPath()
        ctx.moveTo(140, 140)
        ctx.lineTo(140, 80)
        ctx.lineTo(80, 140)
        ctx.fill()

    
    }
  }