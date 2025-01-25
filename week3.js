const myTown = document.querySelector('#town');
const myDescription = document.querySelector('#description');
const myTemperature = document.querySelector('#temperature');
const myGraphic = document.querySelector('#graphic');



const myKey = "5a0dcf4ed7e8058ddc3187a5e416f423"
const myLat = "13.714741211660607" 
const myLong = "-89.12590581737159"

const myURL = `//api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=imperial`

async function apiFetch() {
    try {
      const response = await fetch(myURL);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // testing only
        // displayResults(data); // uncomment when ready
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }

  function displayResults(data) {
    myTown.innerHTML= data.name
    myDescription.innerHTML = data.weather[0].description
    myTemperature.innerHTML = `${data.main.temp}&deg;F`
    
  }
  
  apiFetch();

