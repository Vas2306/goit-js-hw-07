import { galleryItems } from "./gallery-items.js";
// console.log(galleryItems);

const containerForImages = document.querySelector(".gallery");
// console.log(containerForImages);

const createGalleryMarkup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
    data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
  )
  .join("");

containerForImages.insertAdjacentHTML("beforeend", createGalleryMarkup);

containerForImages.addEventListener('click', onImageClick);

function onImageClick(evt) {
  if (evt.target.nodeName !== 'IMG') {
    return;
 }
  evt.preventDefault();
  const urlBigImage = evt.target.dataset.source;

  console.log(urlBigImage);

  console.log(evt.target);
  console.log(evt.target.nodeName);
  console.log(evt.target.classList.value);
  console.log(evt.target.src);
  console.log(evt.target.alt);
  console.log(evt.target.dataset.source);
};
 
