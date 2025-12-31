let quoteNum = document.querySelector("#number");
let quote = document.getElementById("quote");
let btn = document.querySelector(".nextBtn");
let i = 0;
btn.addEventListener("click", () => {
  const proxyURL = "https://api.allorigins.win/get?url=";
  const apiUrl = "https://type.fit/api/quotes";
  fetch(proxyURL + encodeURIComponent(apiUrl))
    .then((res) => res.json())
    .then((data) => {
      const quotesArray = JSON.parse(data.contents);
      let randonIndex = Math.floor(Math.random() * quotesArray.length);
      let randomQuote = quotesArray[randonIndex];
      console.log(randomQuote.text);
      quote.textContent = randomQuote.text;
      //console.log("- " + data.author);
    });
  quoteNum.innerHTML = ++i;
});
