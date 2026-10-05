import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export const refs = {
  form: document.querySelector('.form'),
  gallery: document.querySelector('.gallery'),
  loadMore: document.querySelector('.load-more'),
  loader: document.querySelector('.loader'),
};

const lightbox = new SimpleLightbox('.gallery a');

export function createGallery(images) {
  const markup = images
    .map(image => {
      return `
        <li class="gallery-item">
          <a class="gallery-link" href="${image.largeImageURL}">
            <img
              class="gallery-image"
              src="${image.webformatURL}"
              alt="${image.tags}"
            />
          </a>

          <div class="gallery-info">
            <div class="gallery-info-item">
              <span class="gallery-info-title">Likes</span>
              <span>${image.likes}</span>
            </div>

            <div class="gallery-info-item">
              <span class="gallery-info-title">Views</span>
              <span>${image.views}</span>
            </div>

            <div class="gallery-info-item">
              <span class="gallery-info-title">Comments</span>
              <span>${image.comments}</span>
            </div>

            <div class="gallery-info-item">
              <span class="gallery-info-title">Downloads</span>
              <span>${image.downloads}</span>
            </div>
          </div>
        </li>
      `;
    })
    .join('');

  refs.gallery.insertAdjacentHTML('beforeend', markup);

  lightbox.refresh();
}

export function clearGallery() {
  refs.gallery.innerHTML = '';
}

export function showLoader() {
  refs.loader.classList.remove('is-hidden');
}

export function hideLoader() {
  refs.loader.classList.add('is-hidden');
}

export function showLoadMoreButton() {
  refs.loadMore.classList.remove('is-hidden');
}

export function hideLoadMoreButton() {
  refs.loadMore.classList.add('is-hidden');
}
