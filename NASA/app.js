const nasaBtn = document.querySelector("#nasa-btn");
const nasaImg = document.querySelector("#space-pic");
const dateInput = document.querySelector("#space-date");
const photoTitle = document.querySelector("#photo-title");

async function fetchData() {
  const userInput = dateInput.value;
  const nasaURL = `https://api.nasa.gov/planetary/apod?api_key=RzpDR9FiA0dgcUrjyFiL6RikXztcvcqTLDonfazb&date=${userInput}`;

  const response = await fetch(nasaURL);
  const jsonData = await response.json();

  photoTitle.innerText = jsonData.title;

  let nasaIMgURL = jsonData.url;
  nasaImg.src = nasaIMgURL;

  console.log(jsonData);
}

nasaBtn.addEventListener("click", fetchData);
