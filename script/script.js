const base_url = "https://louisperre.github.io/TechUpdate/script/iim.json";
const home = document.querySelector(".card_container");
const home2 = document.querySelector(".navbar")
const changeColor = document.querySelector(".change");
const r = document.querySelector(':root');
const b = document.querySelector('body');
const cardMichel = document.getElementsByClassName('card');
const Boxarr = [];


function pageLoaded() {
    fetch(base_url)
        .then(res => res.json())
        .then(updateDom)
        .catch(err => console.warn(err.message));


}
//début condition affichage cartes

if (window.location.pathname == "/TechUpdate/index.html" || window.location.pathname == "/TechUpdate/") {
    function updateDom(data) {
        console.log(data)
        home.innerHTML = data.eleves
            .map(user => {
                var link = ''
                if (user.github != '') {
                    link = `<a href="${user.github}" target="_blank" class="btn-floating halfway-fab waves-effect waves-light red"><i class="fab fa-github"></i></a>`
                } else {
                    link = `<a href="${user.linkedin}" target="_blank" class="btn-floating halfway-fab waves-effect waves-light red"><i class="fab fa-linkedin"></i></a>`
                }
                return `
                <div class="row">
                    <div class="col s12 m4">
                    <div class="card">
                        <div class="card-image">
                        <img src="${user.photo}">
                            ${link} 
                        </div>
                        <div class="card-content">
                            <span class="card-title">${user.nom}</span>
                        <p>${user.prenom}</p>
                        </div>
                    </div>
                    </div>
                </div>`;
            }).join("");


        for (let i = 0; i < cardMichel.length; i++) {
            Boxarr.push(cardMichel[i]);
        }

        if (localStorage.getItem('dark') == 'true') {
            r.style.setProperty('--bg-body', '#101014');
            Boxarr.forEach(card => {
                card.style.backgroundColor = "var(--bg-primary)"
            });
            b.style.color = 'white';
            home.classList.add("dark");
        }
    };



} else if (window.location.pathname == "/TechUpdate/direction.html") {
    function updateDom(data) {
        console.log(data)
        home.innerHTML = data.direction
            .map(user => {
                var link = ''
                if (user.github != '') {
                    link = `<a href="${user.github}" target="_blank" class="btn-floating halfway-fab waves-effect waves-light red"><i class="fab fa-github"></i></a>`
                } else {
                    link = `<a href="${user.linkedin}" target="_blank" class="btn-floating halfway-fab waves-effect waves-light red"><i class="fab fa-linkedin"></i></a>`
                }
                return `
                <div class="row">
                    <div class="col s12 m4">
                    <div class="card">
                        <div class="card-image">
                        <img src="${user.photo}">
                            ${link} 
                        </div>
                        <div class="card-content">
                            <span class="card-title">${user.nom}</span>
                        <p>${user.prenom}</p>
                        </div>
                    </div>
                    </div>
                </div>`;
            }).join("");


        for (let i = 0; i < cardMichel.length; i++) {
            Boxarr.push(cardMichel[i]);
        }

        if (localStorage.getItem('dark') == 'true') {
            r.style.setProperty('--bg-body', '#101014');
            Boxarr.forEach(card => {
                card.style.backgroundColor = "var(--bg-primary)"
            });
            b.style.color = 'white';
            home.classList.add("dark");
        }
    };
    console.log('direction')
} else if (window.location.pathname == "/TechUpdate/professeurs.html") {
    function updateDom(data) {
        console.log(data)
        home.innerHTML = data.prof
            .map(user => {
                var link = ''
                if (user.github != '') {
                    link = `<a href="${user.github}" target="_blank" class="btn-floating halfway-fab waves-effect waves-light red"><i class="fab fa-github"></i></a>`
                } else {
                    link = `<a href="${user.linkedin}" target="_blank" class="btn-floating halfway-fab waves-effect waves-light red"><i class="fab fa-linkedin"></i></a>`
                }
                return `
                <div class="row">
                    <div class="col s12 m4">
                    <div class="card">
                        <div class="card-image">
                        <img src="${user.photo}">
                            ${link} 
                        </div>
                        <div class="card-content">
                            <span class="card-title">${user.nom}</span>
                        <p>${user.prenom}</p>
                        </div>
                    </div>
                    </div>
                </div>`;
            }).join("");


        for (let i = 0; i < cardMichel.length; i++) {
            Boxarr.push(cardMichel[i]);
        }

        if (localStorage.getItem('dark') == 'true') {
            r.style.setProperty('--bg-body', '#101014');
            if (Boxarr) {
                Boxarr.forEach(card => {
                    card.style.backgroundColor = "var(--bg-primary)"
                });
                
            }
            home2.classList.add("dark")
            b.style.color = 'white';
        }
    };
} else if (window.location.pathname == "/TechUpdate/modif.html"){
    if (home2.classList.contains('dark')) {
        r.style.setProperty('--bg-body', '#101014');
        localStorage.setItem('dark', true)
        b.style.color = 'white';
    }
}

//fin condition affichage cartes

window.addEventListener("load", pageLoaded);



changeColor.addEventListener("click", function () {

    if (window.location.pathname != "/TechUpdate/modif.html"){
        if (!home2.classList.contains('dark')) {
            localStorage.setItem('dark', true)
            r.style.setProperty('--bg-body', '#101014');
            if (Boxarr){
                Boxarr.forEach(card => {
                    card.style.backgroundColor = "var(--bg-primary)"
                });
            }
            home2.classList.add("dark")
            b.style.color = 'white';
        } else if (home2.classList.contains('dark')) {
            localStorage.setItem('dark', false)
            r.style.setProperty('--bg-body', '#fff')
            if (Boxarr){
                Boxarr.forEach(card => {
                    card.style.backgroundColor = "#fff"
                });
            }
            home2.classList.remove("dark")
            
            b.style.color = 'black';
        }
    }
})
