const favContainer = document.getElementById("favorites");
const favApi = "https://694c1c03da5ddabf003618bb.mockapi.io/favs";

// Load favorites
async function loadFavs() {
  try {
    const res = await fetch(favApi);
    const favs = await res.json();

    favContainer.innerHTML = "";
    favs.forEach(fighter => {
      const card = document.createElement("div");
      card.className = "fighter";

      card.innerHTML = `
        <img src="${fighter.img}" alt="${fighter.name}">
        <h3>${fighter.name}</h3>
        <p>${fighter.record}</p>
        <button class="remove-fav">Remove</button>
      `;

      card.querySelector(".remove-fav").addEventListener("click", () => removeFav(fighter.id));
      favContainer.appendChild(card);
    });
  } catch (error) {
    console.log(error);
  }
}

// Remove favorite
async function removeFav(id) {
  try {
    await fetch(`${favApi}/${id}`, { method: "DELETE" });
    loadFavs();
  } catch (error) {
    console.log(error);
  }
}

loadFavs();
