
/* ==========================
   BUTTON
   ========================== */

const button = document.getElementById("initiateButton");

button.addEventListener("click", () => {

    button.innerText = "Student Hub Online";

    button.style.backgroundColor = "cyan";
    button.style.color = "black";

});


/* ==========================
   DOT MATRIX
   ========================== */

const dotGrid = document.getElementById("dot-grid");

const dots = [];

const gap = 35;

function createGrid(){

    dotGrid.innerHTML = "";

    dots.length = 0;

    const cols = Math.ceil(window.innerWidth / gap);
    const rows = Math.ceil(window.innerHeight / gap);

    for(let row = 0; row < rows; row++){

        for(let col = 0; col < cols; col++){

            const dot = document.createElement("div");

            dot.classList.add("dot");

            const x = col * gap;
            const y = row * gap;

            dot.style.left = x + "px";
            dot.style.top = y + "px";

            dotGrid.appendChild(dot);

            dots.push({
                element:dot,
                x:x,
                y:y,
                offsetX:0,
                offsetY:0
            });
        }
    }
}

createGrid();

window.addEventListener("resize", createGrid);

let mouseX = -1000;
let mouseY = -1000;

document.addEventListener("mousemove",(e)=>{

    mouseX = e.clientX;
    mouseY = e.clientY;

});

function animate(){

    dots.forEach(dot=>{

        const dx = dot.x - mouseX;
        const dy = dot.y - mouseY;

        const distance = Math.sqrt(dx*dx + dy*dy);

        const radius = 140;

        if(distance < radius){

            const force =
                (radius - distance) / radius;

            const moveX =
                dx * force * 0.5;

            const moveY =
                dy * force * 0.5;

            dot.offsetX +=
                (moveX - dot.offsetX) * 0.12;

            dot.offsetY +=
                (moveY - dot.offsetY) * 0.12;

            dot.element.style.backgroundColor =
                "rgba(0,255,255,1)";

            dot.element.style.boxShadow =
                "0 0 12px cyan";
        }
        else{

            dot.offsetX +=
                (0 - dot.offsetX) * 0.08;

            dot.offsetY +=
                (0 - dot.offsetY) * 0.08;

            dot.element.style.backgroundColor =
                "rgba(0,255,255,0.2)";

            dot.element.style.boxShadow =
                "none";
        }

        dot.element.style.transform =
            `translate(${dot.offsetX}px, ${dot.offsetY}px)`;
    });

    requestAnimationFrame(animate);
}

animate();
```
