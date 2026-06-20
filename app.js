// Floating gold particles
for(let i=0;i<25;i++){

const p=document.createElement("span");

p.style.position="absolute";
p.style.width="4px";
p.style.height="4px";
p.style.background="gold";
p.style.borderRadius="50%";
p.style.opacity=Math.random();

p.style.left=Math.random()*100+"%";
p.style.top=Math.random()*100+"%";

p.style.animation="floatUp "+(5+Math.random()*10)+"s linear infinite";

document.body.appendChild(p);

}