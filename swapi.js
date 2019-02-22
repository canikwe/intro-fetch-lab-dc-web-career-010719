//set variables and function for crawl event listener
let crawlDiv = document.querySelector("#crawlDiv")
let crawlBtn = document.querySelector("#crawlBtn")


function getOpeningCrawl() {
  fetch('https://swapi.co/api/films/1/')
  .then(res => res.json())
  .then(json => crawlDiv.innerText = json.opening_crawl)
}
//set crawl event listener
crawlBtn.addEventListener("click", getOpeningCrawl)

//set variables and function for getPlanet
let findPlanet = document.querySelector("#findPlanet")
let pDataDiv = document.querySelector("#planetData")

function getPlanet(e) {
  e.preventDefault()
  
  let planetInput = document.querySelector("#planetInput").value
  fetch(`https://swapi.co/api/planets/${planetInput}`)
  .then(res => {
    debugger
    res.json()})
  .then(json => planetData(json))
  
}

function planetData(json) {
  
  pDataDiv.innerHTML = `<p>Name: ${json.name}</p><p>Climate: ${json.climate}</p>`
  
}

//set getPlanet event listener
findPlanet.addEventListener("click", getPlanet)