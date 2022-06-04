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
// # O(n * log(n)) solution
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const answer = `"${firstWord.value}" and "${secondWord.value}" are`;
    if (firstWord.value === secondWord.value) {
        result.innerHTML = ` NO! ${answer} NOT anagrams! They are the same!`;
        clearInputs();
        return;
    }
    const formData = new FormData(form);
    const firstOrdered = sortWord(formData.get('firstWord'));
    const secondOrdered = sortWord(formData.get('secondWord'));
    if (isAnagram(firstOrdered, secondOrdered)) {
        result.innerHTML = ` YES! ${answer} anagrams!`;
    }
    else {
        result.innerHTML = ` NO! ${answer} NOT anagrams!`;
    }
    clearInputs();
});
// # O(n) solution
