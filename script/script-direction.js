const base_url = "https://louisperre.github.io/TechUpdate/script/iim.json";
const home = document.querySelector(".card_container");
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

function updateDom(data) {
    console.log(data)
    home.innerHTML = data.direction
        .map(anime => {
            return `
        <div class="row">
            <div class="col s12 m4">
              <div class="card">
                <div class="card-image">
                  <img src="${anime.photo}">
                  <a id="${anime.mal_id}" href="${anime.github}" target="_blank" class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">+</i></a>
                </div>
                <div class="card-content">
                    <span class="card-title">${anime.nom}</span>
                  <p>Rang du jour : ${anime.prenom}</p>
                </div>
              </div>
            </div>
          </div>
        `;
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
}


window.addEventListener("load", pageLoaded);



changeColor.addEventListener("click", function () {

    if (!home.classList.contains('dark')) {
        localStorage.setItem('dark', true)
        r.style.setProperty('--bg-body', '#101014');
        Boxarr.forEach(card => {
            card.style.backgroundColor = "var(--bg-primary)"
        });
        b.style.color = 'white';
        home.classList.add("dark");
    } else if (home.classList.contains('dark')) {
        localStorage.setItem('dark', false)
        r.style.setProperty('--bg-body', '#fff');
        Boxarr.forEach(card => {
            card.style.backgroundColor = "#fff"
        });
        b.style.color = 'black';
        home.classList.remove("dark");
    }

})
