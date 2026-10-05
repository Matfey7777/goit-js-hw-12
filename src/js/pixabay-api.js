import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export async function getImagesByQuery(query, page) {
  const response = await axios.get('/', {
    params: {
      q: query,
      page,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 15,
      key: '57805078-134aca3c8ad054738ba6853d0',
    },
  });

  return response.data;
}
