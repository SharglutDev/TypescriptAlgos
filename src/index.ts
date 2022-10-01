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
  return result;
}

console.log(Search("li", names));
