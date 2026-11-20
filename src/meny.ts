// Dag 3, del 2: Funktioner som arbetar med menyn. Gör alla tester gröna på tests.html.
// Använd filter, map, find, reduce och sort där det passar.
// Typerna (Ratt, OrderRad) finns i typer.ts. Röda understrykningar tills du skrivit return är normalt.
import { formateraPris } from './pris';
import type { Ratt, OrderRad } from './typer';
import { studentPris } from './rabatt';
// import { kategorier } from './data';
import { meny } from './data';

// 1. Alla vegetariska rätter (filter). Returnerar en ny array.
export function vegetariskaRatter(meny: Ratt[]): Ratt[] {
	const menyVeg = meny.filter((r) => r.vegetarisk);
	return menyVeg;
}

// 2. Bara namnen, som en array av text (map). ["Kardemummabulle", ...]
export function rattNamn(meny: Ratt[]): string[] {
	const namn = meny.map((r) => r.namn);
	return namn;
}

// 3. En prislista som text: "Kardemummabulle – 35 kr" (map + formateraPris)
export function prislista(meny: Ratt[]): string[] {
	const prislista = meny.map((r) => `${r.namn} – ${r.pris} kr`);
	return prislista;
}

// 4. Hitta en rätt via id (find). Returnerar objektet, eller undefined om det saknas.
export function hittaRatt(meny: Ratt[], id: number): Ratt | undefined {
	const ratt = meny.find((r) => r.id === id);
	return ratt;
}

// 5. Den billigaste rätten (reduce). Returnerar objektet. Tom lista ger undefined.
export function billigast(meny: Ratt[]): Ratt | undefined {
	const lagstaPris = meny.reduce((b, r) => (r.pris < b.pris ? r : b), meny[0]);
	return lagstaPris;
}

// 6. Sortera efter pris, billigast först. Returnerar en NY array.
//    Den ursprungliga listan får INTE ändras (sort ändrar originalet, så kopiera först).
export function sorteraEfterPris(meny: Ratt[]): Ratt[] {
	const sorterad = [...meny];
	sorterad.sort((a, b) => a.pris - b.pris);
	return sorterad;
}
// console.log(sorteraEfterPris(meny))

// 7. Totalpris för en order. order = [{ id: 1, antal: 2 }, { id: 5, antal: 1 }]
//    Slå upp priset för varje id i menyn. Okända id räknas som 0 kr.
export function totalPris(order: OrderRad[], meny: Ratt[]): number {
	const summa = order.reduce((total: number, orderRad): number => {
		const ratt = meny.find((menyRad) => menyRad.id === orderRad.id);
		if (ratt) {
			return total + ratt.pris * orderRad.antal;
		}
		return total;
	}, 0);
	return summa;
}

// 8. Antal rätter per kategori som ett objekt: { bakverk: 3, dryck: 2, lunch: 3 } (reduce)
export function perKategori(meny: Ratt[]): Record<string, number> {
	const kategoriObj = meny.reduce(
		(antal, ratt) => {
			antal[ratt.kategori] += 1;
			return antal;
		},
		{ bakverk: 0, dryck: 0, lunch: 0 },
	);
	return kategoriObj;
}

// 9. En kopia av rätten med nytt pris. Originalet får INTE ändras (spread: { ...ratt }).
export function medNyttPris(ratt: Ratt, nyttPris: number): Ratt {
	return { ...ratt, pris: nyttPris };
}
// att göra nya kopior förhindrar sidoeffekter i andra delar av koden som refererar till menyn

// 10. Moduler:
const studentOrder = [
	{ id: 1, antal: 2 },
	{ id: 5, antal: 1 },
];
const studentTotal = formateraPris(studentPris(totalPris(studentOrder, meny)));
console.log(studentTotal);

//* Prova fel:
// Ta bort type="module" i index.html:
//! Uncaught SyntaxError: Cannot use import statement outside a module (at main.ts:2:1)
// Servern tolkar det som "gamla" javascript som inte stöder moduler, istället för nya ES-standarden

// Skriv fel filnamn i import:
//! GET http://localhost:5173/src/meny.ts net::ERR_ABORTED 500 (Internal Server Error)
//! [plugin:vite:import-analysis] Failed to resolve import "./dat" from "src/meny.ts". Does the file exist?
// Servern kraschar och ger fel 500 när den inte hittar den felstavade filen, vite fångar upp felet och förklarar

// Öppna index.html genom att dubbelklicka (utan servern):
//! Access to script at 'file:///C:/src/main.ts' from origin 'null' has been blocked by CORS policy:
//! Cross origin requests are only supported for protocol schemes: chrome, chrome-experimental-site-token-provider,
//! chrome-extension, chrome-untrusted, data, http, https, isolated-app.
// CORS (Cross-Origin Resource Sharing) policyn är en säkerhetsmekanism
// för att förhindra delning mellan olika domäner om inte en explicit allow-header sätts
// som jag förstår det tolkar webbläsaren de lokala filerna som olika domäner om de inte är på en server
