/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = './cars.json';
const OUTPUT_TAG = document.getElementById('output');

function fetchData() {
    fetch(ENDPOINT)
        .then(response => response.json())
        .then(data => {
            data.forEach(element => {
                const WRAPPER = document.createElement('div');
                WRAPPER.classList.add("div-wrapper");

                const BRAND_ELEMENT = createElement('div',element.brand);
                WRAPPER.appendChild(BRAND_ELEMENT);

                const LIST_ELEMENT = createElement('ol');       
                WRAPPER.appendChild(LIST_ELEMENT);

                    element.models.forEach(ele => {
                        const LIST_ITEM = createElement('li',ele);
                        BRAND_ELEMENT.appendChild(LIST_ITEM);
                    });

                OUTPUT_TAG.appendChild(WRAPPER);
            });
        })
};

fetchData();

function createElement(ele, text) {
    const elem = document.createElement(ele);
          elem.innerHTML = text;
          return elem
}

    