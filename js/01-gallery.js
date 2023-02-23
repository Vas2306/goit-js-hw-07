import { galleryItems } from "./gallery-items.js";

const containerForImages = document.querySelector(".gallery");

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

function onImageClick(evt) {
  if (evt.target.nodeName !== "IMG") {
    return;
  }
  evt.preventDefault();
  const urlBigImage = evt.target.dataset.source;
  const instance = basicLightbox.create(`
    <img src="${urlBigImage}" width="800" height="600">
`);
  instance.show();
}

containerForImages.addEventListener("click", onImageClick);
