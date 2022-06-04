// # O(n * log(n)) solution
const form = (document.getElementById('anagram-form') as HTMLFormElement);
let firstWord = document.getElementById('firstWord') as HTMLInputElement;
let secondWord = document.getElementById('secondWord') as HTMLInputElement;
let result: HTMLElement = document.querySelector('p#result span')!;

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const firstOrdered = sortWord((formData.get('firstWord') as string));
  const secondOrdered = sortWord((formData.get('secondWord') as string));

  const answer = `"${firstWord.value}" and "${secondWord.value}" are`;
  if (isAnagram(firstOrdered, secondOrdered)) {
    result.innerHTML = ` YES! ${answer} anagrams!` ;
  } else {
    result.innerHTML = ` NO! ${answer} NOT anagrams!`;
  }

  firstWord.value = '';
  secondWord.value = '';
})

const sortWord = (word: string): string => word.replaceAll(" ", "").toLowerCase().split("").sort().join("");

const isAnagram = (word1: string, word2: string): boolean => word1 === word2;