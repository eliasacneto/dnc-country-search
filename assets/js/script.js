document.getElementById('card').style.setProperty('display', 'none', 'important')


function Search(){
  document.getElementById('card').style.setProperty('display', 'block', 'important')

  let country = document.getElementById('country').value
  let finalURL = `https://restcountries.com/v3.1/name/${country}?fullText=true`

  console.log(finalURL)

  fetch(finalURL)
  .then(function(response){
    return response.json()
  })
  .then(function(data){
    console.log(data[0])

    let flag = document.getElementById('flag')
    let name = document.getElementById('name')
    let capital = document.getElementById('capital')
    let continent = document.getElementById('continent')
    let population = document.getElementById('population')

    name.innerHTML = country
    capital.innerHTML = data[0].capital[0]
    continent.innerHTML = data[0].continents[0]
    population.innerHTML = data[0].population

    flag.src = data[0].flags.svg

  })

}