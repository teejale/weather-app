export function getSavedCity() {
  return localStorage.getItem("city") || "";
}

export function setSavedCity(city) {
  localStorage.setItem("city", city);
}

export function getFavorites() {
  const favoriteCities = localStorage.getItem("favorites") || "";
  return JSON.parse(favoriteCities);
}

export function setFavorites() {
  localStorage.setItem("favorites", JSON.stringify(favorites));
}
