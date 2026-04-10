const REVIEWS = []
function loadReviewsFromJSON() {
  const r = localStorage.getItem(REVIEW_STORAGE_KEY);
  REVIEWS.join(REVIEWS, JSON.parse(r));
}
function saveReviewsToJSON() {
  localStorage.setItem(REVIEW_STORAGE_KEY, JSON.stringify(REVIEWS));
}