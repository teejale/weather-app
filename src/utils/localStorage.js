export function getSavedCity() {
  return localStorage.getItem("city") || "";
}

export function setSavedCity(city) {
  localStorage.setItem("city", city);
}
