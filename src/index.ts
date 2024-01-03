import { server } from "./lib/server.js";

console.clear();
/*
TYPESCRIPTO UZRASYMO PAVYZDYS. Siuo atveju skaiciuos suma dvieju skaiciu

//1. Apsirasomas app objektas
type App = {
   sum: (a: number, b:number) => number;
}

// 2. Pritaikome appui apsirasyta objekta
const app = {} as App;


// 3. Panaudojame logika
app.sum = function (a: number, b: number) {
   return a +b;
}

//4. Gauname rezultata
console.log(app.sum(2, 3));

export default app;
*/

type App = {
   init: () => void;
} 

const app = {} as App;

app.init = () => {
   // susikurti reikiamus/trūkstamus folderius ir failus 
   // atsinaujinti informacija
   // duombaze:
   // - prisijungti
   // - pairuosti struktura
   // - surassyti pradinius duomenis
   // Paleisti serverio logika
  server.init();
   // laike pasikartojantys procesai:
   // - issivalyti nereikalingus failus/info
   // - atnaujinti failus/info
   // - backup darymas (dvejose vietose saugoti info)
}

app.init();

export default app;






