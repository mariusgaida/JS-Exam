/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
const submitForm = document.querySelector('form');
const formInputValue = document.getElementById('search');
const divOutputElement = document.getElementById('output');


submitForm.addEventListener('submit', (event) => {
    event.preventDefault();
    
    if (isNaN(formInputValue.value)) {
        divOutputElement.innerText = `Please enter numeric value`
    } else {

    amountPounds = Math.round(formInputValue.value * 2.2046*100)/100;
    amountGrams = Math.round(formInputValue.value / 0.0010000*100)/100;
    amountOunce = Math.round(formInputValue.value * 35.274*100)/100;
    divOutputElement.innerText = `${amountPounds} lb
                                    ${amountGrams} g
                                    ${amountOunce} oz`}
});

divOutputElement.style.backgroundColor = '#ffffff';
divOutputElement.style.margin = '0 auto';
divOutputElement.style.width = '15%';
divOutputElement.style.textAlign = 'center';