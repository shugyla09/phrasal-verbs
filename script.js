function searchVerb() {
    const input = document.getElementById("searchInput").value.toLowerCase().trim();

    if (!input) return;
  
    const found = phrasalVerbs.find(item =>
      item.verb.toLowerCase() === input
    );
  
    if (found) {
      displayVerb(found);
    } else {
      document.getElementById("result").innerHTML =
        "<p style='color:red'>Not found 😢</p>";
    }
  }
  
  function displayVerb(found) {
    document.getElementById("result").innerHTML = `
      <div class="result-card">
        <h2>${found.verb}</h2>
        <p><b>Meaning:</b> ${found.meaning}</p>
        <p><b>Example:</b> ${found.example}</p>
        <p><b>Synonyms:</b> ${found.synonyms.join(", ")}</p>
        <p><b>💬 Dialogue:</b></p>
        <pre>${found.dialogue}</pre>

        <a href="https://youglish.com/search/${found.verb}" target="_blank">
      🎬 Watch real usage on YouGlish
    </a>
  </div>
`;
  }
  
  function randomVerb() {
    const randomIndex = Math.floor(Math.random() * phrasalVerbs.length);
    const randomItem = phrasalVerbs[randomIndex];
  
    displayVerb(randomItem);
  }
  
  // Optional: Enter басқанда search
  document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      searchVerb();
    }
  });