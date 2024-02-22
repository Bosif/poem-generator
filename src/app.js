function generatePoem(event) {
  event.preventDefault();

  let poemContainer = document.querySelector("poem");

  new Typewriter("#poem", {
    strings: "Roses are red...",
    autoStart: true,
    delay: 20,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-generator");
poemFormElement.addEventListener("submit", generatePoem);
