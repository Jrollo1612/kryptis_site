function loadReviewsFromCookie() {
  const cookie = document.cookie
    .split("; ")
    .find((row) => row.startsWith("reviews="));

  if (!cookie) return [];

  try {
    return JSON.parse(decodeURIComponent(cookie.split("=")[1]));
  } catch (e) {
    console.error("Erreur cookie:", e);
    return [];
  }
}

// Fusion cookie + localStorage
function mergeReviews() {
  const cookieReviews = loadReviewsFromCookie();

  let localReviews = [];
  try {
    const raw = localStorage.getItem("morseTranslatorReviews");
    if (raw) localReviews = JSON.parse(raw);
  } catch {}

  return [...cookieReviews, ...localReviews];
}