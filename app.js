let input = document.querySelector('#input')

let btn = document.querySelector('#done')

let wholeDiv =  document.querySelector('.card')

let cardImage = document.querySelector('.image-card')

let name = document.querySelector('.card-title')

let capital = document.querySelector('.card-text')

let population = document.querySelector('.pop')

let area = document.querySelector('.area')

let lang = document.querySelector('.lang')


function findCountry() {

    async function countryFoo(country) {

        const countryData = await fetch(`https://restcountries.com/v3.1/name/${country}`)

        return countryData
    }

    countryFoo(input.value)
        .then((data) => {
            return data.json()
        })
        .then((jsData) => {
            const {area,capital,flags,name,population,continents} = jsData[0]
            console.log(jsData[0]);
            console.log(area);
            console.log(capital);
            console.log(flags.png);
            console.log(name.official);
            console.log(continents);
            console.log(population);
            wholeDiv.innerHTML = `<img src="${flags.png}" class="card-img-top image-card" alt="...">
            <div class="card-body">
              <h5 class="card-title">NAME:${name.official}</h5>
             <p class="card-text"></p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item pop">Population:${population}</li>
              <li class="list-group-item cap">capital:${capital}</li>
              <li class="list-group-item area">AREA:${area}</li>
              <li class="list-group-item continents">continents:${continents[0]}</li>
            </ul>
            <!-- <div class="card-body">
              <a href="#" class="card-link">Card link</a>
              <a href="#" class="card-link">Another link</a>
            </div> -->
          </div>`
        })
        .catch((err) => {
            throw new Error("bhai kuch to garbar hai", err)
        })
        console.log("pehly ye kr");
}