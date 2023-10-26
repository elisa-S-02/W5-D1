/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let crazySum = function (x, y) {
  let sum = 0;
  if (x === y) {
    sum += (x + y) * 3;
    console.log(sum);
  } else {
    sum += x + y;
    console.log(sum);
  }
};
crazySum(5, 5);
/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let boundary = function (x) {
  if ((x < 100 && x > 20) || x === 400) {
    console.log(true);
  } else {
    console.log(false);
  }
};
boundary(464);
/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let reverseString = function (stringa) {
  let string = [];
  let stringInLettere = stringa.split("");
  for (let i = stringInLettere.length - 1; i >= 0; i--) {
    let lettera = stringInLettere[i];
    string.push(lettera);
  }
  return string.join("");
};
let pippo = reverseString("buongiorno");
console.log(pippo);

/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let upperFirst = function (stringa) {
  let frase = [];
  let stringInLettere = stringa.split(" ");
  for (let i = 0; i < stringInLettere.length; i++) {
    let lettera = stringInLettere[i].at(0);
    let letteraUp = lettera.toUpperCase();
    let tagliata = stringInLettere[i].slice(1);
    let intera = letteraUp + tagliata;
    frase.push(intera);
  }
  return frase.join(" ");
};
let pluto = upperFirst("buongiorno signore");
console.log(pluto);
/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let giveMeRandom = function (n) {
  let array = [];
  array.push(Math.floor(Math.random() * 10));

  return array;
};
console.log(giveMeRandom());

//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let area = function (l1, l2) {
  let areaRet = l1 * l2;
  console.log(areaRet);
};
area(4, 4);

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let crazyDiff = function (x) {
  let differenza;
  if (x < 19) {
    differenza = 19 - x;
  } else differenza = x - 19;
  console.log(differenza);
};
crazyDiff(7);

/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let codify = function (stringa) {
  let inputArr = [];
  let inputInLettere = stringa.split(" ");

  let primaParola = inputInLettere[0];
  let parolaLettere = primaParola.split("");
  inputArr.push(parolaLettere);
  let concat = inputArr.concat(["e", "d", "o", "c"]);
  let azz = concat.reverse();
  azz.join("");
  console.log(azz);

  return;
};

codify("wars project");

/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
