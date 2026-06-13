const buttons = document.querySelectorAll('.nav-btn');
function Button_hover(){
    buttons.forEach(button => {
            button.style.background = 'linear-gradient(90deg, #b10808, #e02c2c, #9d00ff, #1093da)';
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
            this.style.background = 'linear-gradient(90deg, #9a0a0a, #e02c2c, #9d00ff, #1093da)';
            this.style.backgroundPosition = '0% 0%';
            this.style.backgroundSize = '300% 100%';
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        };
    });
}
Button_hover()

// Change classes
function switchCampaign(event, campaignId) {
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => btn.classList.remove('active'));

    event.currentTarget.classList.add('active');
    
    const categoryInput = document.getElementById('in-category');
    if (categoryInput) {
        categoryInput.value = campaignId;
        console.log(`Switched active database category to: ${campaignId}`);
    }

    // 🎨 Dynamic Form Background Color Change
    const formElement = document.getElementById('Inputing');
    if (formElement) {
        // Map your tab IDs to the exact background colors you want
        const colorMap = {
            'air': '#ed26c9',     
            'waste': '#b83030',   
            'traffic': '#7f1096', 
            'bagmati': '#36bd1e'  
        };

        // Apply the color based on the active tab (fallback to slate if not found)
        formElement.style.backgroundColor = colorMap[campaignId] || '#e2e8f0';
        
        // Optional: Smooth out the color change with a transition animation
        formElement.style.transition = 'background-color 0.4s ease';
    }
}

//To get the data from the input and send a json payload.

async function input(event){
    event.preventDefault();
    
    const title = document.getElementById('in-title').value;
    const locat = document.getElementById('in-loca').value;
    const institution = document.getElementById('in-comp').value;
    const description = document.getElementById('in-des').value;
    const link = document.getElementById('in-link').value;
    const category = document.getElementById('in-category').value; // ADDED
    
    if(!title || !locat || !institution || !description || !link){
        alert('Please fill in all fields');
        return;
    }
    
    const campaign_payload = {
        t : title,
        l : locat,
        i : institution,
        d : description,
        li : link,
        c : category 
    };
    
    try{
        const response = await fetch('http://127.0.0.1:8000/api/campaign',{
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(campaign_payload)
        });
        
        if(!response.ok){
            throw new Error(`HTTP Error Status: ${response.status}`);
        }
        
        document.getElementById('Inputing').reset();
        // Reset hidden category default back to whatever tab is visually active
        document.getElementById('in-category').value = 'air'; 
        
        alert('Campaign submitted successfully!');
        broadcast_refresh();
    }
    catch (error){
        console.error("Transmission Failure:", error);
        alert('Failed to submit campaign. Please try again.');
    }
}

function broadcast_refresh(){
    try {
        const channel = new BroadcastChannel('campaign-update');
        channel.postMessage({ action: 'refresh' });
        channel.close();
    } catch (error) {
        console.warn('BroadcastChannel not supported:', error);
    }
}

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