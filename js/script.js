/*
esercizio di oggi: calcolo del prezzo del biglietto del treno
cartella/repo js-biglietto-treno-form

Il programma dovrà mostrare una form da compilare usando i corretti campi HTML di input con cui chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero. Utilizzate Bootstrap come libreria UI.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.

Il recap dei dati e l'output del prezzo finale va stampato in pagina (formattato con massimo due decimali, per indicare centesimi sul prezzo).

Vi consigliamo di seguire questo ordine nella risoluzione dell'esercizio:
1. Preparazione dell'interfaccia utente con utilizzo di classi di bootstrap.
2. Al click sul bottone "calcola" prelevare tutti i dati dagli input e stamparli in console.
3. Eseguire il calcolo del prezzo e stamparlo in console.
4. Stampare il risultato in pagina.
*/



//Preleviamo input e form

const ticketForm = document.getElementById("ticket-form");
console.log(ticketForm);

const nameSurnameInput = document.getElementById("nameSurname");
console.log("nameSurnameInput");
const kmToTravelInput = document.getElementById("kmToTravel");
console.log("kmToTraveInput");

// const ageRangeOption = document.getElementById("AgeRange");
// console.log("ageRangeSelect");

//Preleviamo i risultati e stampiamoli nel biglietto
const nameSurnameElem = document.querySelector(".table .passenger");
console.log(nameSurnameElem);


ticketForm.addEventListener("generate",  manageSend);

function manageSend(event){   
    event.preventDEfault();
    const nameSurname = nameSurnameInput.value;
    const kmToTravel = kmToTravelInput.value;
    
    // Compilo biglietto
    nameSurnameElem.innerText = nameSurname;

}



// Calcolo del biglietto

const kmPrice = 0.21;
const userKmStr = prompt(`How many km will you travel?`);
const userAgeStr = prompt(`How old are you?`);
console.log(userKmStr, userKmStr);

const userKm = parseInt(userKmStr);
const userAge = parseInt(userAgeStr);

const basePrice = userKm * kmPrice;
console.log(basePrice);

let discount = 0;
if (userAge < 18) {
    discount = 20;
} else if (userAge > 65) {
    discount = 40;
}
console.log(discount);

const finalPrice = basePrice - (basePrice * discount / 100);

const message = Il prezzo 


// const finalPrice = kmStr * 0.21;
// console.log(finalPrice);

// if (finalPrice){
//     const finalPrice = kmStr * 0.21; 
//     let x = 3.14; 
// }
// if (ageStr < 18 ){  
//     const multipli = finalPrice * 80 / 100;
//     console.log(multipli);
// }else if (ageStr > 65) {
//     const multipli = finalPrice * 60 / 100;
//     console.log(multipli);
// }
// console.log(finalPrice);






// const generateButton = document.getElementById("generate-btn");
// console.log(generateButton);
// const cancelButton = document.getElementById("cancel-btn");
// console.log(cancelButton);



// generateButton.addEventListener("generate-btn", function(){
//     console.log("dentro click listener");
//     const nameSurname = nameSurnameInput.value;
//     console.log(nameSurname); 
//     const kmToTravel = kmToTravelInput.value;
//     console.log(kmToTravel);
//     const ageRange = ageRangeOption.value;
//     console.log(ageRange);
// })


// menuButton.addEventListener("click", function ()) {
//     console.log("click");

// }



// ticketform.addEventListener("submit", handleticketform);

// function handleticketform(event){
//     event.preventDefault();
//     console.log("ticketform");
//     const nameSurname = nameSurnameInput.ariaValueMax;
//     const km = kmInput.ariaValueMax;
//     const data = `${nameSurname} ${km}`;
//     console.log(data);
// }





// console.log("ciao");

// const tittleElement = document.getElementById("tittle");
// console.log(tittleElement.innerText);
// tittleElement.innerHTML = "Calcola il prezzo del tuo biglietto"



// const tittleElement = document.getElementById("tittle");
// console.log(tittleElement.innerText);
// tittleElement.innerHTML = "ciao, calcola il biglietto del tuo treno";
    

