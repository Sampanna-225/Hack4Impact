// Master Database Array holding 38 high-profile heritage centers across Nepal
const nepalHeritageRegistry = [
    // --- The 8 Core Cultural UNESCO Zones ---
    { id: "kh_durbar", name: "Kathmandu Durbar Square", lat: 27.7042, lng: 85.3074, location: "Kathmandu Valley", desc: "The ancient royal seat of the Malla kings, featuring intricately carved open wooden courtyards and the residence of the Living Goddess Kumari.", img: "https://images.squarespace-cdn.com/content/v1/53ecd1bde4b0a6f9524254f8/1414752490093-6W1D5IV5FTQXW10IN20I/image-asset.jpeg?format=2500w" },
    { id: "pt_durbar", name: "Patan Durbar Square", lat: 27.6726, lng: 85.3253, location: "Lalitpur City", desc: "A spectacular layout of fine Newari architectural masterpieces, highlighted by the majestic stone-carved multi-tiered Krishna Mandir palace structures.", img: "https://www.traveltogetherwithtripathitravels.com/wp-content/uploads/2025/01/Patan-Durbar-Square.jpg" },
    { id: "bk_durbar", name: "Bhaktapur Durbar Square", lat: 27.6720, lng: 85.4282, location: "Bhaktapur City", desc: "A pristine medieval sanctuary featuring the legendary 55-Window Palace, the Golden Gate, and the towering five-story Nyatapola Temple.", img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/ef/5c/54/durbar-square-bhaktapur.jpg?w=900&h=-1&s=1" },
    { id: "sw_stupa", name: "Swayambhunath Stupa", lat: 27.7148, lng: 85.2903, location: "West Kathmandu Hill", desc: "The ancient Buddhist dome complex perched on a historic hillcrest overlooking the valley basin, famously guarded by native monkeys.", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Swayambhunath_2018.jpg/1280px-Swayambhunath_2018.jpg" },
    { id: "bd_stupa", name: "Boudhanath Stupa", lat: 27.7215, lng: 85.3620, location: "East Kathmandu", desc: "One of the largest spherical stupas in the world, serving as the vibrant spiritual heartland and gathering hub for Tibetan Buddhism.", img: "https://www.attractivetravelnepal.com/wp-content/uploads/2022/10/boudhanath-stupa-UNESCO-tour.jpg" },
    { id: "ps_temple", name: "Pashupatinath Temple", lat: 27.7105, lng: 85.3488, location: "Bagmati River Basin", desc: "One of the holiest Hindu shrines dedicated to Lord Shiva, featuring sacred stone ghats, ashrams, and evening ritual aarati performances.", img: "https://cdn.britannica.com/88/177488-050-080349A3/UNESCO-world-heritage-site-Pashupatinath-Temple-Kathmandu-Nepal.jpg" },
    { id: "cg_narayan", name: "Changu Narayan Temple", lat: 27.7163, lng: 85.4278, location: "Bhaktapur Ridge", desc: "The oldest standing Hindu temple complex in the valley, showcasing invaluable stone, wood, and metal inscriptions from the 5th-century Lichhavi era.", img: "https://nht-api.nepalhikingteam.com/media/blog/banner/changu-narayan-temple.jpg" },
    { id: "lm_garden", name: "Lumbini Sacred Garden", lat: 27.4815, lng: 83.2764, location: "Rupandehi District", desc: "The globally venerated birthplace of Gautama Buddha, featuring the Mayadevi Temple, the Ashoka Pillar, and international monasteries.", img: "https://lumbinidevtrust.gov.np/upload_file/images/slider/1721894939_276597348_lumbini.jpg" },
    
    // --- Expanded List of 30 Dynamic Heritage, Palace & Ancient Locations ---
    { id: "jk_mandir", name: "Janaki Mandir", lat: 26.7104, lng: 85.9262, location: "Janakpur Dham", desc: "A magnificent white stone temple built in classical Rajput style variants, dedicated to Goddess Sita.", img: "https://upload.wikimedia.org/wikipedia/commons/1/16/Janki_Mandir_alt_version.jpg" },
    { id: "gk_palace", name: "Gorkha Durbar Palace", lat: 28.0016, lng: 84.6291, location: "Gorkha District", desc: "The fortified ancestral hilltop birthplace of King Prithvi Narayan Shah, founder of modern unified Nepal.", img: "https://nepaltraveller.com/images/main/1682496273.sidetrackimageimage_750x_61facb75a279b.jpg" },
    { id: "nw_palace", name: "Nuwakot Palace Complex", lat: 27.9132, lng: 85.1664, location: "Nuwakot District", desc: "An imposing seven-story brick fortress overlooking crucial river trading routes of old western principalities.", img: "https://www.landnepal.com/wp-content/uploads/2021/06/Nuwakot_LN.jpg" },
    { id: "kp_monastery", name: "Kopan Monastery", lat: 27.7424, lng: 85.3644, location: "Kathmandu Outskirts", desc: "A famous Tibetan Buddhist monastery perched on a ridge, renowned for its spiritual meditation courses.", img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/fa/44/73/another-buddhist-temple.jpg?w=1200&h=-1&s=1" },
    { id: "mk_temple", name: "Manakamana Temple", lat: 27.9022, lng: 84.6110, location: "Gorkha Ridge", desc: "The highly revered wish-fulfilling sacred temple shrine, accessed via a spectacular deep valley cable car.", img: "https://admin.visitmanakamana.com/assets/images/pages/1646373481.jpg" },
    { id: "bp_bazaar", name: "Bandipur Traditional Street", lat: 27.9351, lng: 84.4158, location: "Tanahun District", desc: "A beautifully preserved 18th-century Newari trading outpost village displaying intact architecture along a paved pedestrian flagstone highway.", img: "https://fulltimeexplorer.com/wp-content/uploads/2020/05/Bandipur-Nepal-Travel-Guide-4206.jpg" },
    { id: "ts_palpa", name: "Tansen Durbar Palace", lat: 27.8672, lng: 83.5469, location: "Palpa District", desc: "A restored administrative hilltop fortress palace, celebrated for its unique Newari-styled Dhaka weaving quarters.", img: "https://nepaltraveller.com/laravel-filemanager/photos/75/Durbar1635266888_1024.jpg" },
    { id: "km_temple", name: "Krishna Mandir (Patan)", lat: 27.6728, lng: 85.3251, location: "Lalitpur Center", desc: "A flawless, entirely stone-carved 21-pinnacle Shikhara temple displaying narrative reliefs from the Mahabharata.", img: "https://vedicfeed.com/wp-content/uploads/2020/05/Patan-Durbar-Square-krishna-mandir-e1495975595613.jpg" },
    { id: "nm_buddha", name: "Namo Buddha Stupa", lat: 27.5670, lng: 85.5819, location: "Kavre District", desc: "The legendary hilltop sanctuary where a prince compassionately sacrificed his body to feed a starving tigress and her cubs.", img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/76/16/4e/caption.jpg?w=900&h=500&s=1" },
    { id: "tb_monastery", name: "Tengboche Monastery", lat: 27.8358, lng: 86.7640, location: "Khumbu Region", desc: "The highest prominent Buddhist monastery in the world, framed against the backdrop of Mount Ama Dablam.", img: "https://cms.altitudehimalaya.com/media/Blog/Travel-Guides/Tengboche_Monastery.png" },
    { id: "rn_ghat", name: "Rani Pokhari Crypt", lat: 27.7081, lng: 85.3148, location: "Central Kathmandu", desc: "The historic 17th-century 'Queen\'s Pond' featuring a central Balgopaleshwar temple structure built by King Pratap Malla.", img: "https://www.landnepal.com/wp-content/uploads/2021/09/RaniPokhari.jpg" },
    { id: "dk_temple", name: "Dakshinkali Shrine", lat: 27.5919, lng: 85.2631, location: "Pharping Gorge", desc: "A popular, powerful forest temple complex dedicated to the fierce goddess Kali, located at the southern edge of the valley hills.", img: "https://www.gokyotreksnepal.com/wp-content/uploads/2023/02/Dakshinkali-temple.jpg" },
    { id: "bg_bhairab", name: "Bagh Bhairab Temple", lat: 27.6792, lng: 85.2739, location: "Kirtipur Hill", desc: "An ancient shrine adorned with weapons belonging to historical local soldiers defending the kingdom from unification sieges.", img: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Bagh_Bhairab_Temple%2C_%E0%A4%AC%E0%A4%BE%E0%A4%98_%E0%A4%AD%E0%A5%88%E0%A4%B0%E0%A4%B5_%E0%A4%AE%E0%A4%A8%E0%A5%8D%E0%A4%A6%E0%A4%BF%E0%A4%B0%2C_Kirtipur%2C_Kathmandu.jpg" },
    { id: "vj_yogini", name: "Vajrayogini Temple", lat: 27.7915, lng: 85.4621, location: "Sankhu Settlement", desc: "A highly revered tantric temple complex nestled deep inside a dense forest, dating back to medieval periods.", img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/c5/13/cf/vajrayogini-temple.jpg?w=1200&h=-1&s=1" },
    { id: "ks_temple", name: "Kasthamandap Wooden Site", lat: 27.7039, lng: 85.3061, location: "Kathmandu Core", desc: "The monumental pavilion built from the timber of a single tree, from which the city of Kathmandu gets its modern name.", img: "https://upload.wikimedia.org/wikipedia/commons/1/15/Kasthamandap_Kathmandu_%282023%29.jpg" },
    { id: "pn_bazaar", name: "Panauti", lat: 27.5831, lng: 85.5181, location: "Kavre District", desc: "A tranquil riverside town built at the confluence of two sacred streams, famous for the ancient Indreshwar Mahadev temple.", img: "https://upload.wikimedia.org/wikipedia/commons/9/94/Panauti_Core_Settlement.jpg" },
    { id: "rc_kshetra", name: "Rishikesh Ruru Kshetra", lat: 27.9332, lng: 83.4331, location: "Palpa/Gulmi Border", desc: "A sacred pilgrimage site along the Kali Gandaki River, known for its rich collection of ancient monuments.", img: "https://tripguidenepal.com/wp-content/uploads/2023/06/Ruru-Nepal-1290x540.jpg" },
    { id: "sj_valley", name: "Sinja Valley Ruins", lat: 29.3214, lng: 81.9825, location: "Jumla District", desc: "The ancient capital of the powerful medieval Khas Empire, where the earliest roots of the Nepali language were carved.", img: "https://nepaltraveller.com/laravel-filemanager/photos/78/Nature/sinja%202.png" },
    { id: "lo_manthang", name: "Lo Manthang Walled City", lat: 29.1824, lng: 83.9564, location: "Upper Mustang", desc: "A spectacular earthen fortress capital containing 15th-century Buddhist monasteries tucked away inside a trans-Himalayan desert.", img: "https://media.himalayanrecreation.com/uploads/media/Lo%20Manthang%2C%20the%20Walled%20City%20of%20Upper%20Mustang/Mustang.webp" },
    { id: "mt_temple", name: "Muktinath High Temple", lat: 28.8163, lng: 83.8716, location: "Mustang Highlands", desc: "A high-altitude temple sacred to both Hindus and Buddhists, featuring 108 natural water spouts and an eternal natural gas flame.", img: "https://upload.wikimedia.org/wikipedia/commons/6/69/The_Muktinath_Temple.jpg" },
    { id: "bh_temple", name: "Bhairavanath Temple", lat: 27.6715, lng: 85.4294, location: "Bhaktapur Core", desc: "A powerful three-story pagoda structure dedicated to the fierce manifestation of Lord Shiva.", img: "https://live.staticflickr.com/8841/28191753941_0e03b96720_b.jpg" },
    { id: "tl_bhawani", name: "Taleju Bhawani Temple", lat: 27.7055, lng: 85.3079, location: "Kathmandu Palace", desc: "An imposing multi-roofed palace shrine dedicated to the royal Malla clan goddess, opened once a year during Dashain.", img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/a7/1d/54/goldenes-tor-in-bhaktapur.jpg?w=900&h=500&s=1" },
    { id: "wp_pagoda", name: "World Peace Pagoda", lat: 28.2014, lng: 83.9442, location: "Pokhara Ridge", desc: "A brilliant white dome stupa built on a hilltop ridge, designed to inspire global harmony and unity.", img: "https://admin.buddhaair.com/upload/blog/mainimage/1655098520_d7nGh_pokhara-cover-picture.webp" },
    { id: "ct_reserve", name: "Chitwan Wildlife Reserve", lat: 27.5251, lng: 84.3418, location: "Chitwan Lowlands", desc: "Nepal's first protected park preserve, offering critical refuge to rare one-horned rhinos and Bengal tigers.", img: "https://www.andbeyond.com/wp-content/uploads/sites/5/indian-elephant-chitwan-nepal.jpg" },
    { id: "sg_everest", name: "Sagarmatha Mountain Reserve", lat: 27.9325, lng: 86.7303, location: "Solukhumbu Range", desc: "The monumental Himalayan reserve dominated by Mt. Everest, dramatic icy glaciers, and deep sherpa culture routes.", img: "https://www.worldtribune.org/wp-content/uploads/sites/2/2024/11/Sagarmatha-GettyImages-877441958.jpg" },
    { id: "bt_temple", name: "Budhanilkantha Temple", lat: 27.7781, lng: 85.3619, location: "North Kathmandu", desc: "A unique open-air sanctuary featuring a large, ancient basalt stone statue of Lord Vishnu reclining on a bed of cosmic serpents.", img: "https://sacredsites.com/images/asia/nepal/Kathmandu-Budanilkantha-2.webp" },
    { id: "ph_gumba", name: "Pharping Asura Caves", lat: 27.6114, lng: 85.2689, location: "Pharping Valley", desc: "A sacred cave monastery site where Guru Padmasambhava is said to have achieved deep spiritual realization.", img: "https://images.squarespace-cdn.com/content/v1/5b735348266c075124b0ffb3/1570104746342-WNU2D7QUY2RS8DDIJN0O/Asura_Cave_181020-8.jpg" },
    { id: "sn_fortress", name: "Sindhuligadhi Fort", lat: 27.2844, lng: 85.9525, location: "Sindhuli District", desc: "The historic mountain hilltop fortress where Gorkhali forces famously defeated advancing British forces in 1767.", img: "https://assets-cdn.kathmandupost.com/uploads/source/news/2020/miscellaneous/shutterstock_1567161847.jpg" },
    { id: "kd_monastery", name: "Khaten Monastery", lat: 27.6834, lng: 85.3941, location: "Lalitpur Foothills", desc: "A peaceful monastery complex preserving traditional Buddhist scriptural woodblock art sets.", img: "https://www.himalayandream.team/public/uploads/kopan-monastery-with-baby-monks.jpg" },
    { id: "gd_temple", name: "Gadhimai Sacred Arena", lat: 26.9621, lng: 84.9214, location: "Bara District", desc: "A prominent historic plains temple complex known for its major traditional cultural festival programs.", img: "https://temple.yatradham.org/public/Product/temple/temple_q0pFr55n_202502011556030.jpg" }
];

// Global Leaflet Object References
let mapInstance;
let mapMarkersStorage = {};

// Initializes Server GIS map
function buildHeritageMapSystem() {
    mapInstance = L.map('heritageServerMap').setView([28.10, 84.40], 7);

    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; OpenStreetMap contributors &copy; CARTO'
    }).addTo(mapInstance);

    // Plot markers for all 38 points
    nepalHeritageRegistry.forEach(site => {
        const mapMarkerNode = L.circleMarker([site.lat, site.lng], {
            radius: 9,
            fillColor: '#c5192d',
            color: '#ffffff',
            weight: 2,
            fillOpacity: 0.9
        }).addTo(mapInstance);

        const contextualPopupBody = `
            <div style="font-family: Arial, sans-serif; max-width: 220px;">
                <h4 style="margin:0 0 4px 0; color:#0f172a; font-size:14px;">${site.name}</h4>
                <span style="font-size:11px; background:#fef3c7; color:#92400e; padding:2px 6px; border-radius:4px; font-weight:bold;">${site.location}</span>
                <p style="margin:8px 0 0 0; font-size:12px; color:#334155; line-height:1.4;">${site.desc}</p>
            </div>
        `;
        mapMarkerNode.bindPopup(contextualPopupBody);
        mapMarkersStorage[site.id] = mapMarkerNode;
    });
}

// Pans map and opens popup inside the app view
function moveMapTerminalToHeritage(siteId, lat, lng) {
    if (!mapInstance) return;

    mapInstance.flyTo([lat, lng], 13, {
        animate: true,
        duration: 1.2
    });

    const selectedMarker = mapMarkersStorage[siteId];
    if (selectedMarker) {
        setTimeout(() => {
            selectedMarker.openPopup();
        }, 1200);
    }

    document.getElementById('heritageServerMap').scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// Selects 6 random items for the upfront display
function rotateRandomUpfrontHeritage() {
    document.getElementById('heritageSearchBox').value = '';

    let arrayClonedPool = [...nepalHeritageRegistry];
    
    for (let index = arrayClonedPool.length - 1; index > 0; index--) {
        const randomIndexExchange = Math.floor(Math.random() * (index + 1));
        [arrayClonedPool[index], arrayClonedPool[randomIndexExchange]] = [arrayClonedPool[randomIndexExchange], arrayClonedPool[index]];
    }

    const limitedDisplaySelection = arrayClonedPool.slice(0, 6);
    renderHeritageDisplayGrid(limitedDisplaySelection);
}

// Search filter matching entries across text parameters
function executeLiveSearchFilter() {
    const queryTargetStr = document.getElementById('heritageSearchBox').value.toLowerCase().trim();
    
    if (queryTargetStr === '') {
        rotateRandomUpfrontHeritage();
        return;
    }

    const parsedSearchResults = nepalHeritageRegistry.filter(heritage => {
        return heritage.name.toLowerCase().includes(queryTargetStr) || 
                heritage.location.toLowerCase().includes(queryTargetStr) ||
                heritage.desc.toLowerCase().includes(queryTargetStr);
    });

    renderHeritageDisplayGrid(parsedSearchResults);
}

// Render card layout with custom images or error safe fallbacks
function renderHeritageDisplayGrid(heritageDatasetArray) {
    const displayCanvasGridElement = document.getElementById('heritageDisplayGrid');
    displayCanvasGridElement.innerHTML = '';

    if (heritageDatasetArray.length === 0) {
        displayCanvasGridElement.innerHTML = `
            <div class="empty-grid-notice">
                <h3>🔍 No Heritage Sites Found</h3>
                <p>We couldn't find matching items for that keyword search. Try searching for "Durbar", "Palace", "Stupa", or "Temple".</p>
            </div>
        `;
        return;
    }

    heritageDatasetArray.forEach(site => {
        const nodeCardBox = document.createElement('article');
        nodeCardBox.className = 'heritage-showcase-node';
        
        nodeCardBox.innerHTML = `
            <div class="node-photo-frame">
                <span class="image-error-fallback"></span>
                <img src="${site.img}" alt="${site.name} Heritage Photography View" onerror="this.style.opacity='0';">
            </div>
            <div class="node-inner-body">
                <div class="node-meta-box">
                    <h3>${site.name}</h3>
                    <div class="location-badge"> ${site.location}</div>
                    <p>${site.desc}</p>
                </div>
                <button class="get-there-link-btn" onclick="moveMapTerminalToHeritage('${site.id}', ${site.lat}, ${site.lng})">
                    Get Me There ➔
                </button>
            </div>
        `;
        
        displayCanvasGridElement.appendChild(nodeCardBox);
    });
}

// Core bindings
document.addEventListener('DOMContentLoaded', () => {
    buildHeritageMapSystem();
    rotateRandomUpfrontHeritage();
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