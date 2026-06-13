function toggleSdgDrawer(buttonElement) {
    const nodeContainer = buttonElement.parentElement;
    const targetDrawer = buttonElement.nextElementSibling;
    
    // Checks to see if this drawer pane is already actively expanded
    const isCurrentlyActive = nodeContainer.classList.contains('node-active');
    
    // First collapse all active panels to simulate a smooth interactive accordion
    document.querySelectorAll('.goal-node').forEach(node => {
        node.classList.remove('node-active');
        node.querySelector('.goal-panel-drawer').style.maxHeight = null;
    });

    // If the clicked panel wasn't active, expand it dynamically using calculated heights
    if (!isCurrentlyActive) {
        nodeContainer.classList.add('node-active');
        targetDrawer.style.maxHeight = targetDrawer.scrollHeight + "px";
    }
}

//Dropdown 
function initDropdownFreezeEngine() {
const dropdownWrapper = document.querySelector('.nav-item-dropdown');
const megaMenu = document.querySelector('.mega-menu');
const allNavButtons = document.querySelectorAll('.center-buttons .nav-btn');

if (!dropdownWrapper || !megaMenu) return;

// Freeze State Activation: When mouse enters the Services area
dropdownWrapper.addEventListener('mouseenter', () => {
    dropdownWrapper.classList.add('frozen');
});

megaMenu.addEventListener('mouseenter', () => {
    dropdownWrapper.classList.add('frozen');
});

// Unfreeze Trigger 1: If mouse moves over ANY OTHER navigation buttons
allNavButtons.forEach(button => {
    if (button.id !== 'b4') {
        button.addEventListener('mouseenter', () => {
            dropdownWrapper.classList.remove('frozen');
        });
    }
});

// Unfreeze Trigger 2: Perimeter Tracking Map
// Tracks mouse movement globally to check if the user dropped below the menu box
document.addEventListener('mousemove', (e) => {
    if (!dropdownWrapper.classList.contains('frozen')) return;

    const menuRect = megaMenu.getBoundingClientRect();
    
    // If the menu is visible and the mouse cursor's Y-coordinate drops 
    // more than 15px past the bottom of the mega-menu, close it instantly.
    if (menuRect.height > 0 && e.clientY > (menuRect.bottom + 15)) {
        dropdownWrapper.classList.remove('frozen');
    }
});

// Backup safety escape catch-all: clear if clicking anywhere outside the navigation link block
document.addEventListener('click', (e) => {
    if (!dropdownWrapper.contains(e.target)) {
        dropdownWrapper.classList.remove('frozen');
    }
});
}

// Fire up tracking on load execution
document.addEventListener('DOMContentLoaded', initDropdownFreezeEngine);
initDropdownFreezeEngine();

const buttons = document.querySelectorAll('.nav-btn');
function Button_hover(){
    buttons.forEach(button => {
            button.style.background = 'linear-gradient(90deg, #ae0606, #ce1717, #9d00ff, #1093da)';
            button.style.color = "#ffffff";
            button.style.border = "2px solid #e1e1e1";
            button.style.backgroundSize = '300% 100%';
            button.style.backgroundPosition = '0% 0%';
            button.style.transition = 'background-position 0.5s ease, transform 0.3s ease, box-shadow 0.3s ease';
    
        button.onmouseenter = function() {
            this.style.background = 'linear-gradient(90deg, #e40c0c, #e82214, #ff0000, #0b0f7b)';
            this.style.backgroundPosition = '100% 0';
            this.style.backgroundSize = '300% 100%';
            this.style.transform = 'translateY(-3px)';
            this.style.boxShadow =  '0 0 15px #9d00ff, 0 0 10px #5e2ce0';
        };

        button.onmouseleave = function() {
            this.style.background = 'linear-gradient(90deg,#ae0606, #ce1717, #9d00ff, #1093da)';
            this.style.backgroundPosition = '0% 0%';
            this.style.backgroundSize = '300% 100%';
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        };
    });
}
Button_hover()

//For Light on Screen:
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