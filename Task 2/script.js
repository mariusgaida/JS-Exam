/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */
const clickButton = document.querySelector('#btn__element');
const stateDiv = document.querySelector('#btn__state');

let counter = 0;

clickButton.addEventListener('click',(event) => {
    counter +=1;
    return stateDiv.innerText = `${counter}`;
});
