// Parsed Scraped Raw Parking Lot Data Stream mapped onto approximate coordinate grids across central Kathmandu
const scrapedParkingRegistry = [
    { id: 1, name: "Paid Parking Lot", type: "Parking lot", code: "P849+H9R", lat: 27.7065, lng: 85.3155, meta: "Closes 7 PM · Open Space Layout", review: "Standard paid open lot alignment within central sector." },
    { id: 2, name: "Kathmandu Mall Basement Pay Parking", type: "Parking lot", code: "P827+M7R", lat: 27.7015, lng: 85.3132, meta: "Closes 10 PM · Phone: 986-1585233", review: "When i parked here at 3:30pm during a week day, there was enough space." },
    { id: 3, name: "TMT Complex Bagbazar Parking", type: "Public parking space", code: "P849+JCF", lat: 27.7069, lng: 85.3168, meta: "Phone: 984-1929835 · Premium Rate", review: "All good ..cost is not good" },
    { id: 4, name: "Kathmandu Open Ground Space", type: "Parking lot", code: "P86C+4VF", lat: 27.7112, lng: 85.3195, meta: "Standard operating hours apply", review: "Accessible open dirt lot setup for quick drop-offs." },
    { id: 5, name: "Parking Building Kathmandu", type: "Parking garage", code: "P838+JW3", lat: 27.7038, lng: 85.3149, meta: "Multi-level structured garage facility", review: "Multi-tier indoor infrastructure protecting vehicles from heat and rain." },
    { id: 6, name: "Drip And Trip Parking", type: "Public parking space", code: "M8Q8+8H3", lat: 27.6885, lng: 85.3142, meta: "Closes 5 PM · Phone: 982-8037561", review: "Well managed service window at southern highway lines." },
    { id: 7, name: "Alfa Beta Complex Parking", type: "Parking lot", code: "M8QJ+2CW", lat: 27.6912, lng: 85.3325, meta: "Underground structural layout matrix", review: "Complimentary facility if utilizing complex commercial services." },
    { id: 8, name: "Vehicle Parking (Gondhuli Chowk)", type: "Parking lot", code: "P8M6+H9V", lat: 27.7225, lng: 85.3182, meta: "गोन्धुलि चोक मार्ग residential sector link", review: "Convenient suburban junction alternative." },
    { id: 9, name: "Kathmandu Metropolitan City Office Parking", type: "Parking lot", code: "P85C+GFX", lat: 27.7078, lng: 85.3142, meta: "Closes 11 PM · Highly Secure Perimeter", review: "Official municipal zone monitored by municipal police units." },
    { id: 10, name: "Narayanhiti Palace Museum Parking", type: "Public parking space", code: "P878+CV8", lat: 27.7145, lng: 85.3172, meta: "Narayanhiti Path entrance frame", review: "Wonderful place, best place foe visit at Kathmandu" },
    { id: 11, name: "Nepa Complex Underground Parking", type: "Parking lot", code: "P836+M9R", lat: 27.7031, lng: 85.3115, meta: "Phasikyaba Marg · Closes 8 PM", review: "Tight subterranean concrete bays, ideal for compact vehicles." },
    { id: 12, name: "Basement Parking JP Road", type: "Parking lot", code: "P876+43P", lat: 27.7132, lng: 85.3105, meta: "JP Rd · Phone: 981-8569336", review: "Safe to park 24/7." },
    { id: 13, name: "Paid Parking - Jhochhen Tol", type: "Parking lot", code: "P824+VX6", lat: 27.7005, lng: 85.3102, meta: "Closes 10 PM · Tourist hub access points", review: "Essential motorcycle terminal near Kathmandu Durbar Square." },
    { id: 14, name: "Rum Bahadur Private Plot", type: "Parking lot", code: "P86C+4VF", lat: 27.7115, lng: 85.3192, meta: "Private security enforcement parameters", review: "Privately run security alignment behind commercial facades." },
    { id: 15, name: "Chhayadevi Parking Lot", type: "Parking lot", code: "P887+54P", lat: 27.7158, lng: 85.3112, meta: "Tridevi Marg · Thamel Gateway Complex", review: "Plenty of parking space." },
    { id: 16, name: "Marcopolo Business Hotel (Parking)", type: "Parking garage", code: "P85C+XPX", lat: 27.7082, lng: 85.3218, meta: "Hotel tier surveillance allocation systems", review: "Secured parking deck with on-site hospitality tracking patrols." },
    { id: 17, name: "Global College Parking Lot", type: "Valet parking service", code: "P82Q+2HF", lat: 27.7011, lng: 85.3345, meta: "Devkota Sadak alignment terminal", review: "Mainly tailored for college administration and verified visitors." },
    { id: 18, name: "Kamal Pokhari Park Side Bay", type: "Park", code: "P86G+49X", lat: 27.7118, lng: 85.3242, meta: "Kamal Pokhari St · Closes 8 PM", review: "Availability of parking facilities." },
    { id: 19, name: "Lalitpur Metropolitan Free Parking", type: "Parking lot for motorcycles", code: "M8G8+MQM", lat: 27.6745, lng: 85.3212, meta: "Gabahal Rd boundary track terminal", review: "Public free parking." },
    { id: 20, name: "Kathmandu Mahanagar Palika Office", type: "Local government office", code: "M8RC+7QP", lat: 27.6935, lng: 85.3158, meta: "Phone: 01-4102301 · Official Operations", review: "One of the best mahanagar palika in the world" }
];

// Global Object Reference Handlers
let mapEngine;
let mapMarkerCacheStore = {};

// Initializes mapping system
function bootstrapMapDashboard() {
    // Center map directly around Kathmandu core grid center points
    mapEngine = L.map('parkingServerMap').setView([27.706, 85.316], 14);

    // Fetch modern street graphics tiles
    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; OpenStreetMap contributors &copy; CARTO'
    }).addTo(mapEngine);

    // Render vector tracking circles across geographic coordinates
    scrapedParkingRegistry.forEach(lot => {
        const markerElement = L.circleMarker([lot.lat, lot.lng], {
            radius: 10,
            fillColor: '#2563eb',
            color: '#ffffff',
            weight: 2,
            fillOpacity: 0.9
        }).addTo(mapEngine);

        // Configure standard mapping popups
        const dynamicInfoBox = `
            <div style="font-family: sans-serif; max-width: 200px;">
                <h4 style="margin: 0 0 4px 0; color: #0f172a; font-size: 13px;">${lot.name}</h4>
                <div style="font-size: 10px; font-weight: bold; color: #2563eb; margin-bottom: 6px;">${lot.type.toUpperCase()}</div>
                <p style="margin: 0; font-size: 11px; color: #475569; line-height: 1.3;"><strong>Code:</strong> ${lot.code}<br>${lot.meta}</p>
            </div>
        `;
        markerElement.bindPopup(dynamicInfoBox);
        
        // Keep references to markers for on-click actions below
        mapMarkerCacheStore[lot.id] = markerElement;
    });
}

// Action trigger function linking cards to map updates
function focusMapTerminalOnParking(lotId, lat, lng) {
    if (!mapEngine) return;

    // Pan and zoom to location smoothly
    mapEngine.flyTo([lat, lng], 16, {
        animate: true,
        duration: 1.2
    });

    // Automatically open the respective map popup window
    const targetMarkerNode = mapMarkerCacheStore[lotId];
    if (targetMarkerNode) {
        setTimeout(() => {
            targetMarkerNode.openPopup();
        }, 1200);
    }

    // Scroll browser window smoothly back onto the map terminal container window
    document.getElementById('parkingServerMap').scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// Loops through scraped data and injects cards into the grid
function populateScrapedParkingGrid() {
    const gridCanvas = document.getElementById('parkingGridInsertionCanvas');
    gridCanvas.innerHTML = '';

    scrapedParkingRegistry.forEach(lot => {
        const card = document.createElement('div');
        card.className = 'parking-card';
        card.setAttribute('onclick', `focusMapTerminalOnParking(${lot.id}, ${lot.lat}, ${lot.lng})`);

        // Map styling categories to tag colors
        let categoryTypeModifier = 'tag-lot';
        if (lot.type.toLowerCase().includes('public')) categoryTypeModifier = 'tag-public';
        if (lot.type.toLowerCase().includes('garage')) categoryTypeModifier = 'tag-garage';
        if (lot.type.toLowerCase().includes('free')) categoryTypeModifier = 'tag-free';

        // Handle missing or optional review texts cleanly
        const reviewMarkupBlock = lot.review ? `<div class="card-review-block">"${lot.review}"</div>` : '';

        card.innerHTML = `
            <div class="card-header-info">
                <span class="card-type-tag ${categoryTypeModifier}">${lot.type}</span>
                <h3>${lot.name}</h3>
                <div class="card-meta-line"> <strong>Grid PlusCode:</strong> ${lot.code}</div>
                <div class="card-meta-line"> ${lot.meta}</div>
                ${reviewMarkupBlock}
            </div>
            <button class="flyto-action-btn">Locate Spot On Map ➔</button>
        `;

        gridCanvas.appendChild(card);
    });
}

// Run application functions when DOM reaches fully initialized state
document.addEventListener('DOMContentLoaded', () => {
    bootstrapMapDashboard();
    populateScrapedParkingGrid();
});


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