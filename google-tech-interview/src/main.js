// # O(n * log(n)) solution
const form = document.getElementById('anagram-form');
let firstWord = document.getElementById('firstWord');
let secondWord = document.getElementById('secondWord');
let result = document.querySelector('p#result span');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const firstOrdered = sortWord(formData.get('firstWord'));
    const secondOrdered = sortWord(formData.get('secondWord'));
    const answer = `"${firstWord.value}" and "${secondWord.value}" are`;
    if (isAnagram(firstOrdered, secondOrdered)) {
        result.innerHTML = ` YES! ${answer} anagrams!`;
    }
    else {
        result.innerHTML = ` NO! ${answer} NOT anagrams!`;
    }
    firstWord.value = '';
    secondWord.value = '';
});
const sortWord = (word) => word.replaceAll(" ", "").toLowerCase().split("").sort().join("");
const isAnagram = (word1, word2) => word1 === word2;
