const canvas = document.getElementById('bgCanvas');
const ctx = canvas.getContext('2d');

let treeProgress = 0;
let leaves = []; // Keeps track of static/swaying leaves on branches
let fallingLeaves = []; // Keeps track of leaves that detached and are falling
const totalDepthLayers = 8; 
let isGrowthFinished = false;

let maxLeavesTarget = 150; 
let canopyEndpoints = []; 

// --- CLOUD IMPLEMENTATION START ---
class Cloud {
    constructor(side, index) {
        this.side = side;
        this.reset(true, index); 
    }

    reset(isInitial = false, index = 0) {
        this.baseWidth = Math.random() * 70 + 90; 
        this.baseHeight = this.baseWidth * 0.4;
        
        if (this.side === 'left') {
            this.speedX = Math.random() * 0.05 + 0.05; 
            if (isInitial) {
                this.x = -this.baseWidth - 30 - (index * (Math.random() * 50 + 40));
            } else {
                this.x = -this.baseWidth - 100;
            }
        } else {
            this.speedX = -(Math.random() * 0.05 + 0.05); 
            if (isInitial) {
                this.x = canvas.width + this.baseWidth + 30 + (index * (Math.random() * 50 + 40));
            } else {
                this.x = canvas.width + this.baseWidth + 100;
            }
        }

        this.y = Math.random() * (canvas.height * 0.4) + 40;
        this.speedY = (Math.random() - 0.5) * 0.01; 
        this.alpha = Math.random() * 0.13 + 0.09; 
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.side === 'left' && this.x > canvas.width + this.baseWidth + 100) {
            this.reset(false);
        } else if (this.side === 'right' && this.x < -this.baseWidth - 100) {
            this.reset(false);
        }
    }

    draw() {
        ctx.save();
        let isLightMode = document.body.style.color === "rgb(0, 0, 0)" || document.body.style.color === "#000000";
        ctx.fillStyle = isLightMode ? `rgba(175, 190, 205, ${this.alpha})` : `rgba(255, 255, 255, ${this.alpha})`;
        
        ctx.beginPath();
        let w = this.baseWidth;
        let h = this.baseHeight;
        
        ctx.arc(this.x, this.y, h * 0.9, 0, Math.PI * 2);                               
        ctx.arc(this.x - w * 0.35, this.y + h * 0.1, h * 0.65, 0, Math.PI * 2);        
        ctx.arc(this.x - w * 0.15, this.y - h * 0.4, h * 0.85, 0, Math.PI * 2);        
        ctx.arc(this.x + w * 0.2, this.y - h * 0.25, h * 0.8, 0, Math.PI * 2);         
        ctx.arc(this.x + w * 0.4, this.y + h * 0.15, h * 0.55, 0, Math.PI * 2);        
        
        ctx.rect(this.x - w * 0.4, this.y, w * 0.8, h * 0.6); 
        
        ctx.fill();
        ctx.restore();
    }
}

let clouds = [];
const numCloudsPerSide = 12; 

function initClouds() {
    clouds = [];
    for (let i = 0; i < numCloudsPerSide; i++) {
        clouds.push(new Cloud('left', i));
        clouds.push(new Cloud('right', i));
    }
}
initClouds();
// --- CLOUD IMPLEMENTATION END ---

// --- HILL IMPLEMENTATION START ---
class Hill {
    constructor(side) {
        this.side = side;
        this.currentSlideY = 0; 
        this.slideProgress = 0;
    }

    update() {
        if (isGrowthFinished && this.slideProgress < 1) {
            this.slideProgress += 0.008; 
            this.currentSlideY = 1 - Math.pow(1 - this.slideProgress, 3);
        }
    }

    draw() {
        if (this.currentSlideY === 0) return; 

        ctx.save();
        let isLightMode = document.body.style.color === "rgb(0, 0, 0)" || document.body.style.color === "#000000";
        
        // --- FIXED: Opacity increased noticeably for both dark and light modes ---
        ctx.fillStyle = isLightMode ? "rgba(155, 178, 162, 0.80)" : "rgba(10, 20, 15, 0.92)";
        
        ctx.beginPath();
        // --- FIXED: Hill height metric scaled up from 0.16 to 0.24 to make them taller ---
        let hillMaxHeight = canvas.height * 0.24;
        let activeHeight = hillMaxHeight * this.currentSlideY;

        if (this.side === 'left') {
            ctx.moveTo(0, canvas.height);
            ctx.quadraticCurveTo(canvas.width * 0.2, canvas.height - activeHeight, canvas.width * 0.55, canvas.height);
            ctx.lineTo(0, canvas.height);
        } else {
            ctx.moveTo(canvas.width, canvas.height);
            ctx.quadraticCurveTo(canvas.width * 0.8, canvas.height - (activeHeight * 1.1), canvas.width * 0.45, canvas.height);
            ctx.lineTo(canvas.width, canvas.height);
        }

        ctx.fill();
        ctx.restore();
    }
}

const leftHill = new Hill('left');
const rightHill = new Hill('right');
// --- HILL IMPLEMENTATION END ---

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initClouds(); 
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

function drawBranch(startX, startY, len, angle, branchWidth, currentDepth) {
    if (currentDepth > totalDepthLayers) return;

    let endX = startX + Math.cos(angle) * len * Math.min(1, Math.max(0, treeProgress - currentDepth));
    let endY = startY + Math.sin(angle) * len * Math.min(1, Math.max(0, treeProgress - currentDepth));

    if (treeProgress < currentDepth) return;

    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
    
    let r = 35 + currentDepth * 6;
    let g = 30 + currentDepth * 4;
    let b = 25 + currentDepth * 3;
    ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, 0.9)`;
    ctx.lineWidth = branchWidth;
    ctx.lineCap = 'round';
    ctx.stroke();

    if (currentDepth >= totalDepthLayers - 2) {
        canopyEndpoints.push({ x: endX, y: endY });
    }

    if (currentDepth === totalDepthLayers) return;

    let nextLen = len * 0.80;       
    let nextWidth = branchWidth * 0.68; 

    drawBranch(endX, endY, nextLen, angle - 0.38, nextWidth, currentDepth + 1);
    drawBranch(endX, endY, nextLen, angle + 0.38, nextWidth, currentDepth + 1);
}

function processLeafSpawning() {
    if (canopyEndpoints.length === 0) return;

    let spaceAvailable = maxLeavesTarget - leaves.length;
    if (spaceAvailable <= 0) return;

    let spawnChance = !isGrowthFinished ? 0.04 : 0.015;

    for (let i = canopyEndpoints.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [canopyEndpoints[i], canopyEndpoints[j]] = [canopyEndpoints[j], canopyEndpoints[i]];
    }

    const minDistanceBetweenLeaves = 8; 

    let attempts = Math.min(canopyEndpoints.length, 30); 
    for (let i = 0; i < attempts; i++) {
        if (leaves.length >= maxLeavesTarget) break;

        if (Math.random() < spawnChance) {
            let p = canopyEndpoints[i];

            let isCrowded = false;
            for (let j = 0; j < leaves.length; j++) {
                let dx = leaves[j].x - p.x;
                let dy = leaves[j].y - p.y;
                if (dx * dx + dy * dy < minDistanceBetweenLeaves * minDistanceBetweenLeaves) {
                    isCrowded = true;
                    break;
                }
            }

            if (!isCrowded) {
                leaves.push({
                    x: p.x,
                    y: p.y,
                    size: Math.random() * 4 + 2,
                    swayOffset: Math.random() * 100,
                    hue: Math.random() * 40 + 110, 
                    sat: Math.random() * 20 + 50,  
                    light: Math.random() * 15 + 40, 
                    alpha: 0.65                     
                });
            }
        }
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.globalCompositeOperation = 'source-over';

    // 1. Clouds
    for (let i = 0; i < clouds.length; i++) {
        clouds[i].update();
        clouds[i].draw();
    }

    // 2. Rising Hills (Taller & More Opaque)
    leftHill.update();
    leftHill.draw();
    rightHill.update();
    rightHill.draw();

    canopyEndpoints = [];

    let trunkX = canvas.width / 2;
    let trunkY = canvas.height + 4; 
    let initialLength = canvas.height * 0.20; 

    if (!isGrowthFinished) {
        treeProgress += 0.015; 
        if (treeProgress > totalDepthLayers + 2) {
            isGrowthFinished = true;
            treeProgress = totalDepthLayers + 2; 
        }
    } else {
        if (maxLeavesTarget < 380) {
            maxLeavesTarget += 0.15; 
        }
    }

    // 3. Main Tree structure
    drawBranch(trunkX, trunkY, initialLength, -Math.PI / 2, 14, 0);

    // 4. Main Tree leaves
    processLeafSpawning();

    // 5. Leaf shedding mechanics
    if (isGrowthFinished && leaves.length > 40 && Math.random() < 0.07) {
        let detachedLeaf = leaves.splice(Math.floor(Math.random() * leaves.length), 1)[0];
        if (detachedLeaf) {
            detachedLeaf.vx = (Math.random() - 0.5) * 1;
            detachedLeaf.vy = Math.random() * 1 + 0.5;
            fallingLeaves.push(detachedLeaf);
        }
    }

    for (let i = 0; i < leaves.length; i++) {
        let leaf = leaves[i];
        let sway = Math.sin(Date.now() * 0.0015 + leaf.swayOffset) * 3;

        ctx.beginPath();
        ctx.arc(leaf.x + sway, leaf.y, leaf.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${leaf.hue}, ${leaf.sat}%, ${leaf.light}%, ${leaf.alpha})`;
        ctx.fill();
    }

    const leafGravity = 0.05;
    for (let i = fallingLeaves.length - 1; i >= 0; i--) {
        let fl = fallingLeaves[i];
        fl.vy += leafGravity;
        fl.x += fl.vx + Math.sin(Date.now() * 0.005 + fl.swayOffset) * 0.5;
        fl.y += fl.vy;

        ctx.beginPath();
        ctx.arc(fl.x, fl.y, fl.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${fl.hue}, ${fl.sat}%, ${fl.light}%, ${fl.alpha})`;
        ctx.fill();

        if (fl.y > canvas.height) {
            fallingLeaves.splice(i, 1);
        }
    }

    requestAnimationFrame(animate);
}

animate();

//FOR navigation bar
const nav = document.querySelector('.light');
let fadeTimer; 
let appearTime;
let opav = 0
function FadeOut(){
    fadeTimer = setInterval(()=>{
    opav -= 0.06 //Slowly decrease opacity.
    if(opav <= 0){
        nav.style.setProperty('--opacity', '0');
        clearInterval(fadeTimer); //ends interval if opac is less or equal to 0.
    }
    else{
        nav.style.setProperty('--opacity',opav) //The updated opacity.
    }
    },50);
}
nav.addEventListener('mousemove', (e) => {
    //Clear the countdown timer if the mouse is still moving.
    clearInterval(fadeTimer);
    clearInterval(appearTime);

    const rect = nav.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    //takes the pixel loaction of the pointer and converts it into white.
    nav.style.setProperty('--x', `${x}px`);  
    nav.style.setProperty('--y', `${y}px`);

    appearTime = setInterval(()=>{ //Handles fade in
        if (opav >= 0.8){
            opav = 0.8
            nav.style.setProperty('--opacity', opav);
            clearInterval(appearTime);
            FadeOut();//FadeOut is created a function so it affects the motion only if the intensity is max.

        }
        else if(opav < 0.8){
            opav += 0.05
            nav.style.setProperty('--opacity',opav);
        }
    },10);   
    let oldx = x;
});

//FOR drawing in screen
function draw(){
const nav = document.querySelector('.light');

    nav.addEventListener('mousemove', (e) => {
        const rect = nav.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // 1. Create a brand new, independent glow element
        const particle = document.createElement('div');
        particle.classList.add('glow-particle');
        
        // 2. Pin it exactly where the cursor is right now
        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;
        
        // 3. Throw it inside the navbar layer
        nav.appendChild(particle);

        // 4. Force a tiny layout tick, then tell it to start fading out
        setTimeout(() => {
            particle.style.opacity = '0';
        }, 50);

        // 5. Clean up the memory! Delete the element completely after it finishes fading
        setTimeout(() => {
            particle.remove();
        }, 1550); // Matches the 1.5s transition time in your CSS plus the delay
    });
    }


// Toggle Class
const myCheckbox = document.querySelector('.switch input');
const myNav = document.querySelector('nav');
const buttons = document.querySelectorAll('.nav-btn');

function toggleBrightness() {
    const isDark = myCheckbox.checked;

    // These changes will now animate smoothly due to the CSS transition
    document.body.style.background = isDark 
        ? "linear-gradient(90deg, #2758dd, #10b3e4, #10b3e4, #2758dd)" 
        : "linear-gradient(90deg, #ffffff, #ffffff, #ffffff, #ffffff)";
    
    document.body.style.color = isDark ? "#ffffff" : "#000000";

    // ... rest of your button code ...
    buttons.forEach(button => {
        if (isDark) {
            button.style.background = 'linear-gradient(90deg, #1093da, #5e2ce0, #9d00ff, #1093da)';
            button.style.color = "#ffffff";
            button.style.border = "2px solid #e1e1e1";
        } else {
            button.style.background = 'linear-gradient(90deg, rgb(149, 236, 0), rgb(157, 255, 72), #13ffeb, rgb(141, 255, 124))';
            button.style.color = "#000000";
            button.style.border = "none";
        }
        button.style.backgroundSize = '300% 100%';
        button.style.backgroundPosition = '0% 0%';
        button.style.transition = 'background-position 0.5s ease, transform 0.3s ease; box-shadow 0.3s ease';

        button.onmouseenter = function() {
            this.style.backgroundPosition = '100% 0';
            this.style.transform = 'translateY(-3px)';
            this.style.boxShadow = isDark 
                ? '0 0 15px #9d00ff, 0 0 10px #5e2ce0' 
                : '0 0 15px #0048ff, 0 0 10px #37c6a9';
        };

        button.onmouseleave = function() {
            this.style.backgroundPosition = '0% 0%';
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        };
    });
}

myCheckbox.addEventListener('change', toggleBrightness);
toggleBrightness();  



document.addEventListener("DOMContentLoaded", () => {
    const mainNav = document.getElementById('Nav');
    const buttonContainer = document.querySelector('.center-buttons');

    if (mainNav) {
        mainNav.addEventListener('animationend', (e) => {});
    }

    if (buttonContainer) {
        buttonContainer.addEventListener('animationend', (e) => {});
    }
});