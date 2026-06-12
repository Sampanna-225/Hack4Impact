//Loading animation.
document.addEventListener("DOMContentLoaded", () => {
    const mainNav = document.getElementById('Nav');
    const buttonContainer = document.querySelector('.center-buttons');

    if (mainNav) {
        mainNav.addEventListener('animationend', (e) => {});
    }

    if (buttonContainer) {
        buttonContainer.addEventListener('animationend', (e) => {});
    }
    
    // Listen for refresh broadcasts from admin page
    listen_for_refresh();
});

//Listen for campaign updates from other tabs/windows
function listen_for_refresh(){
    try {
        const channel = new BroadcastChannel('campaign-update');
        channel.onmessage = (event) => {
            if(event.data.action === 'refresh'){
                console.log('Campaign update detected, refreshing...');
                reseiving_packets();
            }
        };
    } catch (error) {
        console.warn('BroadcastChannel not supported:', error);
        // Fallback: refresh every 10 seconds if BroadcastChannel not available
        setInterval(reseiving_packets, 10000);
    }
}

//To switch between topics
function switchCampaign(event, campaignId) {
        // Hide all active content panels
        const panels = document.querySelectorAll('.campaign-panel');
        panels.forEach(panel => panel.classList.remove('active-panel'));

        // Remove active style classes from all interaction buttons
        const buttons = document.querySelectorAll('.tab-btn');
        buttons.forEach(btn => btn.classList.remove('active'));

        // Show selected panel and add active style to clicked button
        document.getElementById(campaignId).classList.add('active-panel');
        event.currentTarget.classList.add('active');
    }

//Hover button function,
const buttons = document.querySelectorAll('.nav-btn');
function Button_hover(){
    buttons.forEach(button => {
            button.style.background = 'linear-gradient(90deg, #c20f0f, #d11e1e, #9d00ff, #1093da)';
            button.style.color = "#ffffff";
            button.style.border = "2px solid #e1e1e1";
            button.style.backgroundSize = '300% 100%';
            button.style.backgroundPosition = '0% 0%';
            button.style.transition = 'background-position 0.5s ease, transform 0.3s ease, box-shadow 0.3s ease';
    
        button.onmouseenter = function() {
            this.style.background = 'linear-gradient(90deg, #f30c0c, #ed1000, #ff0000, #0015ff)';
            this.style.backgroundPosition = '100% 0';
            this.style.backgroundSize = '300% 100%';
            this.style.transform = 'translateY(-3px)';
            this.style.boxShadow =  '0 0 15px #9d00ff, 0 0 10px #5e2ce0';
        };

        button.onmouseleave = function() {
            this.style.background = 'linear-gradient(90deg, #c11111, #e02c2c, #9d00ff, #1093da)';
            this.style.backgroundPosition = '0% 0%';
            this.style.backgroundSize = '300% 100%';
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        };
    });
}
Button_hover()

//The backend campaign receiving end.

//For infrastructure: 
document.addEventListener("DOMContentLoaded", () => {
    const mainNav = document.getElementById('Nav');
    const buttonContainer = document.querySelector('.center-buttons');
    
    listen_for_refresh();
});

function listen_for_refresh(){
    try {
        const channel = new BroadcastChannel('campaign-update');
        channel.onmessage = (event) => {
            if(event.data.action === 'refresh'){
                console.log('Campaign update detected, refreshing...');
                receiving_packets(); // FIXED TYPO
            }
        };
    } catch (error) {
        console.warn('BroadcastChannel not supported:', error);
        setInterval(receiving_packets, 10000); // FIXED TYPO
    }
}

function switchCampaign(event, campaignId) {
    const panels = document.querySelectorAll('.campaign-panel');
    panels.forEach(panel => panel.classList.remove('active-panel'));

    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => btn.classList.remove('active'));

    document.getElementById(campaignId).classList.add('active-panel');
    event.currentTarget.classList.add('active');
}

// ... (Button_hover logic remains unchanged)

function render_campaign(campaignsArray) {
    // Clear out any previously generated dynamic cards so we don't duplicate them on refresh
    const oldDynamicCards = document.querySelectorAll('.dynamic-card');
    oldDynamicCards.forEach(card => card.remove());
    
    const types = ['card gov-card', 'card better-card'];
    
    campaignsArray.forEach(campaign => {
        // Find target grid based on the campaign's category (air, waste, traffic, bagmati)
        const targetGrid = document.getElementById(`${campaign.c}-grid`);
        
        if (!targetGrid) return; // Guard clause if category match fails

        const card = document.createElement('div');
        const randomIndex = Math.floor(Math.random() * types.length);
        
        // We give it a 'dynamic-card' flag so we can wipe and rebuild cleanly later
        card.className = `${types[randomIndex]} dynamic-card`; 

        card.innerHTML = `
            <h3>${campaign.t}</h3>
            <ul class="action-list">
                <li><b>Location: </b>${campaign.l}</li>
                <li><b>Institution: </b>${campaign.i}</li>
                <li>
                    <strong>Info: </strong>
                    ${campaign.d}
                </li>
                <br>
                <a href="${campaign.li}" target="_blank">
                    <button class="apply">Apply</button>
                </a>
            </ul>
        `;

        targetGrid.appendChild(card);
    });
}

// Renamed slightly for standard clean spelling
async function receiving_packets() {
    try {
        const response = await fetch('http://127.0.0.1:8000/api/campaign');

        if (!response.ok) {
            throw new Error(`HTTPS error! Status: ${response.status}`);
        }
        const campaign_data = await response.json();
        render_campaign(campaign_data);
    }
    catch(error) {
        console.error("Failed to receive payload: ", error);
    }
}

// Initial fetch on page load
receiving_packets();