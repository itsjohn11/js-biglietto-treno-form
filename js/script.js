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



// const generateButton = document.getElementById("generate-btn");
// console.log(generateButton);
// const cancelButton = document.getElementById("cancel-btn");
// console.log(cancelButton);
const ticketForm = document.getElementById("ticket-form");
console.log(ticketForm);

ticketForm.addEventListener("generate", "cancel", manageGenerate );

function manageGenerate(){
    console.log("generate", "cancel");
}







const nameSurnameInput = document.getElementById("nameSurname");
console.log("nameSurnameInput");
const kmToTravelInput = document.getElementById("kmToTravel");
console.log("kmInput");
// const ageRangeOption = document.getElementById("AgeRange");
// console.log("ageRangeSelect");

// generateButton.addEventListener("click", function(){
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

function handleticketform(event){
    event.preventDefault();
    console.log("ticketform");
    const nameSurname = nameSurnameInput.ariaValueMax;
    const km = kmInput.ariaValueMax;
    const data = `${nameSurname} ${km}`;
    console.log(data);
}





// console.log("ciao");

// const tittleElement = document.getElementById("tittle");
// console.log(tittleElement.innerText);
// tittleElement.innerHTML = "Calcola il prezzo del tuo biglietto"



// const tittleElement = document.getElementById("tittle");
// console.log(tittleElement.innerText);
// tittleElement.innerHTML = "ciao, calcola il biglietto del tuo treno";
    

