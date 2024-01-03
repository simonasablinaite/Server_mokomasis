import { server } from "./lib/server.js";
console.clear();
const app = {};
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
};
app.init();
export default app;
