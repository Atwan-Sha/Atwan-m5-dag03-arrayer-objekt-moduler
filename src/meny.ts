// Dag 3, del 2: Funktioner som arbetar med menyn. Gör alla tester gröna på tests.html.
// Använd filter, map, find, reduce och sort där det passar.
// Typerna (Ratt, OrderRad) finns i typer.ts. Röda understrykningar tills du skrivit return är normalt.
import { formateraPris } from './pris';
import type { Ratt, OrderRad } from './typer';
// import {meny} from './data';

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
	
}

// 8. Antal rätter per kategori som ett objekt: { bakverk: 3, dryck: 2, lunch: 3 } (reduce)
export function perKategori(meny: Ratt[]): Record<string, number> {
	// TODO
}

// 9. En kopia av rätten med nytt pris. Originalet får INTE ändras (spread: { ...ratt }).
export function medNyttPris(ratt: Ratt, nyttPris: number): Ratt {
	// TODO
}
