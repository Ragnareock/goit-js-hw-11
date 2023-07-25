import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '38465954-ecd83796ed0d72bc388713e5b';

const params = new URLSearchParams({
  key: API_KEY,
  image_type: photo,
  orientation: horizontal,
  safesearch: true,
});

async function fetchImages(searchQuery, page, perPage) {
  return axios.get(
    `${BASE_URL}?q=${searchQuery}&${params}&page=${page}&per_page=${perPage}`
  );
}

export { fetchImages };
