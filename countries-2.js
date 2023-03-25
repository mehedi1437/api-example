
const loadCountries = ()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data));
}

const displayCountries = countries =>{
    const countryContainer = document.getElementById('all-countries');
    countries.forEach(country => {
        console.log(country);
    
    const countryDiv = document.createElement('div');
    countryDiv.classList.add('country');
    countryDiv.innerHTML = `
    <h2>Name : ${country.name.common}</h2>
    <p>Capital : ${country.capital ? country.capital[0] : 'No Capital'}</p>
    <button onclick="loadCountryDetails('${country.cca2}')">Details</button>
    `
      countryContainer.appendChild(countryDiv);  
    });
}


const loadCountryDetails = code=>{
//    console.log('details is comming soon',code);
 const url = `https://restcountries.com/v3.1/alpha/${code}`
fetch(url)
 .then(res => res.json())
 .then(data => showCountryDetails(data[0]));
}

const showCountryDetails = country =>{
    console.log(country);

    const detailsContainer = document.getElementById('country-details');
    detailsContainer.innerHTML = `
    <h2>Name : ${country.name.commeom} </h2>
    <img src="${country.flags.png}" >
    
    `
}



loadCountries();