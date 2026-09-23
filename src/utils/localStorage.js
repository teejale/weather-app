export function getSavedCity() {
  return localStorage.getItem("city") || "";
}

export function setSavedCity(city) {
  localStorage.setItem("city", city);
}

export function getFavoriteCity() {
  return localStorage.getItem("favorite") || "";
}

export function setFavoriteCity() {
  localStorage.setItem("favorite", favorite);
}
