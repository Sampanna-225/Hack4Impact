// Comprehensive master dictionary containing 25 structured destinations across Nepal
const globalLocationsRegistry = [
    { id: 1, name: "Kathmandu Durbar Square", lat: 27.7042, lng: 85.3065, category: "Heritage", desc: "Historic palace square showcasing ancient Newari architectural craftsmanship in the heart of the capital." },
    { id: 2, name: "Boudhanath Stupa", lat: 27.7215, lng: 85.3620, category: "Spiritual", desc: "One of the largest spherical stupas in the world, serving as a focal point for Tibetan Buddhism." },
    { id: 3, name: "Patan Durbar Square", lat: 27.6734, lng: 85.3252, category: "Heritage", desc: "Renowned marvel of fine arts, stone sculptures, and spectacular metal carving installations." },
    { id: 4, name: "Bhaktapur Durbar Square", lat: 27.6722, lng: 85.4278, category: "Heritage", desc: "An open museum preserved in time, featuring the famous 55-Window Palace and Nyatapola Temple." },
    { id: 5, name: "Phewa Lake, Pokhara", lat: 28.2116, lng: 83.9431, category: "Nature", desc: "Tranquil freshwater lake offering panoramic reflections of the magnificent Machhapuchhre mountain peak." },
    { id: 6, name: "Sarangkot Viewpoint", lat: 28.2444, lng: 83.9482, category: "Adventure", desc: "Premier altitude ridge famed for spectacular sunrise vistas over the Annapurna Himalaya Range." },
    { id: 7, name: "Lumbini Sacred Garden", lat: 27.4815, lng: 83.2764, category: "History", desc: "UNESCO World Heritage site recognized globally as the revered birthplace of Gautama Buddha." },
    { id: 8, name: "Chitwan National Park", lat: 27.5251, lng: 84.3418, category: "Wildlife", desc: "Dense subtropical lowlands home to critical populations of one-horned rhinos and Bengal tigers." },
    { id: 9, name: "Sagarmatha National Park", lat: 27.9325, lng: 86.7303, category: "Alpine", desc: "Stunning high-altitude sanctuary dominated by Mount Everest and dramatic glacial valleys." },
    { id: 10, name: "Namo Buddha Monastery", lat: 27.5670, lng: 85.5819, category: "Spiritual", desc: "Sacred hilltop monastery associated with the compassionate historical legend of the ancient prince." },
    { id: 11, name: "Muktinath Temple", lat: 28.8163, lng: 83.8716, category: "Pilgrimage", desc: "High-altitude sacred pilgrimage shrine revered by both Hindus and Buddhists in Mustang." },
    { id: 12, name: "Janaki Mandir, Janakpur", lat: 26.7104, lng: 85.9262, category: "Heritage", desc: "Bright white bright masterpiece architectural temple designed in classical Rajput style variants." },
    { id: 13, name: "Rara Lake, Mugu", lat: 29.5312, lng: 82.0863, category: "Nature", desc: "The largest high-altitude pristine lake in Nepal, shifting deep shades of blue throughout the day." },
    { id: 14, name: "Bardia National Park", lat: 28.4639, lng: 81.3788, category: "Wildlife", desc: "Undisturbed wilderness preserve offering unmatched structural tracking habitats for wild elephants." },
    { id: 15, name: "Gosaikunda Alpine Lake", lat: 28.0834, lng: 85.4162, category: "Trekking", desc: "Sacred high-altitude freshwater oligotrophic lake system tucked inside Langtang National Park." },
    { id: 16, name: "Nagarkot Ridge View", lat: 27.7174, lng: 85.5164, category: "Nature", desc: "Famed scenic hilltop layout perimeter delivering broad panoramic views of the central Himalayas." },
    { id: 17, name: "Swayambhunath Stupa", lat: 27.7149, lng: 85.2904, category: "Spiritual", desc: "Ancient religious complex perched atop a western hill hillcrest, affectionately known as the Monkey Temple." },
    { id: 18, name: "Chandragiri Hills", lat: 27.6711, lng: 85.1974, category: "Leisure", desc: "Panoramic escape accessed via cable car, looking out across the entire expanse of Kathmandu valley." },
    { id: 19, name: "Bandipur Old Town", lat: 27.9351, lng: 84.4158, category: "Heritage", desc: "Beautifully preserved Newari trading village showcasing intact traditional architecture." },
    { id: 20, name: "Gorkha Durbar Palace", lat: 28.0016, lng: 84.6291, category: "History", desc: "Fortified ancestral hilltop palace complex of the historic Shah dynasty unification monarchs." },
    { id: 21, name: "Shey Phoksundo Lake", lat: 29.2015, lng: 82.9562, category: "Nature", desc: "Breathtakingly deep alpine lake renowned for its striking turquoise hue and mountain backdrops." },
    { id: 22, name: "Illam Tea Gardens", lat: 26.9113, lng: 87.9254, category: "Nature", desc: "Rolling landscapes of emerald-green tea estates in the misty hills of eastern Nepal." },
    { id: 23, name: "Tansen, Palpa", lat: 27.8672, lng: 83.5469, category: "Heritage", desc: "Charming hill station rich in Newari architecture and famous for traditional Dhaka textile weaving." },
    { id: 24, name: "Dhulikhel Historic Rim", lat: 27.6186, lng: 85.5532, category: "Nature", desc: "Ancient trading post transformed into a premier viewport location for checking eastern alpine crests." },
    { id: 25, name: "Kakani Hill Resort Area", lat: 27.8021, lng: 85.2536, category: "Leisure", desc: "Quiet highland ridge offering views of the Ganesh Himal range and famous strawberry farming valleys." }
];

// System Core Map Object Reference Pointer
let mapEngineInstance;
// Tracking dictionary linking entry location data identifiers directly with interactive leaflet markers
let activeMarkersMapStore = {};

// Primary initialization routine mapping structural elements safely on loading
function initGlobalExplorationMap() {
    // Centers view directly over the heartland configuration of Nepal
    mapEngineInstance = L.map('explorationMap').setView([28.00, 84.50], 7);

    // Loads a modern light-mode tile layout
    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; OpenStreetMap &copy; CARTO'
    }).addTo(mapEngineInstance);

    // Iterates through master registry to cleanly place interactive geometric vector circles for all data entries
    globalLocationsRegistry.forEach(loc => {
        const markerNode = L.circleMarker([loc.lat, loc.lng], {
            radius: 9,
            fillColor: '#0284c7',
            color: '#ffffff',
            weight: 2,
            fillOpacity: 0.85
        }).addTo(mapEngineInstance);

        // Configures structured popup message boxes for map clicks
        const dynamicTooltipMarkup = `
            <div style="font-family: sans-serif; padding: 0.1rem; max-width: 200px;">
                <h4 style="margin: 0 0 0.25rem 0; font-size: 0.95rem; color: #0f172a;">${loc.name}</h4>
                <span style="font-size: 0.7rem; font-weight: bold; background: #e0f2fe; color: #0369a1; padding: 0.1rem 0.4rem; border-radius: 4px;">${loc.category}</span>
                <p style="margin: 0.5rem 0 0 0; font-size: 0.8rem; color: #475569; line-height: 1.3;">${loc.desc}</p>
            </div>
        `;
        markerNode.bindPopup(dynamicTooltipMarkup);
        
        // Caches specific layout marker instances to mapping keys for targeted fly-to action triggers later
        activeMarkersMapStore[loc.id] = markerNode;
    });
}

// Focus action function triggered on destination selection
function focusMapOnTargetLocation(locationId, latitude, longitude) {
    if (!mapEngineInstance) return;
    
    // Smoothly pan and zoom directly to the selected coordinate point
    mapEngineInstance.flyTo([latitude, longitude], 12, {
        animate: true,
        duration: 1.5
    });

    // Automatically toggle open the respective tooltip popup window
    const targetMarker = activeMarkersMapStore[locationId];
    if (targetMarker) {
        setTimeout(() => {
            targetMarker.openPopup();
        }, 1500);
    }

    // Scroll the browser viewport smoothly back up to the map element
    document.getElementById('explorationMap').scrollIntoView({ behavior: 'smooth', block: 'end' });
}

// Business logic handler managing array randomizations for suggestion reshuffling
function generateRandomSuggestionsBoard() {
    const containerElement = document.getElementById('suggestionsContainer');
    // Clear current items
    containerElement.innerHTML = '';

    // Clone array registry to prevent baseline modifications
    let locationsPool = [...globalLocationsRegistry];
    
    // Fisher-Yates array shuffling algorithm implementation
    for (let i = locationsPool.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [locationsPool[i], locationsPool[j]] = [locationsPool[j], locationsPool[i]];
    }

    // Select 8 items to display on the board
    const selectedSuggestionsList = locationsPool.slice(0, 8);

    // Construct and inject dynamic grid card elements into DOM
    selectedSuggestionsList.forEach(item => {
        const elementCard = document.createElement('div');
        elementCard.className = 'location-showcase-card';
        elementCard.setAttribute('onclick', `focusMapOnTargetLocation(${item.id}, ${item.lat}, ${item.lng})`);
        
        elementCard.innerHTML = `
            <div class="card-main-meta">
                <h3>${item.name}</h3>
                <p>${item.desc}</p>
            </div>
            <div>
                <span class="location-tag-pill">${item.category}</span>
            </div>
        `;
        
        containerElement.appendChild(elementCard);
    });
}

// Initialize script logic as soon as DOM reaches interactive readiness states
document.addEventListener('DOMContentLoaded', () => {
    initGlobalExplorationMap();
    generateRandomSuggestionsBoard();
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