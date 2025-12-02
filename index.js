
const canvas = document.getElementById("canvas")
let c = canvas.getContext("2d")
let img = new Image()
let img2 = new Image()
let img3 = new Image()
img.src = "atomo.png"
img2.src = "atomo2.png"
img3.src = "atomo3.png"
let botaomais = new Image()
botaomais.src = "mais.png"
let botaomenos = new Image()
botaomenos.src = "menos.png"
let quantidade = 10
au = 0
au3 = 1
au4 = 0
let pres = 1

let atomos = []
let atomos2 = []
let atomos3 = []
let atomo = {
    x:0,
    y:0,


    
}
let atomo2 = {
    x:0,
    y:0,

    
    
}
let atomo3 = {
    x:0,
    y:0,

    
    
}
let part = prompt("Escolha a Quantidade de Particulas")
au2 = 0

while(au2 < part){
    atomos[au2] = Object.create(atomo);
    atomos[au2].x = Math.floor(Math.random() * 700);
    atomos[au2].y = Math.floor(Math.random() * 600);
    au2 += 1
}
au2 = 0
while(au2 < part){
    atomos2[au2] = Object.create(atomo2);
    atomos2[au2].x = Math.floor(Math.random() * 700);
    atomos2[au2].y = Math.floor(Math.random() * 600);
    au2 += 1
}

function loop(){
    c.fillStyle = "black"
    c.clearRect(0,0,1000,1000)
    c.fillRect(0,0,1000,1000)
    au = 0
    while(au < atomos.length){
        
        c.drawImage(img,atomos[au].x,atomos[au].y,64,64)
        atomos[au].x += Math.floor(Math.random() * 5)*au3
        atomos[au].y += Math.floor(Math.random() * 5)*au3
      
        au++
    
    }
    au = 0
    while(au < atomos2.length){
        
        c.drawImage(img2,atomos2[au].x,atomos2[au].y,64,64)
        atomos2[au].x += Math.floor(Math.random() * 5)*au3
        atomos2[au].y += Math.floor(Math.random() * 5)*au3
      
        au++
    
    }
    au = 0
    while(au < atomos3.length){
        
        c.drawImage(img3,atomos3[au].x,atomos3[au].y,64,64)
        atomos3[au].x += Math.floor(Math.random() * 5)*au3
        atomos3[au].y += Math.floor(Math.random() * 5)*au3
      
        au++
    
    }
    au3 = au3*-1
    c.fillStyle = "rgba(134, 134, 134, 1)"
    c.fillRect(0,700,1000,1000)
     c.fillStyle = "rgb(61, 61, 61)"
    c.fillRect(0,880,1000,1000)
    c.drawImage(botaomais,50,700,64,64)
     c.drawImage(botaomenos,170,700,64,64)
     c.fillStyle = "rgba(0, 0, 0, 1)"
     c.font = "45px serif";
     c.fillText("x"+pres,110,750)
     c.fillStyle = "rgba(24, 24, 24, 1)"
     c.fillRect(35,780,210,30)
     c.fillStyle = "rgba(197, 45, 45, 1)"
     c.fillRect(35,785,(pres*200)/part*2,20)



}
setInterval(loop,100)

function pressao(){
     atomos.pop()
     atomos2.pop()
     atomos3[au4] = Object.create(atomo2);
    atomos3[au4].x = Math.floor(Math.random() * 700);
    atomos3[au4].y = Math.floor(Math.random() * 600);
    au4++
    au2 = atomos.length

}
function pressao2(){
     atomos3.pop()
     atomos[au2] = Object.create(atomo);
    atomos[au2].x = Math.floor(Math.random() * 700);
    atomos[au2].y = Math.floor(Math.random() * 600);
    atomos2[au2] = Object.create(atomo2);
    atomos2[au2].x = Math.floor(Math.random() * 700);
    atomos2[au2].y = Math.floor(Math.random() * 600);
    au2 += 1
    au4 = atomos3.length
}
canvas.addEventListener("click",function(){
    if(event.offsetX > 50 && event.offsetX < 50+64 && event.offsetY > 700 && event.offsetY < 700+64 && pres < part/2+1){
        if(pres < part/2+1){
            pressao()
            pressao()
        }
        pres+=1
    }
    if(event.offsetX > 170 && event.offsetX < 170+64 && event.offsetY > 700 && event.offsetY < 700+64 && pres > 1){
        pressao2()
        pressao2()
        pres-=1
    }
   
})


