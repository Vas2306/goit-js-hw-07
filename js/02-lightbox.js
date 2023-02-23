import { galleryItems } from './gallery-items.js';

// console.log(galleryItems);

const containerForImages = document.querySelector(".gallery");
// console.log(containerForImages);

const createGalleryMarkup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
  )
  .join("");

containerForImages.insertAdjacentHTML("beforeend", createGalleryMarkup);

containerForImages.addEventListener('click', onImageClick);

function onImageClick(evt) {
  if (evt.target.nodeName !== 'IMG') {
    return;
 }
  evt.preventDefault();
  const urlBigImage = evt.target.closest('.gallery__item').href;

  console.log(urlBigImage);

  console.log(evt.target);
  console.log(evt.target.nodeName);
  console.log(evt.target.classList.value);
  console.log(evt.target.src);
  console.log(evt.target.alt);
 
};
