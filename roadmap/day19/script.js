// complete the getMeaning(word) function
// make a fetch call to fetch the meaning of the word
// parse the meaning and append it to the wordInfo element
async function getMeaning(word) {
    try {
        let response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        let data = await response.json();

        console.log(data);
    } catch (error) {
        console.log('error fetching the meaning', error);
    }
}

let form = document.getElementById('dictform');
let wordInput = document.getElementById('wordinput');
let wordInfo = document.getElementById('meaningforward');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    // get the word the user typed in the search box
    let word = wordInput.value;

    getMeaning(word);
});