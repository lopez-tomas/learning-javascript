const form = document.getElementById('anagram-form');
let firstWord = document.getElementById('firstWord');
let secondWord = document.getElementById('secondWord');
let result = document.querySelector('p#result span');
const clearInputs = () => {
    firstWord.value = '';
    secondWord.value = '';
};
const clearWord = (word) => word.replaceAll(" ", "").toLowerCase();
const sortWord = (word) => clearWord(word).split("").sort().join("");
const isAnagram = (word1, word2) => word1 === word2;
const showResult = (answer) => {
    result.innerHTML = answer;
};
// O(n) function
const wordToMap = (word) => {
    let letterMap = {};
    for (let letter of word) {
        if (letterMap[letter] === undefined) {
            letterMap[letter] = 1;
        }
        else {
            letterMap[letter]++;
        }
    }
    return letterMap;
};
const isAnagramV2 = (word1, word2) => {
    let letters1 = clearWord(word1);
    let letters2 = clearWord(word2);
    if (letters1.length !== letters2.length)
        return false;
    let mapWord1 = wordToMap(letters1);
    let mapWord2 = wordToMap(letters2);
    for (let letter of Object.keys(mapWord1)) {
        if (mapWord1[letter] !== mapWord2[letter]) {
            return false;
        }
    }
    return true;
};
// # O(n) solution
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const answer = `"${firstWord.value}" and "${secondWord.value}" are`;
    if (firstWord.value === secondWord.value) {
        showResult(` NO! ${answer} NOT anagrams! They are the same!`);
        clearInputs();
        return;
    }
    if (isAnagramV2(firstWord.value, secondWord.value)) {
        showResult(` YES! ${answer} anagrams!`);
    }
    else {
        showResult(` NO! ${answer} NOT anagrams!`);
    }
    clearInputs();
});
