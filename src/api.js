const API_KEY = "54040935-96888b09b5fdec7a1aacd0c2b"
const BASE_URL = "https://pixabay.com/api/"
export const fetchImages = (quary, page = 1)=>{
  return fetch(`${BASE_URL}?key=${API_KEY}&q=${quary}&page=${page}&orientation=vertical&per_page=14`).then(res => res.json(res))
}