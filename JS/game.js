let playerStats = { currentXp: 350, maxXp: 1000, level: 1, walletBalance: 0 };
let activeTarget = null;

function updateHudUI() {
document.getElementById('playerLevel').textContent = playerStats.level;
document.getElementById('xpText').textContent = `${playerStats.currentXp}/${playerStats.maxXp}`;
document.getElementById('xpMeter').style.width = `${(playerStats.currentXp / playerStats.maxXp) * 100}%`;
document.getElementById('walletValue').textContent = `Rs. ${playerStats.walletBalance}`;
}
updateHudUI();

// Interactive Location Engine Trigger Function
function triggerLocationOverlay(locationText, coordinates) {
document.getElementById('locModalTitle').textContent = locationText;
document.getElementById('locModalCoords').textContent = coordinates;

// Generate a real dynamic external hyper-routing link to open google maps
document.getElementById('googleMapsLink').href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(coordinates)}`;

document.getElementById('locationModal').classList.add('show');
}

function dismissLocationModal() {
document.getElementById('locationModal').classList.remove('show');
}

// 1. User Upload Interface Workflow (Reporter Action)
function handleReportUpload(event) {
event.preventDefault();

const location = document.getElementById('repLoc').value;
const coordinates = document.getElementById('repCoords').value;
const description = document.getElementById('repDesc').value;
const imgSrc = document.getElementById('repImg').value;

const id = Date.now();
const generatedXp = Math.floor(Math.random() * 200) + 250;
const generatedCash = Math.floor(Math.random() * 3) * 100 + 300;

const newBountyCard = document.createElement('div');
newBountyCard.className = 'bounty-card';
newBountyCard.id = `bounty-${id}`;

// Escaping string literals dynamically for click handlers
newBountyCard.innerHTML = `
    <div class="bounty-img-box" onclick="triggerLocationOverlay('${location.replace(/'/g, "\\'")}', '${coordinates.replace(/'/g, "\\'")}')">
        <span class="reward-tag">+${generatedXp} XP • Rs. ${generatedCash} Val</span>
        <img src="${imgSrc}" alt="Uploaded waste issue">
        <div class="location-overlay-hint">📍 Click to View Location Coordinates</div>
    </div>
    <div class="bounty-body">
        <div class="bounty-loc">📍 ${location}</div>
        <h4 class="bounty-title">Reported Waste Problem</h4>
        <p class="bounty-desc">${description}</p>
        <button class="claim-btn" onclick="engageChallenge(${id}, 'Reported Waste Problem', ${generatedXp})">Accept Cleanup Challenge</button>
    </div>
`;

const feed = document.getElementById('feedWrapper');
feed.insertBefore(newBountyCard, feed.firstChild);

document.getElementById('reportForm').reset();
alert("Bounty Successfully Uploaded! Your location parameters are active.");
}

// 2. Accept Challenge Workflow
function engageChallenge(id, title, xpValue) {
activeTarget = { id: id, title: title, xp: xpValue };
document.getElementById('activeTargetTitle').textContent = `${title} (+${xpValue} XP)`;
document.getElementById('cleanerPanel').style.display = 'block';
document.getElementById('cleanerPanel').scrollIntoView({ behavior: 'smooth' });
}

// 3. Complete Task / Verification
function handleCleanupResolution(event) {
event.preventDefault();
if (!activeTarget) return;

playerStats.currentXp += activeTarget.xp;
playerStats.walletBalance += 500; 

alert(`Proof uploaded! Cleaner wallet updated.`);

if (playerStats.currentXp >= playerStats.maxXp) {
    playerStats.level += 1;
    playerStats.currentXp = playerStats.currentXp - playerStats.maxXp;
    playerStats.walletBalance += 1000; 
    setTimeout(() => { triggerLevelUpModal(); }, 400);
}

const targetedCard = document.getElementById(`bounty-${activeTarget.id}`);
if (targetedCard) targetedCard.remove();

document.getElementById('clearForm').reset();
document.getElementById('cleanerPanel').style.display = 'none';
activeTarget = null;
updateHudUI();
}

function triggerLevelUpModal() {
document.getElementById('promoCode').textContent = `KMC-WALLET-N${Math.floor(Math.random() * 9000 + 1000)}`;
document.getElementById('rewardModal').classList.add('show');
}

function dismissRewardModal() {
document.getElementById('rewardModal').classList.remove('show');
}


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


//Hover button function,
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

function initDropdownFreezeEngine() {
    // 1. Grab ALL dropdown containers on the page
    const allDropdowns = document.querySelectorAll('.nav-item-dropdown');
    const allNavButtons = document.querySelectorAll('.center-buttons .nav-btn');

    if (allDropdowns.length === 0) return;

    allDropdowns.forEach(dropdownWrapper => {
        const megaMenu = dropdownWrapper.querySelector('.mega-menu');
        if (!megaMenu) return;

        // Freeze State Activation: When mouse enters a specific dropdown wrapper area
        dropdownWrapper.addEventListener('mouseenter', () => {
            // First clear out any other open dropdowns to avoid overlap
            allDropdowns.forEach(d => d.classList.remove('frozen'));
            dropdownWrapper.classList.add('frozen');
        });

        megaMenu.addEventListener('mouseenter', () => {
            dropdownWrapper.classList.add('frozen');
        });

        // Unfreeze Trigger 1: If mouse moves over standard navigation buttons that AREN'T inside a dropdown container
        allNavButtons.forEach(button => {
            // Check if this button is nested inside a dropdown element
            const parentDropdown = button.closest('.nav-item-dropdown');
            
            // If it's a completely standalone button (like Home, Cities, Campaigns, News)
            if (!parentDropdown) {
                button.addEventListener('mouseenter', () => {
                    dropdownWrapper.classList.remove('frozen');
                });
            }
        });

        // Unfreeze Trigger 2: Perimeter Boundary Tracking Map
        document.addEventListener('mousemove', (e) => {
            if (!dropdownWrapper.classList.contains('frozen')) return;

            const menuRect = megaMenu.getBoundingClientRect();
            
            // If the menu is visible and the cursor's Y-coordinate drops 15px past the bottom boundary lines
            if (menuRect.height > 0 && e.clientY > (menuRect.bottom + 15)) {
                dropdownWrapper.classList.remove('frozen');
            }
        });
    });

    // Backup safety escape catch-all: clear everything if clicking anywhere completely outside the navigation links
    document.addEventListener('click', (e) => {
        allDropdowns.forEach(dropdownWrapper => {
            if (!dropdownWrapper.contains(e.target)) {
                dropdownWrapper.classList.remove('frozen');
            }
        });
    });
}

// Fire up tracking on load execution
document.addEventListener('DOMContentLoaded', initDropdownFreezeEngine);



function display(c) {
    const userWallet = c.find(item => item.cid === '1');

    if (userWallet) {
        document.getElementById('walletValue').innerHTML = `Rs ${userWallet.credit}`;
    } else {
        document.getElementById('walletValue').innerHTML = `Rs 0`;
    }
}


async function receiving_packets() {
    try {
        const response = await fetch('http://127.0.0.1:8000/api/credits');

        if (!response.ok) {
            throw new Error(`HTTPS error! Status: ${response.status}`);
        }
        const credit = await response.json();
        display(credit);
    }
    catch(error) {
        console.error("Failed to receive payload: ", error);
    }
}

function listen_for_refresh() {
    try {
        // FIXED: Changed 'campaign-update' to 'info-update' to align with User.html
        const channel = new BroadcastChannel('info-update');
        channel.onmessage = (event) => {
            if (event.data.action === 'refresh') {
                console.log('User wallet update detected, updating HUD...');
                receiving_packets(); // FIXED: corrected spelling
            }
        };
    } catch (error) {
        console.warn('BroadcastChannel not supported:', error);
        // Fallback: refresh every 10 seconds if BroadcastChannel is blocked
        setInterval(receiving_packets, 10000); // FIXED: corrected spelling from 'reseiving' to 'receiving'
    }
}

document.addEventListener('DOMContentLoaded', () => {
    receiving_packets();
});