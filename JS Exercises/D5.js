/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish']

for (let i =0; i<pets.length; i++){

console.log('animale n.',i+1,pets[i])

}

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

// let alfapets = pets.sort()
// console.log(alfapets)



/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

// let reversepets = pets.reverse()
// console.log(reversepets)

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

let temp = pets[0]

pets[0] = pets[3]

pets[3] = temp

console.log(pets)





/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]




for (let i =0; i<cars.length; i++){


cars[i].licensePlate = 'FC345KB'

}

console.log(cars)

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/

cars.push({brand: 'mercedes',model: 'class A',licensePlate: 'FC345KB',color: 'gray', trims: ['amg','tdi']})

console.log(cars)



for (let i =0; i<cars.length; i++){

cars[i].trims.pop()

}
console.log(cars)





/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = []
for (let i =0; i<cars.length; i++){
const j = 0
const firsttrim = cars[i].trims[j]
justTrims.push(firsttrim)

}

console.log(justTrims)

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
for (let i =0; i<cars.length; i++){

let firstletter = cars[i].color
if(firstletter.charAt(0) === 'b'){
console.log('Fizz')
}else
console.log('Buzz')

}



/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]

// 32 escluso dalla stampa in console
   
   let i = 0
   while(numericArray[i] !== 32){

   console.log(numericArray[i])

   
   i++
 }


//32 incluso nella stampa in console
 let x= 0
 let y = 0
   while(x !== 32){

   console.log(numericArray[y])

   x=numericArray[y]
   y++
 }
 




/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ['g', 'n', 'u', 'z', 'd']
const alfabeto=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","u","v","w","x","y","z"];
const charactersArrayPosition = []
 for (let i =0; i<charactersArray.length; i++){

   for (let j =0; j<alfabeto.length; j++){

     switch (charactersArray[i]){

       case alfabeto[j]:
  
           let x = j+1
           charactersArrayPosition.push(x)
       break;

       

     }     
   }
 }

console.log(charactersArrayPosition)

