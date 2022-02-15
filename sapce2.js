/*
  Author: Ryan Jacobell
  This is the JS for my page about space
*/

async function getImg() {
  base_url =
    "https://api.nasa.gov/planetary/apod?api_key=DaFi4M1aSffvFg0EGzfCxWruc6FyhR7wStWMPtxf&";
  const response = await fetch(base_url);
  const data = await response.json(); //convert response into json
  console.log(data); //log the data
// display data 
  document.getElementById("date").textContent = "Date: " + data.date;
  document.getElementById("exp").textContent = data.explanation;
  document.getElementById("title").textContent = data.title;
  document.getElementById('bg').src = data.url;
  document.getElementById('dwnld').href = data.hdurl;
}
// function call
getImg();
