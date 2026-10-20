# Dag 3 · Arrayer, objekt och moduler

*Modul 5, UI/UX & Frontendutveckling (JavaScript), Lexicon IT-Proffs*

## Vad du ska göra idag

Du lär dig lagra data i **arrayer** och **objekt**, bearbeta den med `filter`, `map`, `find`, `sort` och `reduce`, och dela upp koden i **moduler** med `import` och `export`. Du skriver nio funktioner som arbetar med kaféets meny, och testsidan talar om när de fungerar.

## Bakgrund

Igår lärde du dig funktioner och loopar. Nästan all riktig kod handlar om **listor av saker**: rätter, användare, produkter, inlägg. I JavaScript är en lista en *array* och en sak är ett *objekt*. Menyn på Kafé Kardemumma ligger idag hårdkodad i HTML. Idag flyttar den in i data, så att koden kan filtrera, sortera och räkna på den. Det är första steget mot en sida som byggs av data.

## Så arbetar du (samma som alltid)

1. **Forka** dagens repo på GitHub (*Fork → Create fork*).
2. **Klona din fork:** *Code → HTTPS → kopiera adressen*. I terminalen (Ctrl+ö i VS Code): `git clone <adressen>`. Öppna den nya mappen i VS Code och starta *Live Server*.
3. **Gör uppgiften.** Spara och kontrollera i webbläsaren och Console (F12) efter varje steg. Gör en commit efter varje avslutat steg: `git add .` och `git commit -m "Beskriv vad du gjorde"`.
4. **Skicka upp** när du är klar: `git push`.
5. **Lämna in i Microsoft Forms.**

Fastnar du: skriv ner exakt var och vad du försökt (och vilket felmeddelande du fick), och ta det först i nästa handledda pass.

Filer som använder `import` fungerar bara när sidan öppnas med *Live Server*. Dubbelklickar du på en HTML-fil hamnar du på `file://` och får ett CORS-fel i Console.

## Uppgiften steg för steg

### Steg 1. Arrayer i Console

Öppna `main.js` och gör uppgift 1: skapa en array med drycker, lägg till och ta bort värden med `push` och `pop`, och använd `indexOf`, `includes` och `join`. Kontrollera i Console. Kom ihåg att öppna med Live Server, moduler fungerar inte annars.

### Steg 2. Objekt i Console

Uppgift 2 i `main.js`: skapa ett objekt, läs egenskaper med punkt och hakparenteser, ändra och lägg till egenskaper och skriv ut `Object.keys(kopp)`. Skriv med egna ord i en kommentar när du använder punkt och när du använder hakparenteser.

### Steg 3. Arrayer av objekt

Uppgift 3: `data.js` exporterar kaféets meny som en array av åtta objekt. Importera den och skriv ut antalet, den första rätten, och loopa med `for...of`. Titta noga på hur `data.js` är uppbyggd. Commit: `git commit -m "Dag 3: arrayer och objekt"`.

### Steg 4. Öppna testsidan

Starta Live Server på `tests.html`. De flesta tester är röda. Läs `tests.js`: vad förväntas av `vegetariskaRatter`? Skriv en gissning i en kommentar i `meny.js` om vilken array-metod som passar innan du börjar.

### Steg 5. filter och map

I `meny.js`: skriv `vegetariskaRatter` (filter), `rattNamn` (map) och `prislista` (map som använder `formateraPris` importerad från `pris.js`). Ladda om testsidan efter varje funktion. Commit när de tre är gröna.

### Steg 6. find och reduce

Skriv `hittaRatt` (find) och `billigast` (reduce). Tänk på tom lista: vad ska `billigast([])` ge? Läs testet. Om reduce känns svårt: skriv först en vanlig `for`-loop som gör samma sak, och skriv sedan om den.

### Steg 7. sort utan att förstöra originalet

Skriv `sorteraEfterPris`. `sort` *ändrar* arrayen den körs på, så du måste kopiera först med `[...meny]`. Ett av testerna kontrollerar att originalet är intakt. Provoka felet med flit (ta bort kopieringen) och se testet bli rött.

### Steg 8. reduce på riktigt: totalpris och antal per kategori

Skriv `totalPris(order, meny)` och `perKategori(meny)`. `perKategori` ska bygga ett objekt som `{ bakverk: 3, dryck: 2, lunch: 3 }`. Ta det i små steg och skriv ut mellanresultat med `console.log` inuti `reduce`.

### Steg 9. Ändra utan att ändra: medNyttPris

Skriv `medNyttPris(ratt, nyttPris)`. Den ska returnera en *kopia* med nytt pris, och originalet får inte ändras. Använd spread: `{ ...ratt, pris: nyttPris }`. Förklara i en kommentar varför det är bättre än att skriva `ratt.pris = nyttPris`.

### Steg 10. Moduler på riktigt

Skapa en ny fil `rabatt.js` med en exporterad funktion `studentPris(pris)` (10 % rabatt). Importera den i `main.js` och använd den på menyn. Prova sedan tre fel med flit och läs felen: ta bort `type="module"` i `index.html`, skriv fel filnamn i `import`, och öppna `index.html` genom att dubbelklicka (utan Live Server). Skriv vad varje fel betydde.

## Kontrollista: så vet du att du är klar

- [ ] Alla 17 tester på `tests.html` är gröna.
- [ ] `main.js` skriver ut rätt i Console för uppgift 1–3.
- [ ] Du använder `filter`, `map`, `find` och `reduce` och kan förklara när du väljer vilken.
- [ ] `sorteraEfterPris` och `medNyttPris` ändrar inte originalet.
- [ ] `rabatt.js` exporteras och importeras, och du har sett de tre felmeddelandena.
- [ ] Du har gjort minst sex commits med beskrivande meddelanden.

## Tips om du fastnar

- `undefined` i testet? Du glömde `return`, eller så skrev du `{ ... }` med klamrar i en pilfunktion utan `return`.
- `x.map is not a function` betyder att `x` inte är en array. Skriv ut `typeof x` och `x`.
- `reduce` får två saker: en funktion och ett startvärde. Startvärdet är ofta `0` eller `{}`.
- `Failed to resolve module specifier` eller `Cannot use import statement outside a module`: kontrollera `type="module"`, sökvägen (`./meny.js`) och att du kör Live Server.
- `does not provide an export named` betyder att namnet i `import { ... }` inte matchar `export` i den andra filen.

## Inlämning

**Deadline: imorgon klockan 09.00.** Allt lämnas in i Microsoft Forms. Du behöver inte redovisa något muntligt.

I formuläret fyller du i:

1. Länk till din fork av det här repot.
2. Reflektion: Vilken array-metod (`filter`, `map`, `find`, `reduce`, `sort`) kändes mest naturlig, vilken svårast, och hur skulle du förklara skillnaden mellan `map` och `filter` för en kamrat?

## Vill du mer? (frivilligt)

- Skriv `rattMedHögstPris(meny)` utan att använda `sort`.
- Skriv `gruppera(meny)` som returnerar `{ bakverk: [...rätter], dryck: [...], lunch: [...] }`.
- Läs om `some` och `every` på MDN och skriv en funktion som svarar på "finns det något glutenfritt?".
