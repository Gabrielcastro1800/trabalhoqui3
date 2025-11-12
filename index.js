const canvas = document.getElementById("canvas")
let c = canvas.getContext("2d")
let img = new Image()
let img2 = new Image()
img.src = "atomo.png"
img2.src = "atomo2.png"
au = 0
au3 = 1

let atomos = []
let atomo = {
    x:0,
    y:0,
    pressao:0,
    repelir:0,

    
}
let atomo2 = {
    x:0,
    y:0,
    pressao:0,
    repelir:0,
    
    
}
au2 = 0
while(au2 < 100){
    atomos[au2] = Object.create(atomo);
    atomos[au2].x = Math.floor(Math.random() * 400);
    atomos[au2].y = Math.floor(Math.random() * 400);
    au2 += 1
}


function loop(){
    c.fillStyle = "black"
    c.clearRect(0,0,1000,1000)
    c.fillRect(0,0,1000,1000)
    au = 0
    while(au < atomos.length){
        
        c.drawImage(img,atomos[au].x,atomos[au].y,32,32)
        atomos[au].x += Math.floor(Math.random() * 3)*au3
        atomos[au].y += Math.floor(Math.random() * 3)*au3
      
        au++
    
    } 
    au3 = au3*-1
}
setInterval(loop,100)