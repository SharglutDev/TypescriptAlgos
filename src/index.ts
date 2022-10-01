/* Tu vas devoir mettre en place une fonction qui renvoie une liste de prénoms
contenant la sous-chaine de caractère passée en paramètre  
*/

const names: string[] = [
  "Paul",
  "Ludovic",
  "Etienne",
  "Johann",
  "Jeremy",
  "Louis",
  "Floriane",
  "Florian",
  "Nicolas",
  "Mouss",
  "Safae",
  "Mathieu",
  "Eric",
  "Michael",
  "Theo",
  "Ronee",
  "Soeli",
  "Philippe",
  "Josselin",
];

let result: string[] = [];

function Search(search: string, listName: string[]): string[] {
  listName.forEach((name) => {
    name.toLowerCase().includes(search) && result?.push(name);
  });
  console.log(`**** La sous-chaîne "${search}" apparait dans : `);
  return result;
}

console.log(Search("li", names));

/* Tu viens de déposer une certaine somme sur un super livret qui 
rapporte énormément !!!
Tous les ans la somme présente sur ton compte grossit avec le même taux.
Tu vas devoir mettre en place une fonction qui calcule en combien de temps
tu pourras atteindre un certain objectif sans ajouter d'argent entre temps.

Exemple : 
Pour un dépot initial = 100, un taux = 20 et un objectif = 170, la sortie
doit être DepositProfit(deposit, rate, threshold) = 3

Explication : 
Tous les ans ta somme augmente de 20%. Cela signifie que j'aurai: 
année 0 : 100€
année 1 : 120€
année 2 : 144€
année 3 : 172.8€
*/

function DepositProfit(
  deposit: number,
  rate: number,
  threshold: number
): number {
  let newAmount: number = deposit;
  let year: number = 0;
  while (newAmount < threshold) {
    newAmount += newAmount * (rate / 100);
    year++;
  }
  console.log(
    `**** Nombre d'années nécessaires pour atteindre mon objectif de ${threshold}€ au taux de ${rate}% en partant de ${deposit}€ : `
  );
  return year;
}

console.log(DepositProfit(100, 20, 200));
