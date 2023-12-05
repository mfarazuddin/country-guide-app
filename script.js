const input = document.getElementById("country-inp");
const btn = document.getElementById("search-btn");
const result = document.getElementById("result");

btn.addEventListener('click', ()=>{
    let countryName = input.value;
    let url = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;

    console.log(url);

    fetch(url).then(response => response.json()).then((data)=>{
        console.log(data[0]);
        console.log(data[0].capital[0]);
        console.log(data[0].flags.svg);
        console.log(data[0].name.common);
        console.log(data[0].continents[0]);
        console.log(Object.keys(data[0].currencies)[0]);
        console.log(data[0].currencies[Object.keys(data[0].currencies)].name);

        result.innerHTML = `
        <img src = "${data[0].flags.svg}"</img>
        <h1>${data[0].name.common}</h1>
        <h3><span>Capital :</span> ${data[0].capital[0]}</h3>
        <h3> <span>Continent :</span> ${data[0].continents}</h3>
        <h3> <span>Curruncy :</span> ${Object.keys(data[0].currencies)[0]}</h3>
        <h3> <span>Curruncy :</span> ${data[0].currencies[Object.keys(data[0].currencies)].name}</h3>
        <h3 class="lang"> <span>Languages :</span> ${Object.keys(data[0].languages)}</h3>
        <h3> <span>TimeZone :</span> ${data[0].timezones}</h3>
        `

    }).catch((error)=> document.write(error))

})

