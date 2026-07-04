const API_KEY = '54251351-6221a0d55e5ab0d40dfdae0df'
const BASE_URL = 'https://pixabay.com/api/'
export const fetchImages = (quary, page = 1) => {
    return fetch(`${BASE_URL}?key=${API_KEY}&q=${quary}&page=${page}&orientation=vertical&per_page=12`).then(res => res.json())
}