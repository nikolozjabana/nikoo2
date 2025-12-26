const container = document.getElementById("fighters");
const searchInput = document.getElementById("search");
let fightersData = [];
const favApi = "https://694c1c03da5ddabf003618bb.mockapi.io/favs";

async function loadFighters() {
  try {
    const res = await fetch("https://694c1c03da5ddabf003618bb.mockapi.io/fighters");
    const data = await res.json();

    fightersData = data;
    renderFighters(fightersData);
  } catch (error) {
    console.log(error);
  }
}

function renderFighters(fighters) {
  container.innerHTML = "";

  fighters.forEach(fighter => {
    const card = document.createElement("div");
    card.className = "fighter";

    card.innerHTML = `
      <img src="${fighter.img}" alt="${fighter.name}">
      <h3>${fighter.name}</h3>
      <p>${fighter.record}</p>
      <button class="add-fav">Add to Favorites</button>
    `;

    card.querySelector(".add-fav").addEventListener("click", () => addToFav(fighter));
    container.appendChild(card);
  });
}

async function addToFav(fighter) {
  try {
    await fetch(favApi, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(fighter)
    });
    alert(`${fighter.name} added to favorites!`);
  } catch (error) {
    console.log(error);
  }
}

searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  const filtered = fightersData.filter(fighter => fighter.name.toLowerCase().startsWith(query));
  renderFighters(filtered);
});

loadFighters();


const burger = document.getElementById("burger");
const navLinks = document.getElementById("nav-links");

burger.addEventListener("click", () => {
  navLinks.classList.toggle("show");

  // Animate burger into X
  burger.classList.toggle("active");
});
