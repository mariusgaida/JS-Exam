/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';
const SHOW_USERS_BUTTON = document.getElementById('btn');
const MESSAGE_P_TAG = document.getElementById('message');
const OUTPUT_TAG = document.getElementById('output');

function fetchData() {
    SHOW_USERS_BUTTON.addEventListener('click', () => {
    MESSAGE_P_TAG.remove();
    fetch(ENDPOINT)
        .then(response => response.json())
        .then(data => {
            data.forEach(element => {
                const WRAPPER = document.createElement('div');
                WRAPPER.classList.add("div-wrapper");

                const IMG_ELEMENT = createElement('img',element.avatar_url);
                IMG_ELEMENT.classList.add('image');
                WRAPPER.appendChild(IMG_ELEMENT);

                const H2_ELEMENT = createElement('h2',element.login);       
                WRAPPER.appendChild(H2_ELEMENT);

                OUTPUT_TAG.appendChild(WRAPPER);
            });
        })
    })
};

fetchData();

function createElement(ele, text) {
    const elem = document.createElement(ele);
    if(ele === 'img') {
        elem.src = text;
    } else {
        elem.innerHTML = text; 
    }
    return elem
}



