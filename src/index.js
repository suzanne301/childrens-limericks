function displayPoem(response) {

  new Typewriter('#poem', {
    strings: response.data.answer,
    autoStart: true,
    delay: 30,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "03351b3tc2f7fc9oa83ff4ea58bed167";
  let prompt = `User instructions: ⏳  Your limerick about ${instructionsInput.value} is on its way!`;
  let context = "You are a funny limerick expert that enjoys writing limericks for young children aged 10 and under.  Your mission is to generate a five line limerick in basic HTML and separate each line with a <br />. Make sure to follow the user instructions. Do not include a title with the poem. Sign the poem with 'Suzanne Paterson AI' inside a <strong> element underneath the poem.";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">⏳  Your limerick about ${instructionsInput.value} is on its way!</div>`

  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);