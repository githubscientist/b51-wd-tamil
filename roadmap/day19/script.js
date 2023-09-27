// get the references of the html elements
let form = document.getElementById('dictform');
let wordInput = document.getElementById('wordinput');
let wordInfo = document.getElementById('meaningforward');


// complete the getMeaning(word) function
// make a fetch call to fetch the meaning of the word
// parse the meaning and append it to the wordInfo element
async function getMeaning(word) {
    try {
        // make an api call to get the response with the word, meanings, definitions,etc.
        let response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);

        // parse the response data to javascript object
        let data = await response.json();
        console.log(data);

        // get the meanings from the data object and store it in a variable
        let meanings = data[0].meanings;

        // get the audio url from the data and store it in a reference
        let audioSource = data[0].phonetics[0].audio.toString();
        // console.log(meanings);
        
        let paragraph = document.createElement('div');

        // create an unordered list
        let list = document.createElement('ul');

        // remove the bullets in the unordered list
        list.style.listStyleType = 'none';

        // loop through the meanings and for every meaning
        // create a list item and append it to the main list
        for (let partOfSpeech of meanings) {
            // console.log(partOfSpeech);
            let listItem = document.createElement('li');

            // set the content of the list item
            listItem.innerHTML = `PartOfSpeech: <b>${partOfSpeech.partOfSpeech}</b>`;

            // create a ordered list
            // create it as a sub list so that we can append it to the main list - unordered list
            let subList = document.createElement('ol');

            // loop through the definitions of every part of speech
            // create a list item and append it to the ordered list
            for (let definition of partOfSpeech.definitions) {
                let subListItem = document.createElement('li');
                subListItem.innerHTML = `${definition.definition}`;
                subList.appendChild(subListItem);
            }

            // append the sublist to the list item
            listItem.appendChild(subList);

            // append the list items to the main list
            list.appendChild(listItem);
        }

        // reset the wordInfo div, so that the meanings everytime wont get appended below one another
        wordInfo.innerHTML = ``;

        // set the content of the paragraph reference named div element
        // the element includes an audio icon, audio element and the word the user have searched for the meaning
        paragraph.innerHTML = `
            <i class="fa-solid fa-volume-high" id="audio-icon"></i>
            <audio id="audio">
                <source src=${audioSource} type='audio/mpeg'>
            </audio>
            Word: <b>${data[0].word}</b>
        `;

        wordInfo.appendChild(paragraph);
        wordInfo.appendChild(list);

        // attach the click event to the audio icon
        document.getElementById('audio-icon').addEventListener('click', () => {
            // play the audio by selecting the audio element and calling the play method
            document.getElementById('audio').play();
        });

    } catch (error) {
        console.log('error fetching the meaning', error);
    }
}

// attach a submit event to the form element
form.addEventListener('submit', (event) => {
    // prevents the default submit behaviour of the form
    // for example: refereshing the whole page after the form gets submitted
    event.preventDefault();

    // get the word the user typed in the search box
    let word = wordInput.value;

    getMeaning(word);
});

// get the reference of the button
let buttonSearch = document.getElementById('buttonSearch');

// attach the click event to the search button
buttonSearch.addEventListener('click', (event) => {
    event.preventDefault();

    // get the word the user typed in the search box
    let word = wordInput.value;

    getMeaning(word);
});