let a1 = 82;
let a2 =18,a3=45,a4=79,a5=35,a6=45,a7=138,a8=109,a9=136,a10=38,a11=151,a12=112,a13=123,a14=152,a15=90,a16 = 55;

const nepalCitiesMasterList = [
    { name: "Kathmandu", type: "Heritage Hub", imgUrl: "https://www.nepaltraveladventure.com/blog/wp-content/uploads/2022/07/things-to-do-in-kathmandu-2022.jpg", aqi: a1, aqiDesc: "Satisfactory clean baseline across valley lines.", places: [ {n: "Boudhanath Stupa", l: "https://maps.google.com/maps?q=Boudhanath+Stupa,Kathmandu&t=&z=13&ie=UTF8&iwloc=&output=embed"}, {n: "Durbar Square", l: "https://maps.google.com/maps?q=Kathmandu+Durbar+Square&t=&z=13&ie=UTF8&iwloc=&output=embed"} ], rules: ["Rs. 500 immediate fine for street littering.", "Total vehicle horn prohibition active."] },
    { name: "Pokhara", type: "Lake Scenery", imgUrl: "https://cdn.kimkim.com/files/a/content_articles/featured_photos/0a99949f58bc92145369e8363c64c33bfd85f819/big-68acc559aad8def0f326f4d62e8faf78.jpg", aqi: a2, aqiDesc: "Acceptable air; minor risk for sensitive groups.", places: [ {n: "Phewa Lakefront Walk", l: "https://maps.google.com/maps?q=Phewa+Lake,Pokhara&t=&z=13&ie=UTF8&iwloc=&output=embed"}, {n: "Sarangkot Viewpoint", l: "https://maps.google.com/maps?q=Sarangkot,Pokhara&t=&z=13&ie=UTF8&iwloc=&output=embed"} ], rules: ["Single-use plastic bags completely banned.", "Boats must possess waste collection packs."] },
    { name: "Bharatpur", type: "Wildlife Gateway", imgUrl: "https://www.traveltalktours.com/wp-content/smush-webp/2021/12/vince-russell-FXVY6ZIOkhM-unsplash-1024x683.jpg.webp", aqi: a3, aqiDesc: "Clean baseline optimal for river safaris.", places: [ {n: "Chitwan National Park Entrance", l: "https://maps.google.com/maps?q=Chitwan+National+Park&t=&z=13&ie=UTF8&iwloc=&output=embed"}, {n: "Rapti River Ghats", l: "https://maps.google.com/maps?q=Rapti+River&t=&z=13&ie=UTF8&iwloc=&output=embed"} ], rules: ["Zero-tolerance sound pollution rules near park.", "Flashlights prohibited on wild rhino corridors."] },
    { name: "Lalitpur", type: "Crafts & Arts", imgUrl: "https://cdn.britannica.com/36/154236-050-8127D19C/Durbar-Square-Lalitpur-Nepal.jpg", aqi: a4, aqiDesc: "Minimal particulate matter detected.", places: [ {n: "Patan Durbar Square", l: "https://maps.google.com/maps?q=Patan+Durbar+Square&t=&z=13&ie=UTF8&iwloc=&output=embed"}, {n: "Patan Museum Gallery", l: "https://maps.google.com/maps?q=Patan+Museum&t=&z=13&ie=UTF8&iwloc=&output=embed"} ], rules: ["E-rickshaws prioritized inside heritage alleys.", "Commercial plastic banners prohibited."] },
    { name: "Bhaktapur", type: "Cultural Sanctuary", imgUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/ef/5c/33/nyatapola-bhaktapur.jpg?w=1200&h=-1&s=1", aqi: a5, aqiDesc: "Excellent air quality due to pedestrian focus.", places: [ {n: "Nyatapola Temple Complex", l: "https://maps.google.com/maps?q=Nyatapola,Bhaktapur&t=&z=13&ie=UTF8&iwloc=&output=embed"}, {n: "Pottery Square Yard", l: "https://maps.google.com/maps?q=Pottery+Square,Bhaktapur&t=&z=13&ie=UTF8&iwloc=&output=embed"} ], rules: ["Heavy cargo vehicles barred from core town.", "Restoration codes mandate brick-only facades."] },
    { name: "Biratnagar", type: "Industrial Engine", imgUrl: "https://www.holidify.com/images/bgImages/BIRATNAGAR.jpg", aqi: a6, aqiDesc: "Moderate industrial residue observed.", places: [ {n: "Koshi Tappu Wildlife Reserve", l: "https://maps.google.com/maps?q=Koshi+Tappu&t=&z=13&ie=UTF8&iwloc=&output=embed"}, {n: "Hatkhola Bazaar Axis", l: "https://maps.google.com/maps?q=Hatkhola,Biratnagar&t=&z=13&ie=UTF8&iwloc=&output=embed"} ], rules: ["Factories must utilize standard smokestack filter blocks.", "Strict illegal dumping fines along industrial lanes."] },
    { name: "Birgunj", type: "Trade Hub Corridor", imgUrl: "https://upload.wikimedia.org/wikipedia/commons/3/37/Shankharacharya_Gate%2C_Birgunj.jpg?utm_source=en.wikivoyage.org&utm_campaign=index&utm_content=original", aqi: a7, aqiDesc: "High transport density emissions active.", places: [ {n: "Ghariarwa Pokhari Precinct", l: "https://maps.google.com/maps?q=Ghariarwa+Pokhari&t=&z=13&ie=UTF8&iwloc=&output=embed"}, {n: "Parsa National Park Perimeter", l: "https://maps.google.com/maps?q=Parsa+National+Park&t=&z=13&ie=UTF8&iwloc=&output=embed"} ], rules: ["Freight vehicles must pass exhaust smoke checks.", "Wastewater disposal into public canals is banned."] },
    { name: "Dharan", type: "Clean Green Town", imgUrl: "https://www.shutterstock.com/image-photo/dharan-nepal-june-3-2020-600nw-1748015117.jpg", aqi: a8, aqiDesc: "Superb baseline due to community forest grids.", places: [ {n: "Budha Subba Temple Peak", l: "https://maps.google.com/maps?q=Budha+Subba,Dharan&t=&z=13&ie=UTF8&iwloc=&output=embed"}, {n: "Bhedetar Scenic Ridge", l: "https://maps.google.com/maps?q=Bhedetar&t=&z=13&ie=UTF8&iwloc=&output=embed"} ], rules: ["Weekly community sorting routines mandatory.", "Public plantation rules active for all sectors."] },
    { name: "Butwal", type: "Economic Crossroad", imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Butwal.jpg/1280px-Butwal.jpg", aqi: a9, aqiDesc: "Construction dust factors checked by tree buffers.", places: [ {n: "Manimukunda Sen Park Grounds", l: "https://maps.google.com/maps?q=Manimukunda+Sen+Park&t=&z=13&ie=UTF8&iwloc=&output=embed"}, {n: "Jitgadhi Killa Historic Fort", l: "https://maps.google.com/maps?q=Jitgadhi&t=&z=13&ie=UTF8&iwloc=&output=embed"} ], rules: ["Construction setups require dust-curtain nets.", "Highway green belt dumping is strictly audited."] },
    { name: "Hetauda", type: "Green City Ideal", imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Hetauda_002.JPG/1280px-Hetauda_002.JPG", aqi: a10, aqiDesc: "Highly preserved air environment.", places: [ {n: "Sahid Smarak Eco Park", l: "https://maps.google.com/maps?q=Sahid+Smarak,Hetauda&t=&z=13&ie=UTF8&iwloc=&output=embed"}, {n: "Gumba Danda Scenic Trails", l: "https://maps.google.com/maps?q=Gumba+Danda&t=&z=13&ie=UTF8&iwloc=&output=embed"} ], rules: ["Plastic container sales inside eco parks outlawed.", "Mandatory roof-garden systems on new facilities."] },
    { name: "Janakpur", type: "Mithila Pilgrimage", imgUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Janki_Mandir.JPG", aqi: a11, aqiDesc: "Tempered dry dust near temple squares.", places: [ {n: "Janaki Mandir Main Complex", l: "https://maps.google.com/maps?q=Janaki+Mandir&t=&z=13&ie=UTF8&iwloc=&output=embed"}, {n: "Ganga Sagar Holy Pond Walk", l: "https://maps.google.com/maps?q=Ganga+Sagar,Janakpur&t=&z=13&ie=UTF8&iwloc=&output=embed"} ], rules: ["Zero plastic items allowed near holy water ponds.", "Electric vehicles only in historical core plazas."] },
    { name: "Dhangadhi", type: "Western Frontier", imgUrl: "https://republicaimg.nagariknewscdn.com/shared/web/uploads/media/Dhangadhi_20230514101806.jpg", aqi: a12, aqiDesc: "Seasonal open dust components present.", places: [ {n: "Jokhar Lake Eco Reserve", l: "https://maps.google.com/maps?q=Jokhar+Lake&t=&z=13&ie=UTF8&iwloc=&output=embed"}, {n: "Aircraft Museum Grounds", l: "https://maps.google.com/maps?q=Aircraft+Museum,Dhangadhi&t=&z=13&ie=UTF8&iwloc=&output=embed"} ], rules: ["Agricultural waste burning is entirely prohibited.", "Wetlands must not face residential development."] },
    { name: "Itahari", type: "Eastern Transit Node", imgUrl: "http://upload.wikimedia.org/wikipedia/commons/a/ad/Itahari..jpg", aqi: a13, aqiDesc: "Highway traffic creates minor dust.", places: [ {n: "Ocean Park Leisure Arena", l: "https://maps.google.com/maps?q=Ocean+Park,Itahari&t=&z=13&ie=UTF8&iwloc=&output=embed"}, {n: "Taltalaiya Wetland Parks", l: "https://maps.google.com/maps?q=Taltalaiya&t=&z=13&ie=UTF8&iwloc=&output=embed"} ], rules: ["Littering from moving buses incurs heavy fines.", "Commercial signboards must respect green lines."] },
    { name: "Nepalgunj", type: "Terai Gateway Axis", imgUrl: "https://nepaltraveller.com/laravel-filemanager/photos/28/Nepalgunj/800px-Bageshwori_Temple_Nepalgunj.jpg", aqi: a14, aqiDesc: "High dry temperatures expand dust load metrics.", places: [ {n: "Bageshwori Temple Compound", l: "https://maps.google.com/maps?q=Bageshwori+Temple&t=&z=13&ie=UTF8&iwloc=&output=embed"}, {n: "Banke National Park Buffers", l: "https://maps.google.com/maps?q=Banke+National+Park&t=&z=13&ie=UTF8&iwloc=&output=embed"} ], rules: ["Water spray routines required on dusty projects.", "Public open incineration carries a high penalty."] },
    { name: "Bhimdatta", type: "Far-West Outpost", imgUrl: "https://upload.wikimedia.org/wikipedia/commons/6/60/Dodhara_Chadani_Bridge%2C_Kanchanpur.jpg", aqi: a15, aqiDesc: "Fresh mountain airflow tracks from standard ranges.", places: [ {n: "Shuklaphanta Grasslands", l: "https://maps.google.com/maps?q=Shuklaphanta&t=&z=13&ie=UTF8&iwloc=&output=embed"}, {n: "Mahakali Suspension Bridge", l: "https://maps.google.com/maps?q=Dodhara+Chadani+Bridge&t=&z=13&ie=UTF8&iwloc=&output=embed"} ], rules: ["Plastic items forbidden inside safari lines.", "River gravel mining is restricted to legal windows."] },
    { name: "Siddharthanagar", type: "Lumbini Access Zone", imgUrl: "https://lumbinidevtrust.gov.np/upload_file/images/slider/1721894939_276597348_lumbini.jpg", aqi: a16, aqiDesc: "Industrial mills create baseline particulates.", places: [ {n: "Lumbini Monastic Sacred Garden", l: "https://maps.google.com/maps?q=Lumbini+Sacred+Garden&t=&z=13&ie=UTF8&iwloc=&output=embed"}, {n: "Maya Devi Temple Grounds", l: "https://maps.google.com/maps?q=Maya+Devi+Temple&t=&z=13&ie=UTF8&iwloc=&output=embed"} ], rules: ["The Lumbini buffer loop is a zero-emission zone.", "No heavy factories permitted within city limits."] }
];

let defaultFeaturedCities = [];

function openMapModal(landmarkName, embedUrl) {
    document.getElementById('modalMapTitle').textContent = `📍 Navigate: ${landmarkName}`;
    document.getElementById('customMapIframe').src = embedUrl;
    document.getElementById('customMapModal').style.display = 'flex';
}

function closeMapModal() {
    document.getElementById('customMapModal').style.display = 'none';
    document.getElementById('customMapIframe').src = ''; 
}

function setupPageReloadRotation() {
    const shuffled = [...nepalCitiesMasterList].sort(() => 0.5 - Math.random());
    defaultFeaturedCities = shuffled.slice(0, 6); 
    buildCityCardsHTML(defaultFeaturedCities);
}

function buildCityCardsHTML(targetDataSet) {
    const gridContainer = document.getElementById('rotatingCitiesGrid');
    gridContainer.innerHTML = ''; 

    if(targetDataSet.length === 0) {
        gridContainer.innerHTML = `<div class="no-results">No destinations match your criteria inside our current 2026 database.</div>`;
        return;
    }

    targetDataSet.forEach((city, index) => {
        const finalImg = city.imgUrl || `https://images.unsplash.com/featured/?nepal,${encodeURIComponent(city.name)}&sig=${index}`;
        
        // Grouping AQI into Green/Yellow/Red ranges dynamically
        let calculatedAqiClass = "aqi-green";
        if (city.aqi > 50 && city.aqi <= 100) {
            calculatedAqiClass = "aqi-yellow";
        } else if (city.aqi > 100) {
            calculatedAqiClass = "aqi-red";
        }
        
        const cardHtml = `
            <div class="city-eco-card">
                <div class="city-card-banner">
                    <img src="${finalImg}" alt="${city.name}">
                    <span class="city-experience-tag">${city.type}</span>
                </div>
                <div class="city-card-content">
                    <h3 class="city-card-name">${city.name}</h3>
                    
                    <div class="aqi-meter-panel ${calculatedAqiClass}">
                        <div class="aqi-score-badge">AQI ${city.aqi}</div>
                        <div class="aqi-status-text">
                            <strong>Status Matrix</strong>
                            <p>${city.aqiDesc}</p>
                        </div>
                    </div>

                    <div class="city-data-sub-section">
                        <h4>🗺️ Places To Visit:</h4>
                        <ul class="places-redirect-list">
                            ${city.places.map(p => `
                                <li>
                                    <span>${p.n}</span>
                                    <button onclick="openMapModal('${p.n.replace(/'/g, "\\'")}', '${p.l}')" class="map-link-btn">Navigate ➔</button>
                                </li>
                            `).join('')}
                        </ul>
                    </div>

                    <div class="city-data-sub-section rules-box">
                        <h4>📜 Local Eco-Laws:</h4>
                        <ul class="municipal-rules-list">
                            ${city.rules.map(r => `<li>${r}</li>`).join('')}
                        </ul>
                    </div>
                </div>
            </div>
        `;
        gridContainer.innerHTML += cardHtml;
    });
}

function filterCities() {
    const queryText = document.getElementById('citySearchInput').value.toLowerCase().trim();
    
    if (queryText === "") {
        buildCityCardsHTML(defaultFeaturedCities);
    } else {
        const filteredList = nepalCitiesMasterList.filter(city => 
            city.name.toLowerCase().includes(queryText) || 
            city.type.toLowerCase().includes(queryText) ||
            city.aqiDesc.toLowerCase().includes(queryText)
        );
        buildCityCardsHTML(filteredList);
    }
}

window.addEventListener('DOMContentLoaded', () => {
    setupPageReloadRotation();
});

// Hover button functions
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
Button_hover();

// Screen lighting effect
const nav = document.querySelector('.light');
let fadeTimer; 
let appearTime;
let opav = 0;
function FadeOut(){
    fadeTimer = setInterval(()=>{
        opav -= 0.06 
        if(opav <= 0){
            nav.style.setProperty('--opacity', '0');
            clearInterval(fadeTimer); 
        } else {
            nav.style.setProperty('--opacity',opav);
        }
    },50);
}

nav.addEventListener('mousemove', (e) => {
    clearInterval(fadeTimer);
    clearInterval(appearTime);

    const rect = nav.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    nav.style.setProperty('--x', `${x}px`);  
    nav.style.setProperty('--y', `${y}px`);

    appearTime = setInterval(()=>{ 
        if (opav >= 0.8){
            opav = 0.8;
            nav.style.setProperty('--opacity', opav);
            clearInterval(appearTime);
            FadeOut();
        } else if(opav < 0.8){
            opav += 0.05;
            nav.style.setProperty('--opacity',opav);
        }
    },10);   
});

// Dropdown freezing management
function initDropdownFreezeEngine() {
    const allDropdowns = document.querySelectorAll('.nav-item-dropdown');
    const allNavButtons = document.querySelectorAll('.center-buttons .nav-btn');

    if (allDropdowns.length === 0) return;

    allDropdowns.forEach(dropdownWrapper => {
        const megaMenu = dropdownWrapper.querySelector('.mega-menu');
        if (!megaMenu) return;

        dropdownWrapper.addEventListener('mouseenter', () => {
            allDropdowns.forEach(d => d.classList.remove('frozen'));
            dropdownWrapper.classList.add('frozen');
        });

        megaMenu.addEventListener('mouseenter', () => {
            dropdownWrapper.classList.add('frozen');
        });

        allNavButtons.forEach(button => {
            const parentDropdown = button.closest('.nav-item-dropdown');
            if (!parentDropdown) {
                button.addEventListener('mouseenter', () => {
                    dropdownWrapper.classList.remove('frozen');
                });
            }
        });

        document.addEventListener('mousemove', (e) => {
            if (!dropdownWrapper.classList.contains('frozen')) return;
            const menuRect = megaMenu.getBoundingClientRect();
            if (menuRect.height > 0 && e.clientY > (menuRect.bottom + 15)) {
                dropdownWrapper.classList.remove('frozen');
            }
        });
    });

    document.addEventListener('click', (e) => {
        allDropdowns.forEach(dropdownWrapper => {
            if (!dropdownWrapper.contains(e.target)) {
                dropdownWrapper.classList.remove('frozen');
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', initDropdownFreezeEngine);