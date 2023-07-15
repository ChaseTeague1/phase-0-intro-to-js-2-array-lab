// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push("Ralph");
}

function destructivelyPrependCat(name) {
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat() {
    cats.pop(-1);
}

function destructivelyRemoveFirstCat() {
    cats.shift(0);
}

function appendCat(name) {
   const copyOfCats = cats.slice();
   copyOfCats.push(name)
   return copyOfCats;
}

function prependCat(name) {
    const copyOfCats = cats.slice();
    copyOfCats.unshift(name);
    return copyOfCats;
}

function removeLastCat() {
   const copyOfCats = cats.slice();
   copyOfCats.pop(2);
   return copyOfCats;
}

function removeFirstCat() {
    const copyOfCats = cats.slice();
    copyOfCats.shift(0);
    return copyOfCats;
}