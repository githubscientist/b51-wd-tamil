// function getData(todosURLS) {
//     let results = [];

//     todosURLS.forEach(url => {
//         results.push(fetch(url).then(response => response.json()));
//     });

//     return Promise.all(results);
// }

// let todosURLS = ['https://jsonplaceholder.typicode.com/todos/1', 'https://jsonplaceholder.typicode.com/todos/2', 'https://jsonplaceholder.typicode.com/todos/3'];

// getData(todosURLS)
//     .then(data => console.log(data));

fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(countries => {
        let countryNames = [];

        countries.forEach(country => {
            countryNames.push(country.name.common);
        })

        let neededCountries = ['Italy', 'Norway', 'Kuwait', 'India'];

        countries.forEach(country => {
            if (neededCountries.includes(country.name.common)) {
                console.log(country.name.common + ' ' + country.flag);
            }
;        })
    });