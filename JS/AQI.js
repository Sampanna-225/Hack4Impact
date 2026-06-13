const mapDataPoints = [
    { name: "Bharatpur", lat: 27.6833, lng: 84.4333, aqi: 110, status: "Unhealthy for Sensitive Groups" },
    { name: "Patan (Lalitpur)", lat: 27.6667, lng: 85.3167, aqi: 75, status: "Moderate" },
    { name: "Birendranagar", lat: 28.6019, lng: 81.6339, aqi: 73, status: "Moderate" },
    { name: "Kathmandu", lat: 27.7172, lng: 85.3240, aqi: 70, status: "Moderate" },
    { name: "Siddharthanagar", lat: 27.5000, lng: 83.4500, aqi: 68, status: "Moderate" },
    { name: "Hetauda", lat: 27.4270, lng: 85.0309, aqi: 67, status: "Moderate" },
    { name: "Changunarayan", lat: 27.7112, lng: 85.4281, aqi: 66, status: "Moderate" },
    { name: "Bhaktapur", lat: 27.6710, lng: 85.4298, aqi: 63, status: "Moderate" },
    { name: "Kirtipur", lat: 27.6796, lng: 85.2754, aqi: 63, status: "Moderate" },
    { name: "Pokhara", lat: 28.2096, lng: 83.9856, aqi: 63, status: "Moderate" },
    { name: "Madhyapur Thimi", lat: 27.6750, lng: 85.3761, aqi: 60, status: "Moderate" }
];

// Updated helper function matching CSS class colors
function getAqiColor(aqi) {
    if (aqi <= 50) return "#1F1147";   // Good
    if (aqi <= 100) return "#3A1753";  // Moderate
    if (aqi <= 150) return "#5F1D59";  // Unhealthy for Sensitive
    if (aqi <= 200) return "#872756";  // Unhealthy
    return "#AB2E4E";                  // Hazardous
}

function initPollutionHeatMap() {
    const map = L.map('pollutionMap').setView([28.15, 84.30], 7);

    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; OpenStreetMap &copy; CARTO'
    }).addTo(map);

    mapDataPoints.forEach(point => {
        const circleMarker = L.circleMarker([point.lat, point.lng], {
            radius: 14 + (point.aqi / 15),
            fillColor: getAqiColor(point.aqi),
            color: '#ffffff',
            weight: 2,
            fillOpacity: 0.75
        }).addTo(map);

        // Popup text set to white as all background colors are dark
        const popupContent = `
            <div style="font-family:sans-serif; padding:0.2rem;">
                <h4 style="margin:0 0 0.4rem 0; font-size:1.1rem; color:#0f172a;">${point.name}</h4>
                <div style="background:${getAqiColor(point.aqi)}; display:inline-block; padding:0.2rem 0.6rem; border-radius:4px; font-weight:bold; color:white;">
                    AQI ${point.aqi}
                </div>
                <p style="margin:0.5rem 0 0 0; font-size:0.8rem; color:#64748b;"><strong>Air Status:</strong> ${point.status}</p>
            </div>
        `;
        circleMarker.bindPopup(popupContent);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initPollutionHeatMap();
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
            this.style.background = 'linear-gradient(90deg, #e40c0c, #e82214, #ff0000, #0015ff)';
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