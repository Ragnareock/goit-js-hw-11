import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '38465954-ecd83796ed0d72bc388713e5b';

async function fetchImages({ searchQuery, page }) {
  return await axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: `${searchQuery}`,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: `${page}`,
      per_page: 40,
    },
  });
}

export { fetchImages };
